const CURRENT_PAGE_PATH =
  "/pages/API/set-navigation-bar-color/set-custom-navigation-bar-color";

describe("setCustomNavigationBarColor", () => {
  let page;
  let originLifeCycleNum;
  const screenShotArea = { x: 880, y: 0, width: 100, height: 60 };
  beforeAll(async () => {
    console.log('process.env.uniTestPlatformInfo', process.env.uniTestPlatformInfo )
    page = await program.navigateTo(CURRENT_PAGE_PATH);
    if(process.env.uniTestPlatformInfo.startsWith('android 6')){
      screenShotArea.x = 535
      screenShotArea.width = 90
      screenShotArea.height = 50
    }else if(process.env.uniTestPlatformInfo.startsWith('android 12')){
      screenShotArea.x = 1160
      screenShotArea.width = 140
      screenShotArea.height = 80
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
    const image = await program.screenshot({
      adb: true,
      area: screenShotArea,
    });
    expect(image).toMatchImageSnapshot();
    const lifeCycleNum = await page.callMethod("getLifeCycleNum");
    expect(lifeCycleNum - originLifeCycleNum).toBe(2);
  });

  it("setNavigationBarColor1", async () => {
    await page.callMethod("setNavigationBarColor1");
    await page.waitFor(1000);
    const image = await program.screenshot({
      adb: true,
      area: screenShotArea,
    });
    expect(image).toMatchImageSnapshot();
    const lifeCycleNum = await page.callMethod("getLifeCycleNum");
    expect(lifeCycleNum - originLifeCycleNum).toBe(4);
  });
});
