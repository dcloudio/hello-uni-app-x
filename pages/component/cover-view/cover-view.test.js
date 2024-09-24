let page;
describe('web-cover-view', () => {
  if (!process.env.uniTestPlatformInfo.startsWith('web')) {
    it('app', () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/cover-view/cover-view')
    await page.waitFor('view');
    await page.waitFor('cover-view');
    await page.waitFor('cover-image');
    await page.waitFor('map');
    // 等待地图加载完成
    const waitTime = process.env.uniTestPlatformInfo.includes('firefox') ? 5000:3000
    await page.waitFor(waitTime)
  });

  it('screenshot', async () => {
    expect(await program.screenshot()).toSaveImageSnapshot();
  });

});
