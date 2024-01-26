jest.setTimeout(20000);
const PAGE_PATH = "/pages/API/navigator/new-page/onLoad";
const INTERMEDIATE_PAGE_PATH = "/pages/API/navigator/new-page/new-page-1";
const TARGET_PAGE_PATH = "/pages/API/navigator/new-page/new-page-3";
let page;

describe("onLoad", () => {
  it("adjustData", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor('view');
    await page.callMethod("navigateToOnLoadWithType", "adjustData");
    await page.waitFor(1000);
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
  });
  it("navigateTo", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor('view');
    await page.callMethod("navigateToOnLoadWithType", "navigateTo");
    await page.waitFor(1000);
    page = await program.currentPage();
    expect(page.path).toBe(TARGET_PAGE_PATH.substring(1));
  });
  it("navigateBack", async () => {
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
      await page.waitFor('view');
      await page.callMethod("navigateToOnLoadWithType", "navigateBack");
      await page.waitFor('view');
      page = await program.currentPage();
      expect(page.path).toBe(INTERMEDIATE_PAGE_PATH.substring(1));
    }
  });
  it("redirectTo", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor('view');
    await page.callMethod("navigateToOnLoadWithType", "redirectTo");
    await page.waitFor(100);
    page = await program.currentPage();
    expect(page.path).toBe(TARGET_PAGE_PATH.substring(1));
  });
  it("reLaunch", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor('view');
    await page.callMethod("navigateToOnLoadWithType", "reLaunch");
    await page.waitFor(100);
    page = await program.currentPage();
    expect(page.path).toBe(TARGET_PAGE_PATH.substring(1));
  });
  it("switchTab", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor('view');
    await page.callMethod("navigateToOnLoadWithType", "switchTab");
    await page.waitFor(100);
    page = await program.currentPage();
    expect(page.path).toBe("pages/tabBar/component");
  });
  it("showToast", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor("view");
    await page.callMethod("navigateToOnLoadWithType", "showToast");
    await page.waitFor(1000);
    const image = await program.screenshot({
      adb: true,
      area: {
        x: 0,
        y: 200,
        height: 2140,
      },
    });
    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.05,
      failureThresholdType: "percent",
    });
  });
  it("showLoading", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor("view");
    await page.callMethod("navigateToOnLoadWithType", "showLoading");
    await page.waitFor(1000);
    const image = await program.screenshot({
      adb: true,
      area: {
        x: 0,
        y: 200,
        height: 2140,
      },
    });
    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.05,
      failureThresholdType: "percent",
    });
  });
  it("showModal", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor("view");
    await page.callMethod("navigateToOnLoadWithType", "showModal");
    await page.waitFor(1000);
    const image = await program.screenshot({
      adb: true,
      area: {
        x: 0,
        y: 200,
        height: 2140,
      },
    });
    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.05,
      failureThresholdType: "percent",
    });
  });
  it("showActionSheet", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor("view");
    await page.callMethod("navigateToOnLoadWithType", "showActionSheet");
    await page.waitFor(1000);
    const image = await program.screenshot({
      adb: true,
      area: {
        x: 0,
        y: 200,
        height: 2140,
      },
    });
    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.05,
      failureThresholdType: "percent",
    });
  });
});
