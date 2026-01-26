const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')
describe('/pages/CSS/layout/width.uvue', () => {
  if (!isWeb) {
    it('skip: deep不支持', () => {
      expect(1).toBe(1)
    })
    return
  }
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/layout/width');
  });

  it('test nest components width', async () => {
    await page.waitFor('view');
    const element = await page.$('.child_box');
    const size = await element.size()
    expect(size.width).toBe(150)
    expect(size.height).toBe(100)
  })
});
