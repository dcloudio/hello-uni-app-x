// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('component-native-image', () => {

    let page;
    beforeAll(async () => {
        page = await program.reLaunch('/pages/component/image/image');
        await page.waitFor(600);
    });

    it('check_image_load', async () => {
         expect(await page.data('loadError')).toBe(false)
    });
});
