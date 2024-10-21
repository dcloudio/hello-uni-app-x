const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')


describe('API-saveImageToPhotosAlbum', () => {
  if (!isAndroid) {
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
