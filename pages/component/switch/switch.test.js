const PAGE_PATH = '/pages/component/switch/switch'

describe('switch', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('checked', async () => {
    const switch_element = await page.$('.switch-checked')

    await page.setData({
      checked: false,
    })
    await page.waitFor(100)
    // TODO
    const newValue1 = await switch_element.property('checked')
    expect(newValue1.toString()).toBe(false + '')

    await page.setData({
      checked: true,
    })
    await page.waitFor(100)
    // TODO
    const newValue2 = await switch_element.property('checked')
    expect(newValue2.toString()).toBe(true + '')
  })
  it('color', async () => {
    const switch_element = await page.$('.switch-color')
    expect(await switch_element.attribute('color')).toBe('#FFCC33')

    const color = '#00ff00'

    await page.setData({
      color: color
    })
    await page.waitFor(100)
    expect(await switch_element.attribute('color')).toBe(color)
  })
  it('click', async () => {
    // TODO 暂时通过获取组件内部的 class 触发模拟点击
    const switchElement = await page.$('.uni-switch-input')
    await switchElement.tap()
    await page.waitFor(200)

    const {
      testVerifyEvent
    } = await page.data()

    expect(testVerifyEvent).toBe(true)
  })
})
