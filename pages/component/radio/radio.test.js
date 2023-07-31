function getData(key = '') {
  return new Promise(async (resolve, reject) => {
    const data = await page.data()
    resolve(key ? data[key] : data)
  })
}

let page
beforeAll(async () => {
  page = await program.reLaunch('/pages/component/radio/radio')
  await page.waitFor(1000)
})

describe('Radio.uvue', () => {
  it('change', async () => {
    const radio = await page.$('.r')
    const radio1 = await page.$('.r1')
    const radio2 = await page.$('.r2')
    expect(await getData('value')).toEqual('')
    await radio1.tap()
    expect(await getData('value')).toEqual('r1')
    await radio.tap()
    expect(await getData('value')).toEqual('r')
    await radio2.tap()
    expect(await getData('value')).toEqual('r')
  })
  it('length', async () => {
    const radioGroupElements = await page.$$('.radio-group')
    expect(radioGroupElements.length).toBe(3)
    const radioElements = await page.$$('.radio')
    expect(radioElements.length).toBe(11)
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
    expect(await radio.property('checked')).toBe(true)
    await page.setData({
      checked: false,
    })
    await page.waitFor(500)
    expect(await radio.property('checked')).toBe(false)
  })
  it('color', async () => {
    const radio = await page.$('.r')
    expect(await radio.property('color')).toBe('#007aff')
    await page.setData({
      color: '#63acfc',
    })
    await page.waitFor(500)
    expect(await radio.property('color')).toBe('#63acfc')
  })
  it('disabled', async () => {
    const radio = await page.$('.r2')
    expect(await radio.property('disabled')).toBe(true)
    await page.setData({
      disabled: false,
    })
    await page.waitFor(500)
    expect(await radio.property('disabled')).toBe(false)
  })
})
