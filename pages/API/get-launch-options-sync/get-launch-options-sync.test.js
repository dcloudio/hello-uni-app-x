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

    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('android')) {
      // if android return
      expect(1).toBe(1)
    }

    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
    const res = await page.callMethod('compareOnLaunchRes')
    expect(res.appOnLaunch).toEqual(res.launchOptions)
  })
  it('app onShow 和 getEnterOptionsSync 结果一致', async () => {
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('android')) {
      // if android return
      expect(1).toBe(1)
    }

    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
    const res = await page.callMethod('compareOnShowRes')
    expect(res.appOnShow).toEqual(res.onShowOption)
  })
})
