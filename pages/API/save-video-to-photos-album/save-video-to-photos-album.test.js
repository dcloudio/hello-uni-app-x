const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isIos = platformInfo.startsWith('ios')
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')

describe('API-saveVideoToPhotosAlbum', () => {
  if (isIos || isWeb || isMP) {
    it('pass', async () => {
      expect(1).toBe(1);
    });
    return;
  }

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/save-video-to-photos-album/save-video-to-photos-album');
    await page.waitFor(500);
  });

  it('test saveVideoToPhotosAlbum', async () => {
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      await program.adbCommand(
        'pm grant io.dcloud.uniappx android.permission.WRITE_EXTERNAL_STORAGE');
      await page.waitFor(500);
    }
    await page.callMethod('saveVideo');
    expect(await page.data('success')).toBe(true);
  });
});
