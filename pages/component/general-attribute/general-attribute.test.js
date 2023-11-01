const PAGE_PATH = '/pages/component/general-attribute/general-attribute'

describe('general attribute', () => {
  let page

  beforeAll(async () => {
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
  })
  it("class & style", async () => {
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
  });
  it('validateGeneralAttributes', async () => {
    const button = await page.$(".btn-style");
    await button.tap()
    const btnInner = await page.$('.btn-inner')
    expect(await btnInner.text()).toBe('基础属性验证成功')
  })
  it("ref", async () => {
    const button = await page.$(".btn-ref");
    await button.tap();
    await page.waitFor(500);
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
  });
})
