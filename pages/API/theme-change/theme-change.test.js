// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('API-theme-change', () => {

  let page;
  const isApp = process.env.UNI_OS_NAME === "android" || process.env.UNI_OS_NAME === "ios";

  if (!isApp) {
    it('dummyTest', () => {
      expect(1).toBe(1)
    })
    return
  }

  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/theme-change/theme-change')
    await page.waitFor(600);
  });



  it("check-set-app-theme", async () => {
    const originalTheme = await page.data('originalTheme')
    console.log("originalTheme是", originalTheme)
    await page.callMethod('setAppTheme', "dark")
    await page.waitFor(300)
    expect(await page.data('appTheme')).toBe("dark")
    const image = await program.screenshot({ deviceShot: true });
    expect(image).toSaveImageSnapshot();
    //还原主题为light
    await page.callMethod('setAppTheme', originalTheme)
    await page.waitFor(600)
  })
});
