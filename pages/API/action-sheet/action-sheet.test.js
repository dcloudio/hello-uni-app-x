// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('API-loading', () => {

  let page;
  const isAndroid = process.env.UNI_OS_NAME === "android";

  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/action-sheet/action-sheet')
    await page.waitFor(500);
  });


  it("onload-action-sheet-test", async () => {
    if (isAndroid) {

      const res = await page.callMethod('jest_getWindowInfo')
      const windowHeight = res.windowHeight * res.pixelRatio;
      const windowWidth = res.windowWidth * res.pixelRatio;
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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


  it("action-sheet-test-current-0", async () => {

    const res = await page.callMethod('jest_getWindowInfo')
    const windowHeight = res.windowHeight * res.pixelRatio;
    const windowWidth = res.windowWidth * res.pixelRatio;


    await page.setData({
      showErrorToast:false,
      current: 0,
      itemContentLarge:false,
      itemNumLargeSelect:false,
      itemColorCustom:false,
    })

    const btnToastDurationButton = await page.$('#btn-action-sheet-show')
    await btnToastDurationButton.tap()
    await page.waitFor(500);

    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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


  it("action-sheet-test-current-0-largeContent", async () => {

    const res = await page.callMethod('jest_getWindowInfo')
    const windowHeight = res.windowHeight * res.pixelRatio;
    const windowWidth = res.windowWidth * res.pixelRatio;


    await page.setData({
      showErrorToast:false,
      current: 0,
      itemContentLarge:true,
      itemNumLargeSelect:false,
      itemColorCustom:false,
    })

    const btnToastDurationButton = await page.$('#btn-action-sheet-show')
    await btnToastDurationButton.tap()
    await page.waitFor(500);

    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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


  it("action-sheet-test-current-0-largeContent-largeNum", async () => {

    const res = await page.callMethod('jest_getWindowInfo')
    const windowHeight = res.windowHeight * res.pixelRatio;
    const windowWidth = res.windowWidth * res.pixelRatio;

    await page.setData({
      showErrorToast:false,
      current: 0,
      itemContentLarge:true,
      itemNumLargeSelect:true,
      itemColorCustom:false,
    })

    const btnToastDurationButton = await page.$('#btn-action-sheet-show')
    await btnToastDurationButton.tap()
    await page.waitFor(500);

    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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


  it("action-sheet-test-current-0-largeContent-largeNum-customColor", async () => {

    const res = await page.callMethod('jest_getWindowInfo')
    const windowHeight = res.windowHeight * res.pixelRatio;
    const windowWidth = res.windowWidth * res.pixelRatio;

    await page.setData({
      showErrorToast:false,
      current: 0,
      itemContentLarge:true,
      itemNumLargeSelect:true,
      itemColorCustom:true,
    })

    const btnToastDurationButton = await page.$('#btn-action-sheet-show')
    await btnToastDurationButton.tap()
    await page.waitFor(500);

    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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



  it("action-sheet-test-current-1", async () => {

    const res = await page.callMethod('jest_getWindowInfo')
    const windowHeight = res.windowHeight * res.pixelRatio;
    const windowWidth = res.windowWidth * res.pixelRatio;


    await page.setData({
      current: 1,
      itemContentLarge:false,
      itemNumLargeSelect:false,
      itemColorCustom:false,
    })

    const btnToastDurationButton = await page.$('#btn-action-sheet-show')
    await btnToastDurationButton.tap()
    await page.waitFor(500);

    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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



  it("action-sheet-test-current-1-largeContent", async () => {

    const res = await page.callMethod('jest_getWindowInfo')
    const windowHeight = res.windowHeight * res.pixelRatio;
    const windowWidth = res.windowWidth * res.pixelRatio;


    await page.setData({
      showErrorToast:false,
      current: 1,
      itemContentLarge:true,
      itemNumLargeSelect:false,
      itemColorCustom:false,
    })

    const btnToastDurationButton = await page.$('#btn-action-sheet-show')
    await btnToastDurationButton.tap()
    await page.waitFor(500);

    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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


  it("action-sheet-test-current-1-largeContent-largeNum", async () => {

    const res = await page.callMethod('jest_getWindowInfo')
    const windowHeight = res.windowHeight * res.pixelRatio;
    const windowWidth = res.windowWidth * res.pixelRatio;

    await page.setData({
      showErrorToast:false,
      current: 1,
      itemContentLarge:true,
      itemNumLargeSelect:true,
      itemColorCustom:false,
    })

    const btnToastDurationButton = await page.$('#btn-action-sheet-show')
    await btnToastDurationButton.tap()
    await page.waitFor(500);

    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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


  it("action-sheet-test-current-1-largeContent-largeNum-customColor", async () => {

    const res = await page.callMethod('jest_getWindowInfo')
    const windowHeight = res.windowHeight * res.pixelRatio;
    const windowWidth = res.windowWidth * res.pixelRatio;

    await page.setData({
      showErrorToast:false,
      current: 1,
      itemContentLarge:true,
      itemNumLargeSelect:true,
      itemColorCustom:true,
    })

    const btnToastDurationButton = await page.$('#btn-action-sheet-show')
    await btnToastDurationButton.tap()
    await page.waitFor(500);

    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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



  it("action-sheet-test-current-2", async () => {

    const res = await page.callMethod('jest_getWindowInfo')
    const windowHeight = res.windowHeight * res.pixelRatio;
    const windowWidth = res.windowWidth * res.pixelRatio;


    await page.setData({
      current: 2,
      itemContentLarge:false,
      itemNumLargeSelect:false,
      itemColorCustom:false,
    })

    const btnToastDurationButton = await page.$('#btn-action-sheet-show')
    await btnToastDurationButton.tap()
    await page.waitFor(500);

    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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


  it("action-sheet-test-current-2-largeContent", async () => {

    const res = await page.callMethod('jest_getWindowInfo')
    const windowHeight = res.windowHeight * res.pixelRatio;
    const windowWidth = res.windowWidth * res.pixelRatio;


    await page.setData({
      showErrorToast:false,
      current: 2,
      itemContentLarge:true,
      itemNumLargeSelect:false,
      itemColorCustom:false,
    })

    const btnToastDurationButton = await page.$('#btn-action-sheet-show')
    await btnToastDurationButton.tap()
    await page.waitFor(500);

    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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


  it("action-sheet-test-current-2-largeContent-largeNum", async () => {

    const res = await page.callMethod('jest_getWindowInfo')
    const windowHeight = res.windowHeight * res.pixelRatio;
    const windowWidth = res.windowWidth * res.pixelRatio;

    await page.setData({
      showErrorToast:false,
      current: 2,
      itemContentLarge:true,
      itemNumLargeSelect:true,
      itemColorCustom:false,
    })

    const btnToastDurationButton = await page.$('#btn-action-sheet-show')
    await btnToastDurationButton.tap()
    await page.waitFor(500);

    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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


  it("action-sheet-test-current-2-largeContent-largeNum-customColor", async () => {

    const res = await page.callMethod('jest_getWindowInfo')
    const windowHeight = res.windowHeight * res.pixelRatio;
    const windowWidth = res.windowWidth * res.pixelRatio;

    await page.setData({
      showErrorToast:false,
      current: 2,
      itemContentLarge:true,
      itemNumLargeSelect:true,
      itemColorCustom:true,
    })

    const btnToastDurationButton = await page.$('#btn-action-sheet-show')
    await btnToastDurationButton.tap()
    await page.waitFor(500);

    if (isAndroid) {
      const image = await program.screenshot({
        adb: true,
        area: {
          x: 0,
          y: 200,
          height: windowHeight - 100,
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



});
