// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('API-loading', () => {

  let page;
  const isAndroid = process.env.UNI_OS_NAME === "android";

  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/modal/modal')
    await page.waitFor(200);

  });


  it("onload-modal-test", async () => {
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


  it("modal-test-current-0", async () => {

    await page.setData({
      current: 0,
      showCancelSelect: false,
      cancelTextSelect: false,
      confirmTextSelect: false,
      editableSelect: false,
      placeholderTextSelect: false,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-1", async () => {

    await page.setData({
      current: 1,
      showCancelSelect: false,
      cancelTextSelect: false,
      confirmTextSelect: false,
      editableSelect: false,
      placeholderTextSelect: false,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: false,
      cancelTextSelect: false,
      confirmTextSelect: false,
      editableSelect: false,
      placeholderTextSelect: false,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: false,
      confirmTextSelect: false,
      editableSelect: false,
      placeholderTextSelect: false,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel-cancelText", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: true,
      confirmTextSelect: false,
      editableSelect: false,
      placeholderTextSelect: false,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel-cancelText-confirmText", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: true,
      confirmTextSelect: true,
      editableSelect: false,
      placeholderTextSelect: false,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel-cancelText-confirmText-editable-placeholder", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: true,
      confirmTextSelect: true,
      editableSelect: true,
      placeholderTextSelect: true,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel-confirmText-editable-placeholder", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: false,
      confirmTextSelect: true,
      editableSelect: true,
      placeholderTextSelect: true,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel-editable-placeholder", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: false,
      confirmTextSelect: false,
      editableSelect: true,
      placeholderTextSelect: true,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel-placeholder", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: false,
      confirmTextSelect: false,
      editableSelect: false,
      placeholderTextSelect: true,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: false,
      confirmTextSelect: false,
      editableSelect: false,
      placeholderTextSelect: false,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel-cancelText-editable-placeholder", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: true,
      confirmTextSelect: false,
      editableSelect: true,
      placeholderTextSelect: true,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel-cancelText-placeholder", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: true,
      confirmTextSelect: false,
      editableSelect: false,
      placeholderTextSelect: true,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel-cancelText", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: true,
      confirmTextSelect: false,
      editableSelect: false,
      placeholderTextSelect: false,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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



  it("modal-test-current-2-showCancel-cancelText-confirmText-placeholder", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: true,
      confirmTextSelect: true,
      editableSelect: false,
      placeholderTextSelect: true,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel-cancelText-confirmText", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: true,
      confirmTextSelect: true,
      editableSelect: false,
      placeholderTextSelect: false,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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


  it("modal-test-current-2-showCancel-cancelText-confirmText-editable", async () => {

    await page.setData({
      current: 2,
      showCancelSelect: true,
      cancelTextSelect: true,
      confirmTextSelect: true,
      editableSelect: true,
      placeholderTextSelect: false,
    })

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

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

});
