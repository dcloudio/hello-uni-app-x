const CURRENT_PAGE_PATH =
  "/pages/template/navbar-lite/navbar-lite";

describe("setCustomNavigationBarColor", () => {
  let page;
  let originLifeCycleNum;
  const isAndroid = process.env.UNI_OS_NAME === "android";
  const adbScreenShotArea = {
    x: 880,
    y: 0,
    width: 60,
    height: 60
  };
  beforeAll(async () => {
    page = await program.navigateTo(CURRENT_PAGE_PATH);
    if (process.env.uniTestPlatformInfo.startsWith('android 6')) {
      adbScreenShotArea.x = 535
      adbScreenShotArea.width = 90
      adbScreenShotArea.height = 50
    } else if (process.env.uniTestPlatformInfo.startsWith('android 12')) {
      adbScreenShotArea.x = 1160
      adbScreenShotArea.width = 70
      adbScreenShotArea.height = 80
    }
    await page.waitFor(1000);
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
    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: adbScreenShotArea,
      });
      expect(image).toMatchImageSnapshot();
    }
    const lifeCycleNum = await page.callMethod("getLifeCycleNum");
    expect(lifeCycleNum - originLifeCycleNum).toBe(2);
  });

  it("setNavigationBarColor1", async () => {
    await page.callMethod("setNavigationBarColor1");
    await page.waitFor(1000);
    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: adbScreenShotArea,
      });
      expect(image).toMatchImageSnapshot();
    }
    const lifeCycleNum = await page.callMethod("getLifeCycleNum");
    expect(lifeCycleNum - originLifeCycleNum).toBe(4);
  });
});
