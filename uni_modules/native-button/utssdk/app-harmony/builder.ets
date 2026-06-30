@Builder
export function buildButton(params: ESObject) {
  Button(params.text, { type: ButtonType.Normal, stateEffect: true })
    .borderRadius(8)
    .backgroundColor(params.bgColor)
    .onClick(() => {
        params.onClick()
    })
    .attributeModifier(params.attributeUpdater)
}
