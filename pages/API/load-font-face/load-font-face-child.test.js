const PAGE_PATH = '/pages/API/load-font-face/load-font-face-child'

describe('loadFontFace global', () => {
  beforeAll(async () => {
    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
  })
  it('screenshot', async () => {
    const image = await program.screenshot()
    expect(image).toMatchImageSnapshot()
  })
})
