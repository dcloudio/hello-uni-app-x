describe('/pages/CSS/transition/transition-duration.uvue', () => {

  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.startsWith('android')

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/transition/transition-duration')
    await page.waitFor(2000);
  });

  it("snap transition finish", async () => {
    await page.callMethod('jest_start');
    await page.waitFor(7000);
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
    await page.waitFor(1000);
    await page.callMethod('jest_reset');
  })
});
