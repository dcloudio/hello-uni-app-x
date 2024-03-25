const PAGE_PATH = '/pages/component/switch/switch'

describe('switch', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  // TODO
  // it('click', async () => {
  //   const switch_element = await page.$('.switch-checked')
  //   const switch_element_value = await page.$('.switch-checked-value')
  //   expect(await switch_element_value.text()).toBe('true')

  //   await page.waitFor(200)

  //   await switch_element.tap()
  //   await page.waitFor(200)
  //   expect(await switch_element_value.text()).toBe('false')

  //   await switch_element.tap()
  //   await page.waitFor(200)
  //   expect(await switch_element_value.text()).toBe('true')
  // })
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
})
