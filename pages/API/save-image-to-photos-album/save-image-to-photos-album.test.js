const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isIOS = platformInfo.startsWith('ios')
const isMP = platformInfo.startsWith('mp')
const isWeb = platformInfo.startsWith('web')
const isAndroid = platformInfo.startsWith('android')
const isHarmony = platformInfo.startsWith('harmony')
const isAppWebview = !!process.env.UNI_AUTOMATOR_APP_WEBVIEW

describe('API-saveImageToPhotosAlbum', () => {
  if (isIOS || isWeb || isMP || isAppWebview) {
    it('pass', async () => {
      expect(1).toBe(1);
    });
    return;
  }

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/save-image-to-photos-album/save-image-to-photos-album');
    await page.waitFor('view');
  });

  it('test saveImageToPhotosAlbum', async () => {
    if (isAndroid) {
      await program.adbCommand(
        'pm grant io.dcloud.uniappx android.permission.WRITE_EXTERNAL_STORAGE');
    }
    await page.callMethod('saveImage');
    if (isHarmony) {
      await page.waitFor(2000);
      await program.tap({ x: 305, y: 555 })
    }
    await page.waitFor(1000);

    const windowInfo = await program.callUniMethod('getWindowInfo');
    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: windowInfo.safeAreaInsets.top + 44
      }
    });
    expect(image).toSaveImageSnapshot();

    expect(await page.data('success')).toBe(true);
    await page.waitFor(2000);
  });
});
