<script lang="uts">
	export default {
		name: "input-data",
		props: {
			title: {
				type: String,
				required: true
			},
			type: {
				type: String,
				required: true
			},
			defaultValue: {
				type: String,
				required: true,
				default: ''
			}
		},
		data() {
			return {
				inputClearValue: '' as any,
				showClearIcon: false,
				inputType: 'text'
			}
		},
		created() {
			switch (this.type) {
				case 'number':
					this.inputType = 'number'
					break;
			}
			this.inputClearValue = this.getValue(this.defaultValue)
		},
		methods: {
			input: function (event : InputEvent) {
				// @ts-ignore
				this.inputClearValue = event.detail.value
				// @ts-ignore
				if (event.detail.value.length > 0) {
					this.showClearIcon = true
				} else {
					this.showClearIcon = false
				}

				this.$emit('confirm', this.getValue(this.inputClearValue))
			},
			clearIcon: function () {
				this.inputClearValue = ''
				this.showClearIcon = false
			},
			// @ts-ignore
			confirm(e : InputConfirmEvent) {
				// this.$emit('confirm', this.getValue(e.detail.value))
			},
			getValue(value : any) : any {
				switch (this.type) {
					case 'number':
						return parseFloat(value as string)
				}

				return value
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
	<view class="uni-input-wrapper input-wrapper uni-flex">
		<input class="uni-input" :type="inputType" :value="inputClearValue" :placeholder="title" @input="input"
			@confirm="confirm" />
		<image class="input-wrapper_image" src="/static/icons/clear.png" v-if="showClearIcon" @click="clearIcon">
		</image>
	</view>
</template>


<style>
	.input-wrapper {
		border: 1px solid rgba(0, 0, 0, .08);
		justify-content: center;
		padding: 0;
		margin: 0 20rpx;
		background-color: #FFF;
	}

	.input-wrapper_image {
		width: 22px;
		height: 22px;
		margin-right: 10rpx;
	}
</style>