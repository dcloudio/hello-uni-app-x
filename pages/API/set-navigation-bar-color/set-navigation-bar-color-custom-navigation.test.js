const CURRENT_PAGE_PATH =
  '/pages/API/set-navigation-bar-color/set-navigation-bar-color-custom-navigation'

describe('set statusBar color', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    it('dummyTest', async () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  const adbScreenShotArea = {
    x: 880,
    y: 0,
    width: 60,
    height: 60
  };
  if (process.env.uniTestPlatformInfo.startsWith('android 6')) {
    adbScreenShotArea.x = 535
    adbScreenShotArea.width = 90
    adbScreenShotArea.height = 50
  } else if (process.env.uniTestPlatformInfo.startsWith('android 12')) {
    adbScreenShotArea.x = 1160
    adbScreenShotArea.width = 70
    adbScreenShotArea.height = 80
  }
  beforeAll(async () => {
    page = await program.navigateTo(CURRENT_PAGE_PATH)
    await page.waitFor(1000)
  })

  it("setNavigationBarColor1", async () => {
    await page.callMethod("setNavigationBarColor1");
    const image = await program.screenshot({
      adb: true,
      area: adbScreenShotArea
    });
    expect(image).toMatchImageSnapshot();
  });
  it("setNavigationBarColor2", async () => {
    await page.callMethod("setNavigationBarColor2");
    const image = await program.screenshot({
      adb: true,
      area: adbScreenShotArea
    });
    expect(image).toMatchImageSnapshot();
  });
})
