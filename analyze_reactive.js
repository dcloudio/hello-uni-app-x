const fs = require('fs');
const path = require('path');

// 分析单个文件
function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // 分离模板和脚本部分
  const templateMatch = content.match(/<template>([\s\S]*?)<\/template>/);
  const scriptMatch = content.match(/<script setup lang="uts">([\s\S]*?)<\/script>/);

  if (!scriptMatch) {
    return null;
  }

  const template = templateMatch ? templateMatch[1] : '';
  const script = scriptMatch[1];

  // 查找所有 ref() 和 reactive() 定义的变量
  const refPattern = /const\s+(\w+)\s*=\s*ref\s*\(/g;
  const reactivePattern = /const\s+(\w+)\s*=\s*reactive\s*\(/g;

  const refVars = [];
  const reactiveVars = [];

  let match;
  while ((match = refPattern.exec(script)) !== null) {
    refVars.push(match[1]);
  }

  while ((match = reactivePattern.exec(script)) !== null) {
    reactiveVars.push(match[1]);
  }

  // 检查每个响应式变量的使用情况
  const results = {
    file: filePath,
    canOptimize: [],
    mustKeepReactive: [],
    refBindings: []
  };

  // 检查 ref 变量
  for (const varName of refVars) {
    // 检查是否在模板中通过 ref="xxx" 绑定
    const refBindingPattern = new RegExp(`ref=["']${varName}["']`);
    if (refBindingPattern.test(template)) {
      results.refBindings.push(varName);
      results.mustKeepReactive.push({ name: varName, reason: 'ref binding in template' });
      continue;
    }

    // 检查是否在模板中使用
    const usedInTemplate = isUsedInTemplate(varName, template);

    if (usedInTemplate) {
      results.mustKeepReactive.push({ name: varName, reason: 'used in template' });
    } else {
      // 可能可以优化
      results.canOptimize.push({ name: varName, type: 'ref' });
    }
  }

  // 检查 reactive 变量
  for (const varName of reactiveVars) {
    const usedInTemplate = isUsedInTemplate(varName, template);

    if (usedInTemplate) {
      results.mustKeepReactive.push({ name: varName, reason: 'used in template' });
    } else {
      results.canOptimize.push({ name: varName, type: 'reactive' });
    }
  }

  return results;
}

// 检查变量是否在模板中使用
function isUsedInTemplate(varName, template) {
  // 检查各种模板使用模式
  const patterns = [
    new RegExp(`{{[^}]*\\b${varName}\\b[^}]*}}`), // {{ varName }}
    new RegExp(`v-if=["'][^"']*\\b${varName}\\b[^"']*["']`), // v-if="varName"
    new RegExp(`v-show=["'][^"']*\\b${varName}\\b[^"']*["']`), // v-show="varName"
    new RegExp(`v-for=["'][^"']*\\b${varName}\\b[^"']*["']`), // v-for="item in varName"
    new RegExp(`:class=["'][^"']*\\b${varName}\\b[^"']*["']`), // :class="varName"
    new RegExp(`:style=["'][^"']*\\b${varName}\\b[^"']*["']`), // :style="varName"
    new RegExp(`:${varName}=`), // :varName=
    new RegExp(`:\\w+=["'][^"']*\\b${varName}\\b[^"']*["']`), // :prop="varName"
    new RegExp(`{{[^}]*\\b${varName}\\.\\w+`), // {{ varName.prop }}
    new RegExp(`["']\\b${varName}\\.\\w+`), // "varName.prop"
  ];

  return patterns.some(pattern => pattern.test(template));
}

// 遍历目录
function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file.endsWith('.uvue')) {
      callback(filePath);
    }
  }
}

// 主函数
function main() {
  const componentDir = 'D:\\xm\\02-DC-items\\uni-app-x\\hello-uni-app-x\\pages\\component';
  const results = [];

  walkDir(componentDir, (filePath) => {
    const result = analyzeFile(filePath);
    if (result && (result.canOptimize.length > 0 || result.refBindings.length > 0)) {
      results.push(result);
    }
  });

  // 输出结果
  console.log(JSON.stringify(results, null, 2));
}

main();
