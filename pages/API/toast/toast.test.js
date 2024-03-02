// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('API-toast', () => {

  let page;
  const isAndroid = process.env.UNI_OS_NAME === "android";


  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/toast/toast')
    await page.waitFor(600);
  });



  it("onload-toast-test", async () => {


    if (isAndroid) {

      const res = await page.callMethod('jest_getWindowInfo')
      const windowHeight = res.windowHeight * res.pixelRatio;
      const windowWidth = res.windowWidth * res.pixelRatio;

      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 200,
          width:windowWidth
        },
      });
      expect(image).toMatchImageSnapshot();
    }else{
      const image = await program.screenshot({
        adb: true,
        fullPage: true
      });
      expect(image).toMatchImageSnapshot()
    }
  })



  it("btn-toast-default-1", async () => {
    const btnToastDefaultButton = await page.$('#btn-toast-default')
    await btnToastDefaultButton.tap()
    await page.waitFor(200)
    if (isAndroid) {

      const res = await page.callMethod('jest_getWindowInfo')
      const windowHeight = res.windowHeight * res.pixelRatio;
      const windowWidth = res.windowWidth * res.pixelRatio;

      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 200,
          width:windowWidth
        },
      });
      expect(image).toMatchImageSnapshot();
    }else{
      const image = await program.screenshot({
        adb: true,
        fullPage: true
      });
      expect(image).toMatchImageSnapshot()
    }
  })



  it("btn-toast-duration-1", async () => {
    const btnToastDurationButton = await page.$('#btn-toast-duration')
    await btnToastDurationButton.tap()
    await page.waitFor(2000)
    if (isAndroid) {
      const res = await page.callMethod('jest_getWindowInfo')
      const windowHeight = res.windowHeight * res.pixelRatio;
      const windowWidth = res.windowWidth * res.pixelRatio;
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 200,
          width:windowWidth
        },
      });
      expect(image).toMatchImageSnapshot();
    }else{
      const image = await program.screenshot({
        adb: true,
        fullPage: true
      });
      expect(image).toMatchImageSnapshot()
    }
  })

  it("btn-toast-errorIcon-1", async () => {
    const btnToastErrorIconButton = await page.$('#btn-toast-errorIcon')
    await btnToastErrorIconButton.tap()
    await page.waitFor(200)
    if (isAndroid) {
      const res = await page.callMethod('jest_getWindowInfo')
      const windowHeight = res.windowHeight * res.pixelRatio;
      const windowWidth = res.windowWidth * res.pixelRatio;
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 200,
          width:windowWidth
        },
      });
      expect(image).toMatchImageSnapshot();
    }else{
      const image = await program.screenshot({
        adb: true,
        fullPage: true
      });
      expect(image).toMatchImageSnapshot()
    }
  })


  it("btn-toast-loading-1", async () => {
    const btnToastLoadingButton = await page.$('#btn-toast-loading')
    await btnToastLoadingButton.tap()
    await page.waitFor(200)

    const btnToastHideButton = await page.$('#btn-toast-hide')
    await btnToastHideButton.tap()
    await page.waitFor(1000)

    if (isAndroid) {
      const res = await page.callMethod('jest_getWindowInfo')
      const windowHeight = res.windowHeight * res.pixelRatio;
      const windowWidth = res.windowWidth * res.pixelRatio;
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 200,
          width:windowWidth
        },
      });
      expect(image).toMatchImageSnapshot();
    }else{
      const image = await program.screenshot({
        adb: true,
        fullPage: true
      });
      expect(image).toMatchImageSnapshot()
    }
  })


  // it("btn-toast-postion-bottom-1", async () => {
  //   const btnToastButton = await page.$('#btn-toast-postion-bottom')
  //   await btnToastButton.tap()
  //   await page.waitFor(200)
  //   if (isAndroid) {
  //     const windowHeight = uni.getWindowInfo().windowHeight;
  //     const windowWidth = uni.getWindowInfo().windowWidth;
  //     const image = await program.screenshot({
  //       adb: true,
  //       area: {
  //         x: 0,
  //         y: 200,
  //         height: windowHeight,
  //         width:windowWidth
  //       },
  //     });
  //     expect(image).toMatchImageSnapshot();
  //   }else{
  //     const image = await program.screenshot({
  //       adb: true,
  //       fullPage: true
  //     });
  //     expect(image).toMatchImageSnapshot()
  //   }
  // })



});
