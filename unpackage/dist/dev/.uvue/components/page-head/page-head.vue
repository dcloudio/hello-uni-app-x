







    export default {
        name: "page-head",
        props: {
            title: {
                type: String,
                default: ""
            }
        }
    }


const GenComponentsPageHeadPageHeadStyles = [new Map<string, Map<string, Map<string, any>>>([["common-page-head", new Map<string, any>([["", new Map<string, any>([["paddingTop", "35rpx"], ["paddingRight", "35rpx"], ["paddingBottom", "35rpx"], ["paddingLeft", "35rpx"], ["flexDirection", "row"], ["justifyContent", "center"]])]])], ["common-page-head-title-box", new Map<string, any>([["", new Map<string, any>([["paddingTop", 0], ["paddingRight", "40rpx"], ["paddingBottom", 0], ["paddingLeft", "40rpx"], ["height", "88rpx"], ["borderBottomWidth", "2rpx"], ["borderBottomStyle", "solid"], ["borderBottomColor", "#D8D8D8"]])]])], ["common-page-head-title", new Map<string, any>([["", new Map<string, any>([["lineHeight", "88rpx"], ["fontSize", "30rpx"], ["color", "#BEBEBE"]])]])]])]
@Suppress("UNUSED_PARAMETER") function GenComponentsPageHeadPageHeadRender(_ctx: GenComponentsPageHeadPageHead): VNode | null {
  return createElementVNode("view", new Map<string, any | null>([["class", "common-page-head"]]), [
    createElementVNode("view", new Map<string, any | null>([["class", "common-page-head-title-box"]]), [
      createElementVNode("text", new Map<string, any | null>([["class", "common-page-head-title"]]), toDisplayString(_ctx.title), 1 /* TEXT */)
    ])
  ])
}