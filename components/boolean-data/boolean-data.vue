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
  <view class="button-data-main uni-flex">
    <view class="uni-title" style="width:80%">{{ title }}</view>
    <switch :checked="_checked" :disabled="disabled" @change="_change" />
  </view>
</template>

<style>
  .button-data-main {
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, .06);
    align-items: center;
  }
</style>
