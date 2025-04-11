const CURRENT_PAGE_PATH =
  "/pages/template/navbar-lite/navbar-lite";

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
  beforeAll(async () => {
    page = await program.navigateTo(CURRENT_PAGE_PATH);
    if (process.env.uniTestPlatformInfo.startsWith('android 6')) {
      screenShotArea.x = 204
      screenShotArea.width = 34
      screenShotArea.height = 16
    } else if (process.env.uniTestPlatformInfo.startsWith('android 12')) {
      screenShotArea.x = 442
      screenShotArea.width = 27
      screenShotArea.height = 24
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
