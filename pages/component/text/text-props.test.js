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
      await page.setData({
        autoTest: true
      })
      const element = await page.$('#empty-text')
      if (element != null) {
        const { width, height } = await element.size()
        expect(width).toBe(0)
        expect(height).toBe(0)
      }
      page.callMethod("setTextEmpty")
      const element2 = await page.$('#empty-text2')
      if (element2 != null) {
        const { width, height } = await element2.size()
        expect(width).toBe(0)
        expect(height).toBe(0)
      }
      await page.setData({
        autoTest: false
      })
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
