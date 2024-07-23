<template>

	<object @init="onObjectInit" @click="onclick"></object>

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
				this.$emit("tap", e)
			}
		},
		unmounted() {

		}
	}
</script>

<style>

</style>
