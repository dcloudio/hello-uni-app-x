const PAGE_PATH = '/pages/component/text/text-props'

describe('text-props', () => {
  beforeAll(async () => {
    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(1000)
  })
  it('screenshot', async () => {
    const image = await program.screenshot({ fullPage: true })
    expect(image).toMatchImageSnapshot()
  })
})
