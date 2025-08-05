const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')

describe('preview-image', () => {
  let page;

  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/preview-image/preview-image');
    await page.waitFor('view');
    await page.waitFor(isWeb ? 4000 : 100);
  });

  it('screenshot', async () => {
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot()
  });
});
