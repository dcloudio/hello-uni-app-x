// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
describe('API-getVideoInfo', () => {
  if (process.env.uniTestPlatformInfo.startsWith('ios')) {
    it('pass', async () => {
      expect(1).toBe(1);
    });
    return;
  }

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/get-video-info/get-video-info');
    await page.waitFor(500);
  });

  it('test getVideoInfo', async () => {
    await page.callMethod('testGetVideoInfo');
    await page.waitFor(1000);
    if (process.env.uniTestPlatformInfo.startsWith('web')) {
      expect(await page.data('videoInfoForTest')).toEqual({
        duration: 10,
        size: 211,
        width: 1280,
        height: 720
      });
      return;
    }
    expect(await page.data('videoInfoForTest')).toEqual({
      orientation: 'up',
      type: 'video/mp4',
      duration: 10,
      size: 211,
      width: 1280,
      height: 720,
      fps: 30,
      bitrate: 172
    });
  });
});
