<script lang="uts">
  import { state } from '@/store/index.uts'
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
    computed: {
      isDarkMode() : boolean {
        return state.isDarkMode
      }
    },
    data() {
      return {
        _checked: false
      }
    },
    created() {
      this._checked = this.defaultValue
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
    <text class="uni-title" style="width:80%">{{ title }}</text>
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
/* 适配暗黑主题 */
.button-data-main.dark-mode {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}
.button-data-main.dark-mode .uni-title {
  color: #ffffff;
}

</style>
