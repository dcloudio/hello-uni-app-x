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
  <view class="uni-padding-wrap">
    <view class="uni-title uni-common-mt">
      <text class="uni-title-text"> {{title}} </text>
    </view>
  </view>
  <view class="uni-list uni-common-pl">
    <radio-group @change="_change">
      <radio class="uni-list-cell uni-list-cell-pd radio" v-for="(item, index) in items" :key="item.name"
        :class="index < items.length - 1 ? 'uni-list-cell-line' : ''" :value="item.value + ''">
        {{ item.name }}
      </radio>
    </radio-group>
  </view>
</template>

<style></style>
