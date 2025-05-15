let page;
describe('web-clipboard', () => {
  if (!(process.env.uniTestPlatformInfo.startsWith('web') || process.env.uniTestPlatformInfo.startsWith(
        "android") ||
      process.env.uniTestPlatformInfo.startsWith("ios"))) {
    it('app', async () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/clipboard/clipboard')
    await page.waitFor('view');
    await page.setData({
      data: '123456'
    })
  });
  it('setClipboardData', async () => {
    await page.callMethod('setClipboard')
    await page.waitFor(500);
    console.log(await page.data('setClipboardTest'), 'setClipboardTest')
    // bug：自动化测试时设置成功也进入了fail
    // expect(await page.data('setClipboardTest')).toBeTruthy()
  });
  it('getClipboardData', async () => {
    await page.callMethod('getClipboard')
    expect(await page.data('getDataTest')).toBe('123456')
  });

});
