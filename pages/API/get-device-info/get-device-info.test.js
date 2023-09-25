const PAGE_PATH = '/pages/API/get-device-info/get-device-info'

describe('ExtApi-GetDeviceInfo', () => {

  let page;
  let res;
  const stringProperties = [
    'brand', 'deviceBrand', 'deviceId', 'model', 'deviceModel',
    'deviceType', 'devicePixelRatio', 'system', 'platform', 'uniRuntimeVersion',
  ]
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
    res = await uni.getDeviceInfo();
  });
  it('Check properties', async () => {
    for (const key in res) {
      const value = res[key];
      expect(value).not.toBeNull();
      if (stringProperties.indexOf(key) != -1) {
        expect(value).not.toBe("");
      }
      if (key == 'deviceOrientation') {
        expect(['portrait', 'landscape']).toContain(value);
      }
    }
  });
});
