const PAGE_PATH = '/pages/API/get-app-base-info/get-app-base-info'

describe('ExtApi-GetAppBaseInfo', () => {

  let page;
  let res;
  const stringProperties = [
    'appId', 'appName', 'appVersion', 'appVersionCode', 'appLanguage',
    'language', 'version', 'uniCompileVersion', 'uniPlatform', 'uniRuntimeVersion',
  ]
  const numberProperties = [
    'uniCompileVersionCode', 'uniRuntimeVersionCode'
  ]
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
    res = await uni.getAppBaseInfo();
  });
  it('Check properties', async () => {
    for (const key in res) {
      const value = res[key];
      expect(value).not.toBeNull();
      if (stringProperties.indexOf(key) != -1) {
        expect(value).not.toBe("");
      }
      if (numberProperties.indexOf(key) != -1) {
        expect(value).toBeGreaterThanOrEqual(3.90);
      }
    }
  });
});
