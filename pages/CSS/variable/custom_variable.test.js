// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
describe('css-custom-variable', () => {
  if (process.env.UNI_AUTOMATOR_APP_WEBVIEW) {
    it('app 与 web 存在差异, webview 不进行截图', () => {
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
