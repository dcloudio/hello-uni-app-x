// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('test title', () => {

    let page;
    beforeAll(async () => {
        page = await program.reLaunch('/pages/component/web-view-local/web-view-local');
        await page.waitFor(1000);
    });

    it('check_load_url', async () => {
      expect(await page.data('loadError')).toBe(false)
    });
});
