const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAppWebview = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

describe('template-list-news', () => {
  let page;
  const screenshotParams = { }
  beforeAll(async () => {
    if (!isAppWebview) {
      const windowInfo = await program.callUniMethod('getWindowInfo');
      screenshotParams.offsetY = `${windowInfo.safeAreaInsets.top + 44}`
    }
    page = await program.reLaunch('/pages/template/list-news/list-news');
    await page.waitFor(3000);
  });

  it('screenshot', async () => {
    const image = await program.screenshot(screenshotParams)
    expect(image).toSaveImageSnapshot()
  });
});
