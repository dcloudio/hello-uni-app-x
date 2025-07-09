const PAGE_PATH = "/pages/API/location-change/location-change";
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isAndroid || isIos
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')

describe("location-change", () => {
  if (isMP || isWeb) {
    // 微信、web harmony 上会有权限弹框，暂时屏蔽测试
    it('not support', async () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600)
  });

  it("system+type=wgs84+success", async () => {

    await page.setData({
      currentSelectedProvider: 0,
      currentSelectedType: 0,
      startSuccess: false,
      logAble: false
    })

    const stopLocationUpdateBtn = await page.$('#stopLocationUpdate')
    await stopLocationUpdateBtn.tap()

    const startLocationUpdateBtn = await page.$('#startLocationUpdate')
    await startLocationUpdateBtn.tap()

    let data = await page.data()
    let startSuccess = data['startSuccess']
    expect(startSuccess).toEqual(true);

    await page.setData({
      startSuccess: false
    })

    const startLocationUpdateBackgroundBtn = await page.$('#startLocationUpdateBackground')
    await startLocationUpdateBackgroundBtn.tap()

    data = await page.data()
    startSuccess = data['startSuccess']
    expect(startSuccess).toEqual(true);
  });

  it("system+type=gcj02+fail", async () => {

    await page.setData({
      currentSelectedProvider: 0,
      currentSelectedType: 1,
      startSuccess: false,
      errCode: 0,
      logAble: false
    })

    const stopLocationUpdateBtn = await page.$('#stopLocationUpdate')
    await stopLocationUpdateBtn.tap()

    const startLocationUpdateBtn = await page.$('#startLocationUpdate')
    await startLocationUpdateBtn.tap()

    let data = await page.data()
    let startSuccess = data['startSuccess']
    let errCode = data['errCode']
    expect(startSuccess).toEqual(false);
    expect(errCode).toEqual(1505601);

    await page.setData({
      currentSelectedProvider: 0,
      currentSelectedType: 1,
      startSuccess: false,
      errCode: 0
    })

    const startLocationUpdateBackgroundBtn = await page.$('#startLocationUpdateBackground')
    await startLocationUpdateBackgroundBtn.tap()
    data = await page.data()
    startSuccess = data['startSuccess']
    errCode = data['errCode']
    expect(startSuccess).toEqual(false);
    expect(errCode).toEqual(1505601);
  });

  it("tencent+type=wgs84+fail", async () => {
    await page.setData({
      logAble: false,
      currentSelectedProvider: 1,
      currentSelectedType: 0,
      startSuccess: false,
      errCode: 0
    })

    await page.setData({
      currentSelectedType: 0
    })

    const stopLocationUpdateBtn = await page.$('#stopLocationUpdate')
    await stopLocationUpdateBtn.tap()

    const startLocationUpdateBtn = await page.$('#startLocationUpdate')
    await startLocationUpdateBtn.tap()

    let data = await page.data()
    let startSuccess = data['startSuccess']
    let errCode = data['errCode']
    expect(startSuccess).toEqual(false);
    expect(errCode).toEqual(1505607);

    await page.setData({
      currentSelectedProvider: 1,
      currentSelectedType: 0,
      startSuccess: false,
      errCode: 0
    })

    const startLocationUpdateBackgroundBtn = await page.$('#startLocationUpdateBackground')
    await startLocationUpdateBackgroundBtn.tap()
    data = await page.data()
    startSuccess = data['startSuccess']
    errCode = data['errCode']
    expect(startSuccess).toEqual(false);
    expect(errCode).toEqual(1505607);
  });

  it("tencent+type=gcj02+success", async () => {
    await page.setData({
      currentSelectedProvider: 1,
      currentSelectedType: 1,
      startSuccess: false,
      errCode: 0,
      logAble: false
    })

    const stopLocationUpdateBtn = await page.$('#stopLocationUpdate')
    await stopLocationUpdateBtn.tap()

    const startLocationUpdateBtn = await page.$('#startLocationUpdate')
    await startLocationUpdateBtn.tap()

    let data = await page.data()
    let startSuccess = data['startSuccess']
    expect(startSuccess).toEqual(true);

    await page.setData({
      currentSelectedProvider: 1,
      currentSelectedType: 1,
      startSuccess: false,
      errCode: 0
    })

    const startLocationUpdateBackgroundBtn = await page.$('#startLocationUpdateBackground')
    await startLocationUpdateBackgroundBtn.tap()
    data = await page.data()
    startSuccess = data['startSuccess']
    expect(startSuccess).toEqual(true);
  });

  it("tencent+system+fail", async () => {
    await page.setData({
      currentSelectedProvider: 1,
      currentSelectedType: 1,
      startSuccess: false,
      errCode: 0,
      logAble: false
    })

    const stopLocationUpdateBtn = await page.$('#stopLocationUpdate')
    await stopLocationUpdateBtn.tap()

    const startLocationUpdateBtn = await page.$('#startLocationUpdate')
    await startLocationUpdateBtn.tap()

    let data = await page.data()
    let startSuccess = data['startSuccess']
    expect(startSuccess).toEqual(true);

    await page.setData({
      currentSelectedProvider: 0,
      currentSelectedType: 0,
      startSuccess: false,
      errCode: 0
    })

    await startLocationUpdateBtn.tap()

    data = await page.data()
    startSuccess = data['startSuccess']
    let errCode = data['errCode']
    expect(startSuccess).toEqual(false);
    expect(errCode).toEqual(1505608);

    await stopLocationUpdateBtn.tap()

    await page.setData({
      currentSelectedProvider: 0,
      currentSelectedType: 0,
      startSuccess: false,
      errCode: 0
    })

    await startLocationUpdateBtn.tap()

    data = await page.data()
    startSuccess = data['startSuccess']
    expect(startSuccess).toEqual(true);

    await page.setData({
      currentSelectedProvider: 1,
      currentSelectedType: 1,
      startSuccess: false,
      errCode: 0
    })

    await startLocationUpdateBtn.tap()
    data = await page.data()
    startSuccess = data['startSuccess']
    errCode = data['errCode']
    expect(startSuccess).toEqual(false);
    expect(errCode).toEqual(1505608);
  });

});
