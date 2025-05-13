const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isIos = platformInfo.startsWith('ios')
const isAndroid = platformInfo.startsWith('android')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isIos || isAndroid || isHarmony
const isWebView = !!process.env.UNI_AUTOMATOR_APP_WEBVIEW


describe('long-waterflow-nested', () => {
  if (isWebView || !isApp) {
    it('dummyTest', async () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch('/pages/template/long-list-nested/long-list-nested.uvue')
    await page.waitFor('view')
    await page.waitFor(2000)
  })

  it('screenshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    });
    expect(image).toSaveImageSnapshot();
  })
})
