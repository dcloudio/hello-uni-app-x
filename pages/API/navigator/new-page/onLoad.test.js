jest.setTimeout(20000);
const PAGE_PATH = "/pages/API/navigator/new-page/onLoad";
const INTERMEDIATE_PAGE_PATH = "/pages/API/navigator/new-page/new-page-1";
const TARGET_PAGE_PATH = "/pages/API/navigator/new-page/new-page-2";
let page;

describe("onLoad", () => {
  it("adjustData", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor(500);
    await page.callMethod("navigateToOnLoadWithType", "adjustData");
    await page.waitFor(1000);
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
  });
  it("navigateTo", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor(500);
    await page.callMethod("navigateToOnLoadWithType", "navigateTo");
    await page.waitFor(1000);
    page = await program.currentPage();
    expect(page.path).toBe(TARGET_PAGE_PATH.substring(1));
  });
  it("navigateBack", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor(500);
    await page.callMethod("navigateToOnLoadWithType", "navigateBack");
    await page.waitFor(1000);
    page = await program.currentPage();
    expect(page.path).toBe(INTERMEDIATE_PAGE_PATH.substring(1));
  });
  it("redirectTo", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor(500);
    await page.callMethod("navigateToOnLoadWithType", "redirectTo");
    await page.waitFor(1000);
    page = await program.currentPage();
    expect(page.path).toBe(TARGET_PAGE_PATH.substring(1));
  });
  it("reLaunch", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor(500);
    await page.callMethod("navigateToOnLoadWithType", "reLaunch");
    await page.waitFor(1000);
    page = await program.currentPage();
    expect(page.path).toBe(TARGET_PAGE_PATH.substring(1));
  });
  it("switchTab", async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
    await page.waitFor(500);
    await page.callMethod("navigateToOnLoadWithType", "switchTab");
    await page.waitFor(1000);
    page = await program.currentPage();
    expect(page.path).toBe("pages/tabBar/component");
  });
  // toast 出现在 INTERMEDIATE_PAGE_PATH 页面（非 onLoad 生命周期所在页面）
  // 当 navigateTo 到 onLoad 页面时，toast 会被关闭
  // it("showToast", async () => {
  //   page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
  //   await page.waitFor(500);
  //   await page.callMethod("navigateToOnLoadWithType", "showToast");
  //   await page.waitFor(1000);
  //   const image = await program.screenshot();
  //   expect(image).toMatchImageSnapshot();
  // });
  // 同 toast
  // it("showLoading", async () => {
  //   page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
  //   await page.waitFor(500);
  //   await page.callMethod("navigateToOnLoadWithType", "showLoading");
  //   await page.waitFor(1000);
  //   const image = await program.screenshot();
  //   expect(image).toMatchImageSnapshot();
  // });
  // 同 toast
  // it("showModal", async () => {
  //   page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
  //   await page.waitFor(500);
  //   await page.callMethod("navigateToOnLoadWithType", "showModal");
  //   await page.waitFor(1000);
  //   const image = await program.screenshot();
  //   expect(image).toMatchImageSnapshot();
  // });
  // 同 toast
  // it("showActionSheet", async () => {
  //   page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
  //   await page.waitFor(500);
  //   await page.callMethod("navigateToOnLoadWithType", "showActionSheet");
  //   await page.waitFor(1000);
  //   const image = await program.screenshot();
  //   expect(image).toMatchImageSnapshot();
  // });
});
