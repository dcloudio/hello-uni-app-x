let page;
describe('open-type', () => {
  if (!isAndroid()) {
    // TODO: web 端暂不支持测试
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/open-type/open-type')
    await page.waitFor(600);
  });
  it('opentype-test', async () => {
    if (!isAndroid()) {
      return
    }
    const opentype = await page.$('#opentype')
    await opentype.tap()
    let isAgreeRes = await getData('isAgreeRes')
    expect(isAgreeRes).toBe(true)
  })

  function isAndroid() {
    if (process.env.uniTestPlatformInfo.indexOf('web') > -1 || process.env.UNI_AUTOMATOR_APP_WEBVIEW ===
      'true') {
      expect(1).toBe(1)
      return false
    }
    if (process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('ios')) {
      expect(1).toBe(1)
      return false
    }
    return true
  }

  function getData(key = '') {
    return new Promise(async (resolve, reject) => {
      const data = await page.data()
      resolve(key ? data[key] : data)
    })
  }
});
