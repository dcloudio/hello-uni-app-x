describe('/pages/CSS/transition/transition-transform.uvue', () => {

  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.startsWith('android')

  // 先屏蔽 android 平台
  if (isAndroid) {
    it('other platform', () => {
      expect(1).toBe(1)
    })
    return
  }


  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/transition/transition-transform')
    await page.waitFor(2000);
  });

  it("snap transition finish", async () => {
    await page.callMethod('open')
    await page.waitFor(3000)
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  })
});
