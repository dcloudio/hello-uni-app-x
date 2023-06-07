






	/**
	 * @description u-link是一个外部网页超链接组件，在小程序内打开内部web-view组件或复制url，在app内打开外部浏览器，在h5端打开新网页
	 * @property {String} href 点击后打开的外部网页url，小程序中必须以https://开头
	 * @property {String} text 显示的文字
	 * @property {Boolean} inWhiteList 是否在小程序白名单中，如果在的话，在小程序端会直接打开内置web-view，否则会只会复制url，提示在外部打开
	 * @example * <u-link href="https://ext.dcloud.net.cn" text="https://ext.dcloud.net.cn" :inWhiteList="true"></u-link>
	 */
	export default {
		name: 'u-link',
		props: {
			href: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			},
			inWhiteList: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			openURL() {
				//
				// plus.runtime.openURL(this.href) //这里默认使用外部浏览器打开而不是内部web-view组件打开
				//
				//


				//














			}
		}
	}


const GenComponentsULinkULinkStyles = [new Map<string, Map<string, Map<string, any>>>([["text", new Map<string, any>([["", new Map<string, any>([["color", "#7A7E83"], ["fontSize", 14], ["lineHeight", 20]])]])]])]
@Suppress("UNUSED_PARAMETER") function GenComponentsULinkULinkRender(_ctx: GenComponentsULinkULink): VNode | null {
  return createElementVNode("view", new Map<string, any | null>([["class", "uni-row"]]), [
    createElementVNode("text", new Map<string, any | null>([
      ["class", "text"],
      ["href", _ctx.href],
      ["onClick", _ctx.openURL],
      ["inWhiteList", _ctx.inWhiteList]
    ]), toDisplayString(_ctx.text), 9 /* TEXT, PROPS */, ["href", "onClick", "inWhiteList"])
  ])
}