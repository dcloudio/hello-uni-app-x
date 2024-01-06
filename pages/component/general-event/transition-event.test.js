// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('transition event', () => {
    if (process.env.uniTestPlatformInfo.indexOf('web') > -1) {
      it('dummyTest', () => {
        expect(1).toBe(1)
      })
      return
    }
    let page;
    beforeAll(async () => {
        page = await program.reLaunch('/pages/component/general-event/transition-event')
        await page.waitFor(3000);
    });

    it('transitionend', async () => {
        await page.callMethod('switchBtn')
        await page.waitFor(3000)
        expect(await page.data("onTransitionEndTriggr")).toBe(true)
    });
});
