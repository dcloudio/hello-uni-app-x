<script lang="uts">
  import { ItemType } from './enum-data-types'
  import { state } from '@/store/index.uts'
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
    computed: {
      isDarkMode() : boolean {
        return state.isDarkMode
      }
    },
    data() {
      return {
        current: 0
      }
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
  <view class="uni-padding-wrap" :class="isDarkMode ? 'theme-dark' : 'theme-light'">
    <view class="uni-title uni-common-mt">
      <text class="uni-title-text"> {{title}} </text>
    </view>
  </view>
  <view class="uni-list uni-common-pl" :class="isDarkMode ? 'theme-dark' : 'theme-light'">
    <radio-group @change="_change">
      <radio class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.name"
        :class="index < items.length - 1 ? 'uni-list-cell-line' : ''"
         :value="item.value + ''" :color="isDarkMode ? '#a8a8b7' : '#007AFF'">
        <text class="radio-text">{{ item.name }}</text>
      </radio>
    </radio-group>
  </view>
</template>

<style>
.uni-list .radio-text {
  color: var(--text-color, #333333);
}
</style>
