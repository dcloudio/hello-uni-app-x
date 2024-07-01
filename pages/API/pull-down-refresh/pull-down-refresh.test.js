const PAGE_PATH = "/pages/API/pull-down-refresh/pull-down-refresh"

describe("payment", () => {
  if (process.env.uniTestPlatformInfo.indexOf('web') > -1 || process.env.UNI_AUTOMATOR_APP_WEBVIEW === 'true') {
    it('web || app-webview', () => {
      expect(1).toBe(1)
    })
    return
  }

  it("trigger pulldown refresh by swipe", async () => {
    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
    await page.waitFor(4000)
    await page.setData({
      pulldownRefreshTriggered: false
    })

    await program.swipe({
      startPoint: {
        x: 100,
        y: 400
      },
      endPoint: {
        x: 100,
        y: 800
      },
      duration: 1000
    })
    await page.waitFor(1500)
    expect(await page.data('pulldownRefreshTriggered')).toBe(true)
  });
});
