const PAGE_PATH = '/pages/component/text/text-props'

describe('text-props', () => {
  let page
  beforeAll(async () => {
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(1000)
  })

  it('screenshot', async () => {
    const image = await program.screenshot({ fullPage: true })
    expect(image).toMatchImageSnapshot()
  })

  it('empty text', async () => {
      const element = await page.$('#empty-text')
      if (element != null) {
        const { width, height } = await element.size()
        expect(width).toBe(0)
        expect(height).toBe(0)
      }
  })

  if (process.env.uniTestPlatformInfo.indexOf('web') > -1) {
    return
  }

  it('text nested', async () => {
      page.callMethod("setTextNested")
      const element = await page.$('#text-nested')
      if (element != null) {
        expect(await element.text()).toBe("二级节点文字红色且背景色黄色")
      }
  })
})
