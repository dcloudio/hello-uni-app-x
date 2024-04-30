// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('template-list-news', () => {
  let page;
  
  async function getWindowInfo() {
    const windowInfoPage = await program.reLaunch('/pages/API/get-window-info/get-window-info')
    await windowInfoPage.waitFor(600);
    return await windowInfoPage.callMethod('jest_getWindowInfo')
  }
  const screenshotParams = { fullPage: true }
  let windowInfo
  beforeAll(async () => {
    if (!process.env.UNI_AUTOMATOR_APP_WEBVIEW) {
      screenshotParams.fullPage = false
      windowInfo = await getWindowInfo()
      let offsetY = '0'
      if (process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('android')) {
        offsetY = `${windowInfo.statusBarHeight + 44}`
      }
      if (process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('ios')) {
        offsetY = `${windowInfo.safeAreaInsets.top + 44}`
      }
      screenshotParams.offsetY = offsetY
    }
    page = await program.reLaunch('/pages/template/list-news/list-news');
    await page.waitFor(3000);
  });

  it('screenshot', async () => {
    const image = await program.screenshot(screenshotParams)
    expect(image).toSaveImageSnapshot()
  });
});
