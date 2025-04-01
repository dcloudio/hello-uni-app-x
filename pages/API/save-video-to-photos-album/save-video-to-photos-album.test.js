const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isIOS = platformInfo.startsWith('ios')
const isMP = platformInfo.startsWith('mp')
const isWeb = platformInfo.startsWith('web')
const isAndroid = platformInfo.startsWith('android')
const isHarmony = platformInfo.startsWith('harmony')

describe('API-saveVideoToPhotosAlbum', () => {
  if (isIOS || isWeb || isMP) {
    it('pass', async () => {
      expect(1).toBe(1);
    });
    return;
  }

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/save-video-to-photos-album/save-video-to-photos-album');
    await page.waitFor('view');
    await page.waitFor(500);
  });

  it('test saveVideoToPhotosAlbum', async () => {
    if (isAndroid) {
      await program.adbCommand(
        'pm grant io.dcloud.uniappx android.permission.WRITE_EXTERNAL_STORAGE');
    }
    await page.callMethod('saveVideo');
    if (isHarmony) {
      await program.tap({x: 305, y: 568})
    }
    await page.waitFor(500);
    expect(await page.data('success')).toBe(true);
    await page.waitFor(2000);
  });
});
