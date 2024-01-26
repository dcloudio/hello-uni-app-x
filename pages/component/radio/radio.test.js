function getData(key = '') {
  return new Promise(async (resolve, reject) => {
    const data = await page.data()
    resolve(key ? data[key] : data)
  })
}

let page
beforeAll(async () => {
  page = await program.reLaunch('/pages/component/radio/radio')
  await page.waitFor(2000);
})

describe('Radio.uvue', () => {
  it('change', async () => {
    expect(await getData('value')).toEqual('')
    const radio1 = await page.$('.r1')
    await radio1.tap()
    expect(await getData('value')).toEqual('r1')
    const radio = await page.$('.r')
    await radio.tap()
    expect(await getData('value')).toEqual('r')
    const radio2 = await page.$('.r2')
    await radio2.tap()
    expect(await getData('value')).toEqual('r')
  })
  it('length', async () => {
    const radioGroupElements = await page.$$('.radio-group')
    expect(radioGroupElements.length).toBe(3)
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
  it('color', async () => {
    const radio = await page.$('.r')
    expect(await radio.attribute('color')).toBe('#007aff')
    await page.setData({
      color: '#63acfc',
    })
    expect(await radio.attribute('color')).toBe('#63acfc')
  })
  it('disabled', async () => {
    const radio = await page.$('.r2')
    expect(await radio.attribute('disabled')).toBe(true + '')
    await page.setData({
      disabled: false,
    })
    expect(await radio.attribute('disabled')).toBe(false + '')
  })
})
