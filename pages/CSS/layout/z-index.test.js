describe('css-z-index', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/layout/z-index');
  });

  it('test crash', async () => {
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      await page.setData({
        autoTest: true
      });
      const elements = await page.$$('view');
      expect(elements.length).toBeGreaterThan(0);
      await page.setData({
        autoTest: false
      });
    } else {
      expect(1).toBe(1);
    }
  });
});
