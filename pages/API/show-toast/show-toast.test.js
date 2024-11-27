// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('API-toast', () => {
  let page;
  const isApp = process.env.UNI_OS_NAME === "android" || process.env.UNI_OS_NAME === "ios";
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/show-toast/show-toast')
    await page.waitFor("view");
  });

  async function toScreenshot(imgName) {
    if (isApp) {
      await page.waitFor(500);
      const res = await page.callMethod('jest_getWindowInfo')
      const windowHeight = res.windowHeight * res.pixelRatio;
      const windowWidth = res.windowWidth * res.pixelRatio;
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 200,
          width:windowWidth
        },
      });
      expect(image).toSaveImageSnapshot({customSnapshotIdentifier() {
        return imgName
      }})
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot({customSnapshotIdentifier() {
        return imgName
      }})
    }
    await page.waitFor(500);
  }

  it("onload-toast-test", async () => {
    await toScreenshot('toast-onload')
  })

  it("icon-toast-test", async () => {
    const icons = await page.$$('.radio-icon')
    for (let i = 0; i < icons.length; i++) {
      await icons[i].tap()
      const iconText = await icons[i].text()
      await page.callMethod('toast1Tap')
      await page.waitFor(100);
      await toScreenshot(`${iconText}-toast`)
    }
  })

  it("icon=none-mask=true-toast-test", async () => {
    await page.setData({maskSelect: true})
    await page.callMethod('toast3Tap')
    await page.waitFor(300);
    await toScreenshot('icon=none-mask=true-toast-image')
  })

  it("image-toast-test", async () => {
    await page.setData({imageSelect: true})
    await page.waitFor(300);
    await page.callMethod('toast1Tap')
    await page.waitFor(300);
    await toScreenshot('toast-image')
  })

  it("duration-toast-test", async () => {
    await page.setData({intervalSelect: 4000})
    await page.callMethod('toast1Tap')
    await page.waitFor(2000);
    await toScreenshot('toast-duration-2000')
    await page.waitFor(1000);
    await page.callMethod('hideToast')
    await page.waitFor(300);
    await toScreenshot('toast-duration-end')
  })

  if(process.env.uniTestPlatformInfo.startsWith('web')){
    return
  }

  it("position-toast-test", async () => {
    const positions = await page.$$('.radio-position')
    for (let i = 0; i < positions.length; i++) {
      await positions[i].tap()
      const positionsText = await positions[i].attribute('value')
      await page.callMethod('toast2Tap')
      await page.waitFor(100);
      await toScreenshot(`toast-position-${positionsText}`)
    }
  })

});
