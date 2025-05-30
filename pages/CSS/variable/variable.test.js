const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIOS = platformInfo.startsWith('ios')
const isWeb = platformInfo.startsWith('web')
const isHarmony = platformInfo.startsWith('harmony')

const isApp = isAndroid || isIOS || isHarmony

describe('css-variable', () => {
  if (isAppWebView) {
    it('app 与 web 存在差异, webview 不进行截图', () => {
      expect(1).toBe(1)
      return
    })
  }

  it('css test', async () => {
    const page = await program.reLaunch('/pages/CSS/variable/variable');
    await page.waitFor('view');

    if (!isApp) {
      expect(1).toBe(1)
      return
    }

    const element = await page.$('.status-bar-height')
    const size1 = await element.size()
    console.log(size1.height);
    expect(size1.height > 0).toBe(true)

    const element2 = await page.$('.uni-fixed-bottom')
    const size2 = await element2.size()
    expect(size2.height > 0).toBe(true)

    const element3 = await page.$('.uni-safe-area-inset-bottom')
    const size3 = await element3.size()
    expect(size3.height > 0).toBe(true)
  })

  it('screenshot', async () => {
    const page = await program.reLaunch('/pages/CSS/variable/variable');
    await page.waitFor('view');

    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  });
});
