const CURRENT_PAGE_PATH =
  "/pages/API/set-navigation-bar-color/set-custom-navigation-bar-color";

describe("setCustomNavigationBarColor", () => {
  let page;
  let originLifeCycleNum;
  beforeAll(async () => {
    page = await program.navigateTo(CURRENT_PAGE_PATH);
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
      area: { x: 880, y: 0, width: 100, height: 60 },
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
      area: { x: 880, y: 0, width: 100, height: 60 },
    });
    expect(image).toMatchImageSnapshot();
    const lifeCycleNum = await page.callMethod("getLifeCycleNum");
    expect(lifeCycleNum - originLifeCycleNum).toBe(4);
  });
});
