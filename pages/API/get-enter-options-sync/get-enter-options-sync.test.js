const PAGE_PATH = '/pages/API/get-enter-options-sync/get-enter-options-sync'

describe('getEnterOptionsSync', () => {
  it('getEnterOptionsSync', async () => {
    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
    await page.callMethod('getEnterOptionsSync')
    const data = await page.data()
    expect(data.checked).toBe(true)
  })
 
  it('app onShow 和 getEnterOptionsSync 结果一致', async () => {
    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
    const res = await page.callMethod('compareOnShowRes')

    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('android')) {
      // if android return
      expect(true).toBe(true)
    }
    expect(res.appOnShow).toEqual(res.onShowOption)
  })
})
