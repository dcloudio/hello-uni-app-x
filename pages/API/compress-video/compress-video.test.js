// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
describe('API-compressVideo', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/compress-video/compress-video');
    await page.waitFor(500);
  });

  it('test compressVideo', async () => {
    if (process.env.uniTestPlatformInfo.startsWith('web') || process.env.uniTestPlatformInfo.startsWith('ios')) {
      expect(1).toBe(1);
      return;
    }
    await page.callMethod('testCompressVideo');
    await page.waitFor(3000);
    expect(await page.data('videoInfoForTest')).toEqual({
      width: 640,
      height: 360,
      size: 265
    });
  });
});
