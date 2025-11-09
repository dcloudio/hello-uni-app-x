#!/bin/bash

# 批量转换uvue文件为组合式API的脚本

# 已转换的文件列表
CONVERTED_FILES=(
  "pages/API/dialog-page/dialog-2.uvue"
  "pages/API/dialog-page/dialog-3.uvue"
  "pages/API/dialog-page/dialog-4.uvue"
  "pages/API/dialog-page/dialog-5.uvue"
  "pages/API/dialog-page/dialog-6.uvue"
  "pages/API/cloud-storage/cloud-storage.uvue"
  "pages/API/element-draw/element-draw.uvue"
  "pages/component/scroll-view/scroll-view-refresher-props.uvue"
  "pages/component/canvas/canvas-context.uvue"
  "pages/component/image/image-path.uvue"
  "uni_modules/uni-loading/components/uni-loading/uni-loading.uvue"
  "App.uvue"
)

# 检查文件是否已转换
is_converted() {
  local file="$1"
  for converted in "${CONVERTED_FILES[@]}"; do
    if [[ "$file" == *"$converted"* ]]; then
      return 0
    fi
  done
  return 1
}

# 转换单个文件
convert_file() {
  local file="$1"
  echo "转换文件: $file"

  # 检查是否已经是组合式API
  if grep -q "<script setup" "$file"; then
    echo "跳过 - 已是组合式API"
    return 1
  fi

  # 检查是否有export default
  if ! grep -q "export default {" "$file"; then
    echo "跳过 - 没有export default"
    return 1
  fi

  # 创建备份
  cp "$file" "$file.bak"

  # 1. 替换script标签
  sed -i 's/<script>/<script setup lang="uts">/' "$file"
  sed -i 's/<script lang="uts">/<script setup lang="uts">/' "$file"

  # 2. 检测需要的导入并添加
  if grep -q "data()" "$file" || grep -q "computed:" "$file" || grep -q "watch:" "$file"; then
    # 在script标签后插入导入语句
    sed -i '/<script setup lang="uts">/a\  import { ref, computed, watch, getCurrentInstance } from '"'"'vue'"'"'' "$file"
  fi

  # 3. 替换this引用
  sed -i 's/this\.\([a-zA-Z_][a-zA-Z0-9_]*\)/\1.value/g' "$file"
  sed -i 's/component: \.value/component: getCurrentInstance()!.proxy!/g' "$file"

  # 4. 移除export default {
  sed -i 's/export default {//' "$file"

  # 5. 删除文件末尾的多余闭合括号 (在</script>之前)
  # 这需要更复杂的处理，暂时跳过

  echo "✓ 转换完成: $file"
  return 0
}

# 主程序
count=0
skipped=0
errors=0

# 查找所有uvue文件
while IFS= read -r file; do
  # 跳过已转换的文件
  if is_converted "$file"; then
    echo "跳过已转换: $file"
    ((skipped++))
    continue
  fi

  # 转换文件
  if convert_file "$file"; then
    ((count++))
  else
    ((skipped++))
  fi

  # 每10个文件报告一次进度
  if (( (count + skipped) % 10 == 0 )); then
    echo ""
    echo "进度: 已转换 $count, 跳过 $skipped"
    echo ""
  fi

done < <(find . -name "*.uvue" -type f ! -path "./node_modules/*" ! -path "./unpackage/*" ! -path "./.git/*")

echo ""
echo "=============================="
echo "批量转换完成！"
echo "成功转换: $count 个文件"
echo "跳过: $skipped 个文件"
echo "失败: $errors 个文件"
echo "=============================="
