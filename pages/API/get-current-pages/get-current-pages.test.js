const HOME_PAGE_PATH = '/pages/tabBar/component'
const PAGE_PATH = '/pages/API/get-current-pages/get-current-pages'

describe('getCurrentPages', () => {
  let page
  it('getCurrentPages', async () => {
    page = await program.switchTab(HOME_PAGE_PATH)
    await page.waitFor(1000)
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(1000)
    await page.callMethod('_getCurrentPages')
    await page.waitFor(200)
    const data = await page.data()
    expect(data.checked).toBe(true)
  })
  it('hideAndShow', async () => {
    await page.callMethod('hideAndShow')
    await page.waitFor(1000)
    const data = await page.data()
    expect(data.showTimes).toBe(2)
  })
})
