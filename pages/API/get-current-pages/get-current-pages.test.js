const HOME_PAGE_PATH = '/pages/tabBar/component'
const PAGE_PATH = '/pages/API/get-current-pages/get-current-pages'

describe('getCurrentPages', () => {
  let page
  it('getCurrentPages', async () => {
    // web 端等待应用首页加载完成
    if (process.env.uniTestPlatformInfo.startsWith('web')) {
      const waitTime = process.env.uniTestPlatformInfo.includes('safari')
        ? 5000
        : 1000
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, waitTime)
      })
    }
    page = await program.switchTab(HOME_PAGE_PATH)
    await page.waitFor(1000)
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(1000)
    await page.callMethod('_getCurrentPages')
    await page.waitFor(200)
    const data = await page.data()
    expect(data.checked).toBe(true)
  })
})
