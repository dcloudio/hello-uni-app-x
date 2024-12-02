// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
describe('API-compressImage', () => {
  if (
    process.env.uniTestPlatformInfo.startsWith('web') ||
    process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios') ||
    process.env.uniTestPlatformInfo.startsWith('mp')
  ) {
    it('pass', async () => {
      expect(1).toBe(1);
    });
    return;
  }

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/compress-image/compress-image');
    await page.waitFor(500);
  });

  it('test compressImage', async () => {
    await page.callMethod('testCompressImage');
    await page.waitFor(1000);
    expect(await page.data('imageInfoForTest')).toEqual({
      width: 100,
      height: 100,
      isSizeReduce: true
    });
  });
});
