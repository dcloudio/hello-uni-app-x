const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isHarmony = platformInfo.startsWith('harmony')

describe('css-function', () => {
  if (process.env.UNI_AUTOMATOR_APP_WEBVIEW || isHarmony) {
    // app 与 web 存在差异, webview 不进行截图
    // harmony 不支持
    it('not support', () => {
      expect(1).toBe(1)
    })
    return
  }
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/function/function');
    await page.waitFor('view');
  });

  it('screenshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  });
});
