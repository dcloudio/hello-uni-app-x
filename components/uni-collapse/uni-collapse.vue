<template>
  <!-- 父组件暂时无用，后续子组件联动需要使用到父组件 -->
  <view>
    <slot></slot>
  </view>
</template>

<script lang="uts" setup>
  defineOptions({
    name: "UniCollapse"
  })

  const props = defineProps({
    accordion: { type: Boolean, default: true }
  })

  let child_nodes = [] as Array<UniCollapseItemComponentPublicInstance>

  function init(child : UniCollapseItemComponentPublicInstance) {
    child_nodes.push(child)
  }
  // 关闭所有
  function cloceAll() {
    // 开启手风琴效果才回关闭其他
    if (props.accordion && child_nodes.length > 0) {
      child_nodes.forEach((item : UniCollapseItemComponentPublicInstance) => {
        const is_open = item.is_open as boolean
        if (is_open) {
          item.is_open = false
          item.openOrClose(false)
        }
      })
    }
  }

  defineExpose({
    init,
    cloceAll
  })
</script>

<style>

</style>
