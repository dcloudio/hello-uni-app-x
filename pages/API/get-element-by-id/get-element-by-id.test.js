const PAGE_PATH = "/pages/API/get-element-by-id/get-element-by-id";
let page;

describe("getElementById", () => {
  beforeAll(async () => {
    page = await program.navigateTo(PAGE_PATH);
    await page.waitFor(1000);
  });
  it("getElementByNotExistId", async () => {
    const res = await page.callMethod("getElementByNotExistId");
    expect(!!res).toBe(false);
  });
  it("changeStyle", async () => {
    await page.callMethod("changePageHeadBackgroundColor");
    await page.callMethod("changeTextColor");
    await page.callMethod("changeViewStyle");
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
