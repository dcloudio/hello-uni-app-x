<script lang="uts">
	export type ItemType = { value : number; name : string }

	export default {
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
				const selected = this.items.find((item) : boolean => {
					return item.name === e.detail.value as string
				})
				this.current = selected?.value as number
				this.$emit('change', this.current)
				uni.showToast({
					icon: 'none',
					title: '当前选中:' + selected?.name,
				})
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
		<radio-group @change="_change" class="radio-group">
			<radio class="uni-list-cell uni-list-cell-pd radio" v-for="(item, index) in items" :key="item.name"
				:class="index < items.length - 1 ? 'uni-list-cell-line' : ''" :value="item.name" :checked="index === current">
				{{ item.name }}
			</radio>
		</radio-group>
	</view>
</template>

<style></style>