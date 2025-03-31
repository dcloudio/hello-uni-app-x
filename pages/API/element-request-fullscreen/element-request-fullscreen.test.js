describe('/pages/API/element-request-fullscreen/element-request-fullscreen', () => {

  if (
    process.env.uniTestPlatformInfo.startsWith('web') ||
    process.env.uniTestPlatformInfo.startsWith('mp')
  ) {
    it('pass', async () => {
      expect(1).toBe(1);
    });
    return;
  }


  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/element-request-fullscreen/element-request-fullscreen')
    await page.waitFor(2000);
  });

  it("test-fullscreen", async () => {
    // 进入全屏
    await page.callMethod('fullscreen')
    await page.waitFor(1000)
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()

    // 退出全屏
    await page.callMethod('fullscreen')
    await page.waitFor(1000)
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  })
});
