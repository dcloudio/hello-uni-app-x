const PAGE_PATH = '/pages/API/get-launch-options-sync/get-launch-options-sync'

describe('getLaunchOptionsSync', () => {
  it('getLaunchOptionsSync', async () => {
    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
    await page.callMethod('getLaunchOptionsSync')
    const data = await page.data()
    expect(data.checked).toBe(true)
  })
  it('app onLaunch 和 getLaunchOptionsSync 结果一致', async () => {
    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
    const pageData = await page.data()
    expect(pageData.testResult).toBe(true)
  })
})
