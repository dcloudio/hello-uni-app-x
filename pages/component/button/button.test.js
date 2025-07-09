const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')

const PAGE_PATH = '/pages/component/button/button'

describe('Button.uvue', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
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
    expect(await btn.property('type')).toBe('primary')
    await page.setData({
      type_enum_current: 2,
    })
    expect(await btn.property('type')).toBe('warn')
  })
  it('size', async () => {
    const btn = await page.$('.btn')
    expect(await btn.property('size')).toBe('default')
    await page.setData({
      size_enum_current: 1,
    })
    expect(await btn.property('size')).toBe('mini')
  })
  it('plain', async () => {
    const btn = await page.$('.btn')
    // TODO
    const newValue1 = await btn.property('plain')
    expect(newValue1.toString()).toBe(false + '')
    await page.setData({
      plain_boolean: true,
    })
    const newValue2 = await btn.property('plain')
    expect(newValue2.toString()).toBe(true + '')
  })
  it('disabled', async () => {
    const btn = await page.$('.btn')
    // TODO
    const newValue1 = await btn.property('disabled')
    expect(newValue1.toString()).toBe(false + '')
    await page.setData({
      disabled_boolean: true,
    })
    const newValue2 = await btn.property('disabled')
    expect(newValue2.toString()).toBe(true + '')
  })

  it("checkUniButtonElement", async () => {
    if (isMP) {
      expect(1).toBe(1)
      return
    }
    const value = await page.callMethod('checkUniButtonElement')
    expect(value).toBe(true)
  })
  it("setbuttonEmpty", async () => {
    const textBtn = await page.$('.btn')
    await page.setData({
      text: '',
    })
    expect(await textBtn.text()).toEqual('')
  })
})
