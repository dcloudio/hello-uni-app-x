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
    const image = await program.screenshot({adb: true, area:{x:1000, y: 0, width: 80, height: 88}});
    expect(image).toMatchImageSnapshot();
  });

  it("setNavigationBarColor1", async () => {
    await page.callMethod("setNavigationBarColor1");
    const image = await program.screenshot({adb: true, area:{x:1000, y: 0, width: 80, height: 88}});
    expect(image).toMatchImageSnapshot();
  });
});
