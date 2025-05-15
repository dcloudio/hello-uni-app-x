const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isWeb = platformInfo.startsWith('web')
const isHarmony = platformInfo.startsWith('harmony')
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

const PAGE_PATH = "/pages/API/provider/provider";

describe("provider", () => {
  if (isMP || isWeb || isAppWebView) {
  	it('not support', () => {
  		expect(1).toBe(1)
  	})
  	return
  }


  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600)
  });
  it("test getprovider", async () => {
    await page.callMethod('getProvider');
    await page.waitFor(1000);
    let providerIds = await page.data('providerIds')

    expect(providerIds).toEqual(expect.arrayContaining(['wxpay', 'alipay', 'system']))
    if (!isHarmony) {
      expect(providerIds).toEqual(expect.arrayContaining(['tencent']))
    } else {
      expect(providerIds).toEqual(expect.arrayContaining(['huawei']))
    }
    expect(providerIds).toHaveLength(4)

    let providerObjects = await page.data('providerObjects')

    expect(providerObjects).toEqual(expect.arrayContaining(['微信支付', '支付宝', '系统定位']))
    if (!isHarmony) {
      expect(providerObjects).toEqual(expect.arrayContaining(['腾讯定位']))
    } else {
      expect(providerObjects).toEqual(expect.arrayContaining(['华为登录']))
    }

    expect(providerObjects).toHaveLength(4)
  });
});
