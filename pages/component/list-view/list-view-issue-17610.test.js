const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isDom2 = process.env.UNI_APP_X_DOM2 === "true"
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

describe('list-view-issue-17610', () => {
  if (isDom2 || isMP || isAppWebView) {
    it('not support or not need', async () => {
      expect(1).toBe(1)
    })
    return
  }

  it('check change swiper change', async () => {
    const page = await program.reLaunch('/pages/component/list-view/list-view-issue-17610')
    await page.waitFor('view')

    const id3tab = await page.$('#id-3-tab')
    await id3tab.tap()
    await page.waitFor(1000)
    const image3 = await program.screenshot();
    expect(image3).toSaveImageSnapshot();

    const id5tab = await page.$('#id-5-tab')
    await id5tab.tap()
    await page.waitFor(1000)
    const image5 = await program.screenshot();
    expect(image5).toSaveImageSnapshot();
  })
})
