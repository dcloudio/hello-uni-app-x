<script lang="uts">
  export default {
    emits: ['change'],
    props: {
      title: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      defaultValue: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        _checked: false,
        isDarkMode: false
      }
    },
    created() {
      this._checked = this.defaultValue
      // #ifdef WEB
      // 检查系统主题
      const info = uni.getAppBaseInfo()
      this.isDarkMode = info.hostTheme === 'dark'
      // 监听主题变化
      uni.onHostThemeChange((result) => {
        this.isDarkMode = result.hostTheme === 'dark'
      })
      // #endif
    },
    methods: {
      // @ts-ignore
      _change(e : UniSwitchChangeEvent) {
        this._checked = e.detail.value;
        this.$emit('change', this._checked)
      }
    }
  }
</script>

<template>
  <view class="button-data-main uni-flex" :class="{ 'dark-mode': isDarkMode }">
    <view class="uni-title" style="width:80%">{{ title }}</view>
    <switch :checked="_checked" :disabled="disabled" :color="isDarkMode ? '#a8a8b7' : '#007AFF'" @change="_change" />
  </view>
</template>

<style>
.button-data-main {
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, .06);
  align-items: center;
}
/* 适配web端暗黑主题 */
/* #ifdef WEB */
.button-data-main.dark-mode {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}
.button-data-main.dark-mode .uni-title {
  color: #ffffff;
}
/* #endif */
</style>
