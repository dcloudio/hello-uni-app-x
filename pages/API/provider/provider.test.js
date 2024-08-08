const PAGE_PATH =
  "/pages/API/provider/provider";

describe("provider", () => {
  if (process.env.uniTestPlatformInfo.indexOf('web') > -1 || process.env.UNI_AUTOMATOR_APP_WEBVIEW === 'true') {
    it('web', () => {
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

    expect(providerIds[0]).toEqual('wxpay')
    expect(providerIds[1]).toEqual('alipay')
    expect(providerIds[2]).toEqual('system')
    expect(providerIds[3]).toEqual('tencent')
  });
});
