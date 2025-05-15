const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isWeb = platformInfo.startsWith('web')

describe('css-custom-variable', () => {
  if (!(isAndroid || isIos || isWeb)) {
    it('not support platform', () => {
      expect(1).toBe(1)
      return
    })
  }
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/variable/custom_variable');
    await page.waitFor('view');
  });

  it('screenshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  });
});
