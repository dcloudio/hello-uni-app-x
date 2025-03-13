function getData(key = '') {
  return new Promise(async (resolve, reject) => {
    const data = await page.data()
    resolve(key ? data[key] : data)
  })
}

let page
let originEventCallbackNum
beforeAll(async () => {
  page = await program.reLaunch('/pages/component/radio/radio')
  await page.waitFor(2000)
})

describe('Radio.uvue', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isMP = platformInfo.startsWith('mp')
  it('change', async () => {
    expect(await getData('value')).toEqual('')
    const radio1 = await page.$('.r1')
    await radio1.tap()
    await page.waitFor(100)
    expect(await getData('value')).toEqual('r1')
    const radio = await page.$('.r')
    await radio.tap()
    await page.waitFor(100)
    expect(await getData('value')).toEqual('r')
    const radio2 = await page.$('.r2')
    await radio2.tap()
    await page.waitFor(100)
    expect(await getData('value')).toEqual('r')
  })
  it('length', async () => {
    const radioGroupElements = await page.$$('.radio-group')
    expect(radioGroupElements.length).toBe(4)
    const radioElements = await page.$$('.radio')
    expect(radioElements.length).toBe(12)
  })
  it('text', async () => {
    const radio = await page.$('.r1')
    expect(await radio.text()).toEqual('未选中')
    await page.setData({
      text: 'not selected',
    })
    expect(await radio.text()).toEqual('not selected')
  })
  if(!isMP) {
    // TODO property('checked')应取到实际显示的值（微信小程序）还是绑定的值（web、app）
    it('checked', async () => {
      const radio = await page.$('.r')
      // TODO
      const newValue1 = await radio.property('checked')
      expect(newValue1.toString()).toBe(true + '')
      await page.setData({
        checked: false,
      })
      const newValue2 = await radio.property('checked')
      expect(newValue2.toString()).toBe(false + '')
    })
  }
  it('color', async () => {
    const radio = await page.$('.r')
    expect(await radio.attribute('color')).toBe('#007aff')
    await page.setData({
      color: '#63acfc',
    })
    expect(await radio.attribute('color')).toBe('#63acfc')
  })
  if(isMP) {
    it('disabled', async () => {
      const radio = await page.$('.r2')
      expect(await radio.property('disabled')).toBe(true)
      await page.setData({
        disabled: false,
      })
      expect(await radio.property('disabled')).toBe(false)
    })
  } else {
    it('disabled', async () => {
      const radio = await page.$('.r2')
      expect(await radio.attribute('disabled')).toBe(true + '')
      await page.setData({
        disabled: false,
      })
      expect(await radio.attribute('disabled')).toBe(false + '')
    })
  }
  if(!isMP) {
    it('trigger UniRadioGroupChangeEvent', async () => {
      const { current } = await page.data()

      const nextCurrent = current == 0 ? 1 : 0

      const elements = await page.$$('.recommand')
      await elements[nextCurrent].tap()
      await page.waitFor(500)
      const { eventTest } = await page.data()
      expect(eventTest).toEqual(true)
    })
  }
})
