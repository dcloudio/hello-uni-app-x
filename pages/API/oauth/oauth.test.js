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
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view');
  });

  it("OAuth-hw-login", async () => {
    await page.callMethod('setUserInfo', null)

    await page.callMethod('hwLogin')

    const userInfo = await page.waitFor(async () => {
      return await page.callMethod('getTestUserInfo')
    })

    expect(typeof userInfo.nickName).toBe('string')
    expect(typeof userInfo.avatarUrl).toBe('string')

    const image = await program.screenshot();
    expect(image).toSaveImageSnapshot();

    await page.callMethod('setUserInfo', null)
  })
});
