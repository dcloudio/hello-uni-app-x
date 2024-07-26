<template>

	<object @init="onObjectInit" @customClick="onclick"></object>

</template>

<script lang="uts">

  import { NativeButton } from "@/uni_modules/uni-native-button";


	export default {

		data() {
			return {
				button: null as NativeButton | null,
				value : ""
			}
		},
		props: {
			"text": {
				type: String,
				default: ''
			}
		},
		watch: {
			"text": {
				handler(newValue : string, oldValue : string) {
					this.value = newValue
					this.button?.updateText(this.value)
				},
				immediate: true
			},
		},
		methods: {
			onObjectInit(e : UniObjectInitEvent) {
				this.button = new NativeButton(e.detail.element);
				this.button?.updateText(this.value)
				this.$emit("load")
			},
			onclick(e: UniObjectCustomEvent) {
				this.$emit("buttonTap", e)
			}
		},
		unmounted() {
      // #ifdef APP-IOS
      // iOS平台需要主动释放 uts 实例
      this.button.destroy()
      // #endif
		}
	}
</script>

<style>

</style>
