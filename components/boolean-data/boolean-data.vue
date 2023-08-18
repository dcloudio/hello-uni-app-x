<script lang="ts">
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
	<view class="uni-flex" style="justify-content: space-between;padding: 10rpx;">
		<view class="uni-title" style="width:80%">{{ title }}</view>
		<switch :checked="_checked" @change="_change" />
	</view>
</template>

<style></style>