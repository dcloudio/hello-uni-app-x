<script lang="uts">
	export default {
		props: {
			title: {
				type: String,
				default: ''
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
			_change(e : SwitchChangeEvent) {
				this._checked = e.detail.value;
				this.$emit('change', this._checked)
			}
		}
	}
</script>

<template>
	<view class="button-data-main uni-flex">
		<view class="uni-title" style="width:80%">{{ title }}</view>
		<switch :checked="_checked" @change="_change" />
	</view>
</template>

<style>
	.button-data-main {
		justify-content: space-between;
		padding: 20rpx;
		border-bottom: 1px solid rgba(0,0,0,.06);
	}
</style>