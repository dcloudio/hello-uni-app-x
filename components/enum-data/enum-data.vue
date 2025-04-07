<script lang="uts">
  import { ItemType } from './enum-data-types'

  export default {
    emits: ['change'],
    props: {
      title: {
        type: String,
        default: ''
      },
      items: {
        type: Array as PropType<Array<ItemType>>,
        required: true
      }
    },
    data() {
      return {
        current: 0,
        isDarkMode: false
      }
    },
    created() {
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
      _change(e : RadioGroupChangeEvent) {
        const selected = this.items.find((item : ItemType) : boolean => {
          return item.value.toString() == e.detail.value
        })
        if (selected != null) {
          this.$emit('change', selected.value)
          uni.showToast({
            icon: 'none',
            title: '当前选中:' + selected.name,
          })
        }
      }
    }
  }
</script>

<template>
  <view class="uni-padding-wrap" :class="{ 'dark-mode': isDarkMode }">
    <view class="uni-title uni-common-mt">
      <text class="uni-title-text"> {{title}} </text>
    </view>
  </view>
  <view class="uni-list uni-common-pl" :class="{ 'dark-mode': isDarkMode }">
    <radio-group @change="_change">
      <radio class="uni-list-cell uni-list-cell-pd radio" v-for="(item, index) in items" :key="item.name"
        :class="index < items.length - 1 ? 'uni-list-cell-line' : ''"
         :value="item.value + ''" :color="isDarkMode ? '#a8a8b7' : '#007AFF'">
        {{ item.name }}
      </radio>
    </radio-group>
  </view>
</template>

<style>
/* 适配web端暗黑主题 */
/* #ifdef WEB */
.uni-padding-wrap.dark-mode .uni-title-text {
  color: #ffffff;
}

.uni-list.dark-mode .uni-list-cell {
  color: #ffffff;
}

.uni-list.dark-mode .uni-list-cell-line {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.uni-list.dark-mode {
  background-color: #353535;
}
/* #endif */
</style>
