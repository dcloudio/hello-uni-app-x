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
})
