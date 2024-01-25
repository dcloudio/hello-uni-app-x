// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('component-native-scroll-view-refresher', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page;
    beforeAll(async () => {
      page = await program.reLaunch('/pages/component/scroll-view/scroll-view-refresher');
      await page.waitFor(300);
    });

    it('scroll-view-refresher-screenshot', async () => {
      //禁止滚动条
      await page.setData({
          showScrollbar: false
      })
      await page.waitFor(300);
      const image = await program.screenshot();
      expect(image).toMatchImageSnapshot();
    })

    it('check_refresher', async () => {
      await page.setData({
        refresherTriggered: true
      })
      await page.waitFor(2000);
      expect(await page.data('refresherrefresh')).toBe(true)
    });
  } else {
    it('other platform', () => {
      expect(1).toBe(1)
    })
  }
});
