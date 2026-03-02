// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIOS = platformInfo.startsWith('ios')
const isWeb = platformInfo.startsWith('web')
const isHarmony = platformInfo.startsWith('harmony')

const isApp = isAndroid || isIOS || isHarmony

describe('/pages/CSS/variable/issue26648.uvue', () => {
  if (isAppWebView) {
    it('app 与 web 存在差异, webview 不进行截图', () => {
      expect(1).toBe(1)
    })
    return
  }

  it('screenshot', async () => {
    const page = await program.reLaunch('/pages/CSS/variable/issue26648');
    await page.waitFor('view');

    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  });
});
