function getData(key = '') {
  return new Promise(async (resolve, reject) => {
    const data = await page.data()
    resolve(key ? data[key] : data)
  })
}

let page
beforeAll(async () => {
  page = await program.reLaunch('/pages/component/checkbox/checkbox')
  await page.waitFor(2000);
})

describe('Checkbox.uvue', () => {
  it('change', async () => {
    expect(await getData('value')).toEqual([])
    const cb1 = await page.$('.cb1')
    await cb1.tap()
    expect(await getData('value')).toEqual(['cb', 'cb1'])
    const cb = await page.$('.cb')
    await cb.tap()
    expect(await getData('value')).toEqual(['cb1'])
    const cb2 = await page.$('.cb2')
    await cb2.tap()
    expect(await getData('value')).toEqual(['cb1'])
    await cb1.tap()
    expect(await getData('value')).toEqual([])
  })
  it('length', async () => {
    const checkboxGroupElements = await page.$$('.checkbox-group')
    expect(checkboxGroupElements.length).toBe(3)
    const checkboxElements = await page.$$('.checkbox')
    expect(checkboxElements.length).toBe(12)
  })
  it('text', async () => {
    const cb = await page.$('.cb1')
    expect(await cb.text()).toEqual('未选中')
    await page.setData({
      text: 'not selected',
    })
    expect(await cb.text()).toEqual('not selected')
  })
  it('checked', async () => {
    const cb = await page.$('.cb')
    // TODO
    const newValue1 = await cb.property('checked')
    expect(newValue1.toString()).toBe(true + '')
    await page.setData({
      checked: false,
    })
    // TODO
    const newValue2 = await cb.property('checked')
    expect(newValue2.toString()).toBe(false + '')
  })
  it('color', async () => {
    const cb = await page.$('.cb')
    expect(await cb.attribute('color')).toBe('#007aff')
    await page.setData({
      color: '#63acfc',
    })
    expect(await cb.attribute('color')).toBe('#63acfc')
  })
  it('disabled', async () => {
    const cb = await page.$('.cb2')
    expect(await cb.attribute('disabled')).toBe(true + '')
    await page.setData({
      disabled: false,
    })
    expect(await cb.attribute('disabled')).toBe(false + '')
  })
})
