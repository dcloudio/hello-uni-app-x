const PAGE_PATH = '/pages/API/get-app-authorize-setting/get-app-authorize-setting'

describe('ExtApi-GetAppAuthorizeSetting', () => {
  if (process.env.uniTestPlatformInfo.indexOf('web') > -1) {
    it('dummyTest', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page;
  let res;
  let commonSupportList = [
    'authorized', 'denied', 'not determined', 'config error'
  ]
  let locationAccuracySupportList = [
    'reduced', 'full', 'unsupported'
  ]
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
    res = await uni.getAppAuthorizeSetting();
  });
  it('Check cameraAuthorized', async () => {
    expect(commonSupportList).toContain(res.cameraAuthorized)
  });

  it('Check locationAuthorized', async () => {
    expect(commonSupportList).toContain(res.locationAuthorized)
  });
  it('Check locationAccuracy', async () => {
    expect(locationAccuracySupportList).toContain(res.locationAccuracy)
  });
  it('Check microphoneAuthorized', async () => {
    expect(commonSupportList).toContain(res.microphoneAuthorized)
  });
  it('Check notificationAuthorized', async () => {
    expect(commonSupportList).toContain(res.notificationAuthorized)
  });
});
