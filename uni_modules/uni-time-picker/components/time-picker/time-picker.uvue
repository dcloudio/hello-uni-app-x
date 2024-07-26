<template>
	<object class="def-picker" @init="onObjectInit" @timechanged="onTimeChanged"></object>
</template>

<script lang="uts">
	import { NativeTimePicker } from "@/uni_modules/uni-time-picker";


	export default {

		data() {
			return {
				picker: null as NativeTimePicker | null,
				hourValue: 0 as number,
				minuteValue: 0 as number
			}
		},
		props: {
			"hour": {
				type: Number,
				default: 0
			},
			"minute": {
				type: Number,
				default: 0
			}
		},
		watch: {
			"hour": {
				handler(newValue : Number, oldValue : Number) {
					const hour = newValue.toInt()
					if (hour < 23 && hour >= 0) {
						this.hourValue = hour
						this.picker?.setHour(this.hourValue)
					}
				},
				immediate: true
			},
			"minute": {
				handler(newValue : Number, oldValue : Number) {
					const minute = newValue.toInt()
					if (minute < 59 && minute >= 0) {
						this.minuteValue = minute
						this.picker?.setMinute(this.minuteValue)
					}

				},
				immediate: true
			},
		},
		methods: {
			onObjectInit(e : UniObjectInitEvent) {
				this.picker = new NativeTimePicker(e.detail.element, this.hourValue, this.minuteValue);
				this.$emit("load")
			},
			onTimeChanged(e : UniObjectCustomEvent) {
				this.$emit("changed", e)
			}
		},
		unmounted() {

		}
	}
</script>

<style>
	.def-picker {
		min-width: 300px;
		min-height: 380px;
    max-width: 400px;
    max-height: 400px;
	}
</style>
