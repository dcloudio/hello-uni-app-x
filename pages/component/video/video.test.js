// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
jest.setTimeout(10000);
describe('component-native-video', () => {
  let page;

  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/video/video-all');
    await page.waitFor('video');
  });

  it('test API', async () => {
    // play
    await page.callMethod('play');
    await page.waitFor(async () => {
      return (await page.data('isPlaying')) == true;
    });
    // requestFullScreen
    await page.callMethod('requestFullScreen', null);
    await page.waitFor(async () => {
      return (await page.data('isFullScreen')) == true;
    });
    // exitFullScreen
    await page.callMethod('exitFullScreen');
    await page.waitFor(async () => {
      return (await page.data('isFullScreen')) == false;
    });
    // pause
    await page.callMethod('pause');
    await page.waitFor(async () => {
      return (await page.data('isPause')) == true;
    });
    await page.callMethod('play');
    await page.waitFor(async () => {
      return (await page.data('isPlaying')) == true;
    });
    // stop
    await page.callMethod('stop');
    await page.waitFor(async () => {
      return (await page.data('isPause')) == true;
    });
  });

  it('test format', async () => {
    page = await program.reLaunch('/pages/component/video/video-format');
    await page.waitFor(1000);
    expect(await page.data('isError')).toBe(false);
  });
});
