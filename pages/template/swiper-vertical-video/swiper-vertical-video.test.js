const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

describe('swiper-vertical-video', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/template/swiper-vertical-video/swiper-vertical-video');
    await page.waitFor('view')
    await page.waitFor(2000); // 等待页面加载完成
  });
  // 不进行 app-webview 截图对比
  if (!isAppWebView) {
    it('screenshot', async () => {
      const image = await program.screenshot({
       fullPage: true,
      });
      expect(image).toSaveImageSnapshot();
    });
  }
});
