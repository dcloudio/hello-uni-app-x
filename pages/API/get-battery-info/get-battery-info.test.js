const PAGE_PATH = '/pages/API/get-battery-info/get-battery-info'

describe('ExtApi-GetBatteryInfo', () => {

  let page;
  let res;
 
  const numberProperties = [
    'level'
  ]
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
    res = await uni.getBatteryInfo();
  });

  it('Check properties', async () => {
    for (const key in res) {
      const value = res[key];
      expect(value).not.toBeNull();
      if (numberProperties.indexOf(key) != -1) {
        expect(value).toBeGreaterThanOrEqual(0.1);
      }
    }
  });
});
