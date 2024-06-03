// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
describe('API-getImageInfo', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/get-image-info/get-image-info');
    await page.waitFor(500);
  });

  it('test getImageInfo', async () => {
    if (process.env.uniTestPlatformInfo.startsWith('ios')) {
      expect(1).toBe(1);
      return;
    }
    await page.waitFor(500);
    if (process.env.uniTestPlatformInfo.startsWith('web')) {
      expect(await page.data('imageInfoForTest')).toEqual({
        width: 192,
        height: 192
      });
      return;
    }
    expect(await page.data('imageInfoForTest')).toEqual({
      width: 192,
      height: 192,
      path: 'file:///storage/emulated/0/Android/data/io.dcloud.uniappx/apps/__UNI__HelloUniAppX/www/static/test-image/logo.png',
      orientation: 'up',
      type: 'png'
    });
  });
});
