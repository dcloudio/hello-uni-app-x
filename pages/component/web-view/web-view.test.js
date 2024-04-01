// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('component-native-web-view', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page;
    beforeAll(async () => {
      page = await program.reLaunch('/pages/component/web-view/web-view');
      await page.waitFor(3000);
    });

    it('check_load_url', async () => {
      expect(await page.data('loadError')).toBe(false)
    });
  } else {
    // TODO: web 端暂不支持
    it('web', async () => {
      expect(1).toBe(1)
    })
  }
});