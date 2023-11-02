const CURRENT_PAGE_PATH =
  "/pages/API/set-navigation-bar-title/set-navigation-bar-title";

describe("setNavigationBarColor", () => {
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

  it("setNavigationBarNewTitle", async () => {
    await page.callMethod("setNavigationBarNewTitle");
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
    const lifeCycleNum = await page.callMethod("getLifeCycleNum");
    expect(lifeCycleNum - originLifeCycleNum).toBe(2);
  });
  it("setNavigationBarLongTitle", async () => {
    await page.callMethod("setNavigationBarLongTitle");
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
