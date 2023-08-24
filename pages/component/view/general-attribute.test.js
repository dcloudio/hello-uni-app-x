const PAGE_PATH = '/pages/component/view/general-attribute'

describe('general attribute', () => {
  let page

  beforeAll(async () => {
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(1000)
  })
  it('screenshot', async () => {
    const image = await program.screenshot()
    expect(image).toMatchImageSnapshot()
  })
  it('validateGeneralAttributes', async () => {
    const button = await page.$('.btn')
    await button.tap()
    expect(await button.text()).toBe('基础属性验证成功')
  })
})
