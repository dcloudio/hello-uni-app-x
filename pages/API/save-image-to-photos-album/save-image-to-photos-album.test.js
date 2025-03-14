const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isIOS = platformInfo.startsWith('ios')
const isMP = platformInfo.startsWith('mp')
const isWeb = platformInfo.startsWith('web')
const isHarmony = platformInfo.startsWith('harmony')

describe('API-saveImageToPhotosAlbum', () => {
  if (isIOS || isWeb || isMP || isHarmony) {
    it('pass', async () => {
      expect(1).toBe(1);
    });
    return;
  }

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/save-image-to-photos-album/save-image-to-photos-album');
    await page.waitFor(500);
  });

  it('test saveImageToPhotosAlbum', async () => {
    await program.adbCommand(
      'pm grant io.dcloud.uniappx android.permission.WRITE_EXTERNAL_STORAGE');
    await page.waitFor(500);
    await page.callMethod('saveImage');
    expect(await page.data('success')).toBe(true);
  });
});
