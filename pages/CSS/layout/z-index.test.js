const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')

describe('css-z-index', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/layout/z-index');
  });

  if (isAndroid) {
    it('test crash', async () => {
      await page.setData({
        autoTest: true
      });
      const elements = await page.$$('view');
      expect(elements.length).toBeGreaterThan(0);
      await page.setData({
        autoTest: false
      });
    });
  }

  it('screenshot', async () => {
    const windowInfo = await program.callUniMethod('getWindowInfo');
    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: windowInfo.safeAreaInsets.top + 44
      }
    });
    expect(image).toSaveImageSnapshot();
  });
});
