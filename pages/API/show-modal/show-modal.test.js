describe('API-loading', () => {

  let page;
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isMP = platformInfo.startsWith('mp')
  const isApp = process.env.UNI_OS_NAME === "android" || process.env.UNI_OS_NAME === "ios";

  if(isMP) {
    // 微信小程序截图无法截到弹框
    it('not support', () => {
      expect(1).toBe(1)
    })
    return
  }

  if (
    platformInfo.indexOf('15.5') != -1 ||
    platformInfo.indexOf('14.5') != -1 ||
    platformInfo.indexOf('13.7') != -1 ||
    platformInfo.indexOf('12.4') != -1
  ) {
    // TODO: 排查 ios 不兼容版本 测试异常原因
    it('ios 15.5 14.5 13.7 12.4 测试异常', () => {
      expect(1).toBe(1)
    })
    return
  }

  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/show-modal/show-modal')
    await page.waitFor('view');

  });


  it("onload-modal-test", async () => {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
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

    if (isApp) {
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
      expect(image).toSaveImageSnapshot();
    }else{
      const image = await program.screenshot({
        deviceShot: true,
        fullPage: true
      });
      expect(image).toSaveImageSnapshot()
    }

  })

});
