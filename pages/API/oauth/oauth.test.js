const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isHarmony = platformInfo.startsWith('harmony')
const isIos = platformInfo.startsWith('ios')
const isAndroid = platformInfo.startsWith('android')
const isApp = isIos || isAndroid || isHarmony
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

const PAGE_PATH = '/pages/API/oauth/oauth'

describe('API-OAuth', () => {
  if (!isHarmony) {
    // 微信小程序截图无法截到弹框
    it('not support', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page;
  let systemInfo;
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    systemInfo = await program.callUniMethod('getSystemInfoSync')
    await page.waitFor('view');
  });

  it("OAuth-hw-login", async () => {
    await page.callMethod('setUserInfo', null)

    await page.callMethod('hwLogin')
    // TODO 请求后华为弹出认证窗时间不定，暂定为 10s
    await page.waitFor(10000)

    // 点击弹窗确认按钮
    if (systemInfo && systemInfo.devicePixelRatio) {
      await program.tap({
        x: 975 / systemInfo.devicePixelRatio,
        y: 2500 / systemInfo.devicePixelRatio
      })
    }

    await page.waitFor(2000)
    const userInfo = await page.waitFor(async () => {
      const info = await page.callMethod('getTestUserInfo')
      return info ? info : {}
    })

    expect(typeof userInfo.nickName).toBe('string')
    expect(typeof userInfo.avatarUrl).toBe('string')

    const image = await program.screenshot();
    expect(image).toSaveImageSnapshot();

    await page.callMethod('setUserInfo', null)
  })
});
