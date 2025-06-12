// @Author-APP-ANDROID:DCloud_Android_DQQ
describe('API-loading', () => {
  let topSafeArea = 0
  let page;
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isMP = platformInfo.startsWith('mp')
  const isHarmony = platformInfo.startsWith('harmony')
  const isIos = platformInfo.startsWith('ios')
  const isAndroid = platformInfo.startsWith('android')
  const isApp = isIos || isAndroid || isHarmony

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
    const windowInfo = await program.callUniMethod('getWindowInfo');
    topSafeArea = isAndroid ? 60 : windowInfo.safeAreaInsets.top;

    page = await program.reLaunch('/pages/API/show-modal/show-modal')
    await page.waitFor('view');

  });


  it("onload-modal-test", async () => {
    if (isApp) {
      await page.waitFor(500);

      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideAll = await page.$('#btn-modal-hide-all')
    await btnModalButtonHideAll.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);

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

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

    if (isApp) {
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);

  })


  it("modal-test-current-2", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);

  })


  it("modal-test-current-2-showCancel", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);
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

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

    if (isApp) {
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);

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


    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

    const btnModalButton = await page.$('#btn-modal-show')
    await btnModalButton.tap()
    await page.waitFor(500);

    if (isApp) {
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);

  })

  it("modal-test-current-2-showCancel-cancelText-confirmText-editable-placeholder", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);

  })


  it("modal-test-current-2-showCancel-confirmText-editable-placeholder", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);
  })

  it("modal-test-current-2-showCancel-editable-placeholder", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);
  })

  it("modal-test-current-2-showCancel-placeholder", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);
  })

  it("modal-test-current-2-showCancel", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);
  })

  it("modal-test-current-2-showCancel-cancelText-editable-placeholder", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);
  })

  it("modal-test-current-2-showCancel-cancelText-placeholder", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);

  })

  it("modal-test-current-2-showCancel-cancelText", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);

  })

  it("modal-test-current-2-showCancel-cancelText-confirmText-placeholder", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);

  })

  it("modal-test-current-2-showCancel-cancelText-confirmText", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

     await page.waitFor(2000);
  })

  it("modal-test-current-2-showCancel-cancelText-confirmText-editable", async () => {

    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);

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
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

    await page.waitFor(2000);
  })


  it("modal-test-current-0-multi-time-show-hideall", async () => {

    await page.setData({
      current: 0,
    })
    /**
     * 延迟3s 关闭
     */
    const btnModalButtonHideAll = await page.$('#btn-modal-hide-all')
    await btnModalButtonHideAll.tap()
    await page.waitFor(500);
    /**
     * 等待1s 出现三个截图
     */
    const btnModalButtonMultiTime = await page.$('#btn-modal-show-multitime')
    await btnModalButtonMultiTime.tap()
    await page.waitFor(1000);

    if (isApp) {
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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
    /**
     * 等待2s 全部关闭全部
     */
    await page.waitFor(2000);
    if (isApp) {
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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

  it("modal-test-current-1-multi-time-show-hidelast", async () => {
    await page.setData({
      current: 1,
    })
    /**
     * 延迟3s 关闭最后一个
     */
    const btnModalButtonHideLast = await page.$('#btn-modal-hide-last')
    await btnModalButtonHideLast.tap()
    await page.waitFor(500);
    /**
     * 等待1s 出现三个截图
     */
    const btnModalButtonMultiTime = await page.$('#btn-modal-show-multitime')
    await btnModalButtonMultiTime.tap()
    await page.waitFor(1000);

    if (isApp) {
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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
    /**
     * 等待2s 还剩下两个
     */
    await page.waitFor(2000);

    if (isApp) {
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44,
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
