const PAGE_PATH = '/pages/component/button/button'

describe('Button.uvue', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('click', async () => {
    // TODO 待测试框架支持text的dispatchEvent
    // const btn = await page.$('.btn')
    // expect((await page.data())['count']).toEqual(0)
    // await btn.tap()
    // expect((await page.data())['count']).toEqual(1)
    // await page.setData({
    //   disabled_boolean: true,
    // })
    // await btn.tap()
    // expect((await page.data())['count']).toEqual(1)
    // await page.setData({
    //   disabled_boolean: false,
    // })
    // await btn.tap()
    // expect((await page.data())['count']).toEqual(2)
  })
  it('length', async () => {
    const elements = await page.$$('.btn')
    expect(elements.length).toBe(1)
  })
  it('text', async () => {
    const textBtn = await page.$('.btn')
    expect(await textBtn.text()).toEqual('uni-app-x')
    await page.setData({
      text: 'uni-app-x button',
    })
    expect(await textBtn.text()).toEqual('uni-app-x button')
  })
  it('type', async () => {
    const btn = await page.$('.btn')
    expect(await btn.property('type')).toBe('default')
    await page.setData({
      type_enum_current: 1,
    })
    await page.waitFor(500)
    expect(await btn.property('type')).toBe('primary')
    await page.setData({
      type_enum_current: 2,
    })
    await page.waitFor(500)
    expect(await btn.property('type')).toBe('warn')
  })
  it('size', async () => {
    const btn = await page.$('.btn')
    expect(await btn.property('size')).toBe('default')
    await page.setData({
      size_enum_current: 1,
    })
    await page.waitFor(500)
    expect(await btn.property('size')).toBe('mini')
  })
  it('plain', async () => {
    const btn = await page.$('.btn')
    expect(await btn.property('plain')).toBe(false)
    await page.setData({
      plain_boolean: true,
    })
    await page.waitFor(500)
    expect(await btn.property('plain')).toBe(true)
  })
  it('disabled', async () => {
    const btn = await page.$('.btn')
    expect(await btn.property('disabled')).toBe(false)
    await page.setData({
      disabled_boolean: true,
    })
    await page.waitFor(500)
    expect(await btn.property('disabled')).toBe(true)
  })
})