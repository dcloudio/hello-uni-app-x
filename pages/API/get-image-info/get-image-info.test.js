// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
describe('API-getImageInfo', () => {
  if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
    it('pass', async () => {
      expect(1).toBe(1);
    });
    return;
  }

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/get-image-info/get-image-info');
    await page.waitFor(500);
  });

  it('test getImageInfo', async () => {
    await page.waitFor(500);
    if (process.env.uniTestPlatformInfo.startsWith('web')) {
      expect(await page.data('imageInfoForTest')).toEqual({
        width: 192,
        height: 192,
        path: 'test-image/logo.png'
      });
      return;
    }
    expect(await page.data('imageInfoForTest')).toEqual({
      width: 192,
      height: 192,
      path: 'test-image/logo.png',
      orientation: 'up',
      type: 'png'
    });
  });
});
