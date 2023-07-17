const PAGE_PATH = '/pages/API/get-current-pages/get-current-pages'

describe('getCurrentPages', () => {
  it('getCurrentPages', async () => {
    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(1000)
    await page.callMethod('getCurrentPages')
    const data = await page.data()
    expect(data.checked).toBe(true)
  })
})
