/**
 * migrate-pages-to-subpackages.js (v2)
 *
 * 将 pages.json 中 pages 数组里非 tabBar 页面迁移到 subPackages 中
 * 完整保留 // #ifdef / // #ifndef / // #endif 等条件编译指令
 *
 * 使用方法：
 *   node scripts/migrate-pages-to-subpackages.js [--dry-run] [--backup]
 *
 * 选项：
 *   --dry-run   仅打印变更内容，不实际修改文件
 *   --backup    修改前备份原始文件为 pages.json.bak
 *
 * 原理：
 *   以文本模式（而非解析为 JSON）处理 pages.json，逐行分词后提取每个
 *   页面对象及其所属的条件编译上下文，再原样写入对应 subPackage 条目。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const PAGES_JSON_PATH = path.resolve(__dirname, '..', 'pages.json');
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const BACKUP = args.includes('--backup');

// ─── 工具：跳过字符串字面量 ──────────────────────────────────────────────────

function skipString(text, pos) {
  let i = pos + 1;
  while (i < text.length) {
    if (text[i] === '\\') { i += 2; continue; }
    if (text[i] === '"') return i + 1;
    i++;
  }
  return i;
}

// ─── 找到顶层数组的字符范围 ──────────────────────────────────────────────────

/**
 * 在文本中找到 "key": [ ... ] 中 [ 和匹配的 ] 的字符位置。
 * 仅在 depth=1（顶层对象属性）时匹配。
 */
function findTopLevelArray(text, key) {
  const keyStr = `"${key}"`;
  let i = 0;
  let depth = 0;

  while (i < text.length) {
    const ch = text[i];

    if (ch === '"') {
      if (depth === 1 && text.startsWith(keyStr, i)) {
        let j = i + keyStr.length;
        while (j < text.length && /[\s:]/.test(text[j])) j++;
        if (text[j] === '[') {
          const arrStart = j;
          let d = 0;
          let k = j;
          while (k < text.length) {
            const c = text[k];
            if (c === '"') { k = skipString(text, k); continue; }
            if (c === '/' && text[k + 1] === '/') { while (k < text.length && text[k] !== '\n') k++; continue; }
            if (c === '[' || c === '{') d++;
            if (c === ']' || c === '}') { d--; if (d === 0) return { arrStart, arrEnd: k }; }
            k++;
          }
        }
      }
      i = skipString(text, i);
      continue;
    }

    if (ch === '/' && text[i + 1] === '/') { while (i < text.length && text[i] !== '\n') i++; continue; }
    if (ch === '/' && text[i + 1] === '*') { i += 2; while (i < text.length && !(text[i] === '*' && text[i + 1] === '/')) i++; i += 2; continue; }

    if (ch === '{' || ch === '[') depth++;
    if (ch === '}' || ch === ']') depth--;
    i++;
  }
  return null;
}

// ─── 分词器 ──────────────────────────────────────────────────────────────────

/**
 * 将数组内容（不含首尾 [ ]）逐行分解为 token 序列：
 *   { type: 'cond_start', text: '// #ifdef ...' }
 *   { type: 'cond_end' }
 *   { type: 'page', text: '{...}', path: '...' }
 */
function tokenizeArrayContent(content) {
  const tokens = [];
  // 规范化：将同行的 },{...} 拆分为两行，避免两个 page 对象被误合并为一个 token
  // 例如：    },{   →   },\n{
  content = content.replace(/\}[ \t]*,[ \t]*\{/g, '},\n{');
  const lines = content.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) { i++; continue; }

    // 条件编译开始：// #ifdef 或 // #ifndef
    if (/^\/\/\s*#(ifdef|ifndef)\b/.test(trimmed)) {
      tokens.push({ type: 'cond_start', text: trimmed });
      i++;
      continue;
    }

    // 条件编译结束：// #endif
    if (/^\/\/\s*#endif\b/.test(trimmed)) {
      tokens.push({ type: 'cond_end' });
      i++;
      continue;
    }

    // 页面对象：以 { 开头
    if (trimmed.startsWith('{')) {
      const objLines = [];
      let depth = 0;
      while (i < lines.length) {
        const l = lines[i];
        objLines.push(l);
        let inStr = false;
        for (let c = 0; c < l.length; c++) {
          const ch = l[c];
          if (inStr) {
            if (ch === '\\') { c++; continue; }
            if (ch === '"') inStr = false;
          } else {
            if (ch === '"') inStr = true;
            else if (ch === '{') depth++;
            else if (ch === '}') depth--;
          }
        }
        i++;
        if (depth <= 0) break;
      }
      const objText = objLines.join('\n');
      const pathMatch = objText.match(/"path"\s*:\s*"([^"]+)"/);
      tokens.push({ type: 'page', text: objText, path: pathMatch ? pathMatch[1] : null });
      continue;
    }

    i++;
  }

  return tokens;
}

// ─── 构建 PageItem 列表 ──────────────────────────────────────────────────────

/**
 * 遍历 token 序列，将每个页面对象与当前条件编译上下文关联。
 * 返回 PageItem[]：{ path, root, pagePath, cond, raw }
 */
function buildPageItems(tokens) {
  const items = [];
  let currentCond = null;

  for (const tok of tokens) {
    if (tok.type === 'cond_start') {
      currentCond = tok.text;
    } else if (tok.type === 'cond_end') {
      currentCond = null;
    } else if (tok.type === 'page' && tok.path) {
      const parts = tok.path.split('/');
      // 以二级目录（pages/API、pages/component 等）作为分包根
      // parts[0]='pages', parts[1]='API'|'component'|...
      const root = parts.slice(0, 2).join('/');
      const pagePath = parts.slice(2).join('/');
      items.push({ path: tok.path, root, pagePath, cond: currentCond, raw: tok.text });
    }
  }

  return items;
}

// ─── 重新缩进 ────────────────────────────────────────────────────────────────

/**
 * 以第一行的前导空白为基准，将整块文本重新缩进为 targetIndent。
 */
function reindent(text, targetIndent) {
  const lines = text.split('\n');
  const baseMatch = lines[0].match(/^(\s*)/);
  const base = baseMatch ? baseMatch[1] : '';

  return lines.map(line => {
    if (!line.trim()) return '';
    if (line.startsWith(base)) return targetIndent + line.slice(base.length);
    return targetIndent + line.trimStart();
  }).join('\n');
}

// ─── 构建新的 pages 数组内容 ──────────────────────────────────────────────────

function buildPagesContent(tabBarItems) {
  const parts = [];
  let prevCond = undefined;

  for (let idx = 0; idx < tabBarItems.length; idx++) {
    const item = tabBarItems[idx];

    if (item.cond !== prevCond) {
      if (prevCond) parts.push('\t\t// #endif');
      if (item.cond) parts.push(`\t\t${item.cond}`);
      prevCond = item.cond;
    }

    let objText = reindent(item.raw, '\t\t');
    // 去除原始文本中已有的尾部逗号
    objText = objText.trimEnd().replace(/,$/, '');
    // 除最后一项外均加逗号（JSON 校验器会忽略注释但保留所有项）
    if (idx < tabBarItems.length - 1) objText += ',';
    parts.push(objText);
  }

  if (prevCond) parts.push('\t\t// #endif');
  return parts.join('\n');
}

// ─── 构建新的 subPackage 条目 ────────────────────────────────────────────────

function buildSubPackageEntry(root, items) {
  const pageLines = [];
  let prevCond = undefined;

  for (let idx = 0; idx < items.length; idx++) {
    const item = items[idx];

    if (item.cond !== prevCond) {
      if (prevCond) pageLines.push('\t\t\t// #endif');
      if (item.cond) pageLines.push(`\t\t\t${item.cond}`);
      prevCond = item.cond;
    }

    // 将完整路径替换为相对路径
    const objText = item.raw.replace(`"path": "${item.path}"`, `"path": "${item.pagePath}"`);
    let formatted = reindent(objText, '\t\t\t\t');
    // 去除原始文本中已有的尾部逗号
    formatted = formatted.trimEnd().replace(/,$/, '');
    // 除最后一项外均加逗号（JSON 校验器会忽略注释但保留所有项）
    if (idx < items.length - 1) formatted += ',';
    pageLines.push(formatted);
  }

  if (prevCond) pageLines.push('\t\t\t// #endif');

  return [
    '\t\t{',
    `\t\t\t"root": "${root}",`,
    '\t\t\t"pages": [',
    pageLines.join('\n'),
    '\t\t\t]',
    '\t\t}',
  ].join('\n');
}

// ─── 主逻辑 ─────────────────────────────────────────────────────────────────

console.log(`读取 pages.json: ${PAGES_JSON_PATH}`);

const raw = fs.readFileSync(PAGES_JSON_PATH, 'utf-8');

// 1. 定位 "pages" 数组
const pagesRange = findTopLevelArray(raw, 'pages');
if (!pagesRange) { console.error('未找到 "pages" 数组'); process.exit(1); }

// 2. 分词 + 构建 PageItem 列表
const pagesContent = raw.slice(pagesRange.arrStart + 1, pagesRange.arrEnd);
const tokens = tokenizeArrayContent(pagesContent);
const allItems = buildPageItems(tokens);

// 3. 分离：tabBar 页保留、pages/ 非 tabBar 页迁移、uni_modules/ 等其他页保留
const tabBarItems = allItems.filter(it => it.path.startsWith('pages/tabBar'));
const migrateItems = allItems.filter(it =>
  it.path.startsWith('pages/') && !it.path.startsWith('pages/tabBar')
);
// uni_modules/ 及其他路径保留在 pages[] 中
const keepItems = allItems.filter(it => !it.path.startsWith('pages/'));

console.log(`\n原 pages 共 ${allItems.length} 项`);
console.log(`  保留（tabBar）:   ${tabBarItems.length} 项`);
console.log(`  保留（非pages/）: ${keepItems.length} 项`);
console.log(`  迁移到分包:       ${migrateItems.length} 项`);

// 4. 按 root 分组非 tabBar 页面
const rootMap = new Map();
for (const item of migrateItems) {
  if (!rootMap.has(item.root)) rootMap.set(item.root, []);
  rootMap.get(item.root).push(item);
}

// 4b. 读取现有 subPackages，将"子路径冲突"条目合并进 rootMap
//     例如 pages/API/get-file-system-manager 是 pages/API 的子路径，会产生冲突
//     解决方式：将其页面（路径前加子目录名）前置到 pages/API 分包，并标记原条目为待删除
const subRange0 = findTopLevelArray(raw, 'subPackages');
const conflictingRoots = new Set(); // 记录需要从现有 subPackages 中删除的 root

if (subRange0) {
  const existingSubContent = raw.slice(subRange0.arrStart + 1, subRange0.arrEnd);
  const subTokens = tokenizeArrayContent(existingSubContent);

  for (const tok of subTokens) {
    if (tok.type !== 'page') continue;
    const rootMatch = tok.text.match(/"root"\s*:\s*"([^"]+)"/);
    if (!rootMatch) continue;
    const existRoot = rootMatch[1];

    for (const newRoot of rootMap.keys()) {
      if (!existRoot.startsWith(newRoot + '/')) continue;

      // 发现冲突：existRoot 是 newRoot 的子路径
      conflictingRoots.add(existRoot);
      const subdir = existRoot.slice(newRoot.length + 1); // e.g. 'get-file-system-manager'

      // 提取该 subPackage 的 pages 数组原始内容
      const pRange = findTopLevelArray(tok.text, 'pages');
      if (!pRange) break;

      // 将 "path": "xxx" 替换为 "path": "subdir/xxx"（保留条件编译注释）
      let pagesText = tok.text.slice(pRange.arrStart + 1, pRange.arrEnd);
      pagesText = pagesText.replace(/"path"\s*:\s*"([^"]+)"/g, (_, p) => `"path": "${subdir}/${p}"`);

      // 分词得到每个 page token（含条件编译）
      const pageTokens = tokenizeArrayContent(pagesText);
      let currentCond = null;
      const extraItems = [];
      for (const pt of pageTokens) {
        if (pt.type === 'cond_start') { currentCond = pt.text; continue; }
        if (pt.type === 'cond_end')   { currentCond = null;    continue; }
        if (pt.type !== 'page')       continue;
        // pt.path 已经是调整后的相对路径（subdir/xxx）
        // 设 item.path === item.pagePath，使 buildSubPackageEntry 里的替换为 no-op
        extraItems.push({
          path: pt.path,
          root: newRoot,
          pagePath: pt.path,
          cond: currentCond,
          raw: pt.text, // 文本里 "path" 已是调整后的值
        });
      }

      // 前置到 rootMap（已存在的条目保留在后面）
      const existing = rootMap.get(newRoot) || [];
      rootMap.set(newRoot, [...extraItems, ...existing]);
      break;
    }
  }

  if (conflictingRoots.size > 0) {
    console.log(`  合并冲突分包:     ${[...conflictingRoots].join(', ')}`);
  }
}

// 5. 构建输出内容
// pages[] 保留 tabBar 页 + 非 pages/ 路径的页（uni_modules 等）
const pagesRetainItems = [...tabBarItems, ...keepItems];
const newPagesContent = buildPagesContent(pagesRetainItems);

console.log(`新增/合并 subPackage 条目: ${rootMap.size}`);

if (DRY_RUN) {
  console.log('\n[--dry-run] 未修改文件。新 pages 数组：');
  console.log(`[\n${newPagesContent}\n]`);
  console.log(`\n新 subPackage 条目数：${rootMap.size}`);
  process.exit(0);
}

if (BACKUP) {
  fs.writeFileSync(PAGES_JSON_PATH + '.bak', raw, 'utf-8');
  console.log(`备份原文件: ${PAGES_JSON_PATH}.bak`);
}

// 6. 替换 pages 数组（先替换，再在结果中找 subPackages，避免偏移混乱）
let result = raw.slice(0, pagesRange.arrStart) +
  `[\n${newPagesContent}\n\t]` +
  raw.slice(pagesRange.arrEnd + 1);

// 7. 重建 subPackages 数组：过滤冲突旧条目，追加新（合并后）条目
const subRange = findTopLevelArray(result, 'subPackages');
if (subRange) {
  const existingSubContent = result.slice(subRange.arrStart + 1, subRange.arrEnd);
  const subTokens2 = tokenizeArrayContent(existingSubContent);

  // 保留非冲突的现有条目（原始文本，重新规范缩进）
  const keepEntries = [];
  for (const tok of subTokens2) {
    if (tok.type !== 'page') continue;
    const rootMatch = tok.text.match(/"root"\s*:\s*"([^"]+)"/);
    const existRoot = rootMatch ? rootMatch[1] : null;
    if (existRoot && conflictingRoots.has(existRoot)) continue; // 已合并，跳过
    keepEntries.push(reindent(tok.text.trimEnd().replace(/,$/, ''), '\t\t'));
  }

  // 新分包条目（来自 rootMap，含合并后的页面）
  const newEntries = [];
  for (const [root, items] of rootMap) {
    newEntries.push(buildSubPackageEntry(root, items));
  }

  // 重建整个 subPackages 数组
  const allEntries = [...keepEntries, ...newEntries];
  const newSubArrayContent = '\n' + allEntries.join(',\n') + '\n\t';
  result = result.slice(0, subRange.arrStart + 1) + newSubArrayContent + result.slice(subRange.arrEnd);
} else {
  console.warn('⚠️  未找到 subPackages 数组，新的分包条目未插入');
}

fs.writeFileSync(PAGES_JSON_PATH, result, 'utf-8');
console.log('\n✅ pages.json 已更新（条件编译指令已原样保留）');
