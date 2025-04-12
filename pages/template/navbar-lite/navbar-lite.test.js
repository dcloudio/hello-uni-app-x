const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isAndroid || isIos || isHarmony

const CURRENT_PAGE_PATH = "/pages/template/navbar-lite/navbar-lite";

describe("setCustomNavigationBarColor", () => {
  let page;
  let originLifeCycleNum;
  const isAndroid = process.env.UNI_OS_NAME === "android";
  const screenShotArea = {
    x: 342,
    y:18,
    width: 40,
    height: 20
  };
  if (isIos) {
    screenShotArea.x = 310
    screenShotArea.y = 20
    screenShotArea.width = 40
    screenShotArea.height = 20
  } else if (platformInfo.startsWith('android 6')) {
    screenShotArea.x = 204
    screenShotArea.width = 34
    screenShotArea.height = 16
  } else if (platformInfo.startsWith('android 12')) {
    screenShotArea.x = 336
    screenShotArea.y = 3
    screenShotArea.width = 50
    screenShotArea.height = 20
  } else if (isHarmony) {
    screenShotArea.x = 295
    screenShotArea.y = 14
    screenShotArea.width = 40
    screenShotArea.height = 20
  }
  beforeAll(async () => {
    page = await program.navigateTo(CURRENT_PAGE_PATH);
    await page.waitFor('view');
    originLifeCycleNum = await page.callMethod("getLifeCycleNum");
  });

  afterAll(async () => {
    await page.callMethod("setLifeCycleNum", originLifeCycleNum);
    const lifeCycleNum = await page.callMethod("getLifeCycleNum");
    expect(lifeCycleNum).toBe(originLifeCycleNum);
  });

  it("setNavigationBarColor2", async () => {
    await page.callMethod("setNavigationBarColor2");
    await page.waitFor(1000);
    if (isApp) {
      const image = await program.screenshot({
        deviceShot: true,
        area: screenShotArea,
      });
      expect(image).toSaveImageSnapshot();
    }
    const lifeCycleNum = await page.callMethod("getLifeCycleNum");
    expect(lifeCycleNum - originLifeCycleNum).toBe(2);
  });

  it("setNavigationBarColor1", async () => {
    await page.callMethod("setNavigationBarColor1");
    await page.waitFor(1000);
    if (isAndroid) {
      const image = await program.screenshot({
        deviceShot: true,
        area: screenShotArea,
      });
      expect(image).toSaveImageSnapshot();
    }
    const lifeCycleNum = await page.callMethod("getLifeCycleNum");
    expect(lifeCycleNum - originLifeCycleNum).toBe(4);
  });
});
