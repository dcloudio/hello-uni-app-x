const PAGE_PATH = '/pages/API/get-app/get-app'

describe('getApp', () => {
  it('getApp', async () => {
    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(1000)
    await page.callMethod('_getApp')
    const data = await page.data()
    expect(data.checked).toBe(true)
  })
})
