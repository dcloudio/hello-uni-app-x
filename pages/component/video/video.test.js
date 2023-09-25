// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('component-native-video', () => {

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/video/video');
    await page.waitFor(1000);
  });

  it('check API play', async () => {
    await page.callMethod('playTest');
    await page.waitFor(500);
    expect(await page.data('isPlaying')).toBe(true);
    expect(await page.data('isPause')).toBe(false);
  });

  it('check API requestFullScreen', async () => {
    await page.callMethod('requestFullScreenTest');
    await page.waitFor(1000);
    expect(await page.data('isFullScreen')).toBe(true);
  });

  it('check API exitFullScreen', async () => {
    await page.callMethod('exitFullScreenTest');
    await page.waitFor(1000);
    expect(await page.data('isFullScreen')).toBe(false);
  });

  it('check API pause', async () => {
    await page.callMethod('pauseTest');
    await page.waitFor(500);
    expect(await page.data('isPause')).toBe(true);
    expect(await page.data('isPlaying')).toBe(false);
    await page.callMethod('playTest');
    await page.waitFor(500);
    expect(await page.data('isPlaying')).toBe(true);
    expect(await page.data('isPause')).toBe(false);
  });

  it('check API stop', async () => {
    await page.callMethod('stopTest');
    await page.waitFor(500);
    expect(await page.data('isPause')).toBe(true);
    expect(await page.data('isPlaying')).toBe(false);
  });
});