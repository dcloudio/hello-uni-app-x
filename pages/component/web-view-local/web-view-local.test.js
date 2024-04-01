// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('component-native-web-view', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/web-view-local/web-view-local');
    await page.waitFor(1000);
  });

  it('check_load_url', async () => {
    expect(await page.data('loadError')).toBe(false)
  });

  it('screenshot', async () => {
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      await page.waitFor(async () => {
        return await page.data('loadFinish') === true;
      });
      const image = await program.screenshot({
        fullPage: true
      });
      expect(image).toMatchImageSnapshot();
    }
  });
});