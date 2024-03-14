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
      await page.callMethod("setTextEmpty")
      await page.waitFor(100)
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

  it('text nested', async () => {
      await page.setData({
        autoTest: true
      })
      await page.callMethod("setTextNested")
      await page.waitFor(100)
      const element = await page.$('#text-nested')
      if (element != null) {
        expect(await element.text()).toBe("修改三级节点")
      }
      await page.setData({
        autoTest: false
      })
  })
})
