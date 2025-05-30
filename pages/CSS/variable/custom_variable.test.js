const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isWeb = platformInfo.startsWith('web')

describe('css-custom-variable', () => {
  it('screenshot', async () => {
    const page = await program.reLaunch('/pages/CSS/variable/custom_variable');
    await page.waitFor('view');
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  });
});
