const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isAndroid || isIos || isHarmony
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')
const isAppWebview = !!process.env.UNI_AUTOMATOR_APP_WEBVIEW


describe('showActionSheet', () => {
  let topSafeArea = 0;
  let page;
  let screenShotOptions = {};
  async function showActionSheet(page) {
    const btn = await page.$('#btn-action-sheet-show')
    await btn.tap()
    await page.waitFor(1000);
  }

  async function screenshot() {
    const image = await program.screenshot(screenShotOptions);
    expect(image).toSaveImageSnapshot();
  }

  beforeAll(async () => {
    const windowInfo = await program.callUniMethod('getWindowInfo');
    // android 端 app-webview 时顶部安全区高度为0，所以统一设置为60
    topSafeArea = isAndroid ? 60 : windowInfo.safeAreaInsets.top;

    page = await program.reLaunch('/pages/API/show-action-sheet/show-action-sheet')
    await page.waitFor('view');
    if (isApp && !isAppWebview) {
      if(isAndroid || isIos){
        await page.callMethod('setThemeAuto')
      }

      screenShotOptions = {
        deviceShot: true,
        area: {
          x: 0,
          y: topSafeArea + 44
        },
      }
    } else if (isWeb){
      screenShotOptions = {
        fullPage: true
      }
    }
  });

  it("onload showActionSheet", async () => {
    await page.waitFor(isWeb ? 3000 : 1000);
    await screenshot();
  })

  it("有标题", async () => {
    await page.setData({
      showErrorToast:false,
      current: 0,
    })

    await showActionSheet(page);

    await screenshot();
  })

  it("有标题 长内容", async () => {
    await page.setData({
      itemContentLarge:true,
    })

    await showActionSheet(page);

    await screenshot();


  })

  it("有标题 超过6个item", async () => {
    await page.setData({
      itemContentLarge:false,
      itemNumLargeSelect:true,
    })

    await showActionSheet(page);

    await screenshot();


  })

  it("有标题 长内容 自定义 itemColor", async () => {
    await page.setData({
      itemContentLarge: true,
      itemNumLargeSelect: false,
      itemColorCustom: true,
    })

    await showActionSheet(page);

    await screenshot();
  })

  it("无标题", async () => {
    await page.setData({
      current: 1,
      itemContentLarge:false,
      itemColorCustom:false,
    })

    await showActionSheet(page);

    await screenshot();
  })

  it("长标题", async () => {
    await page.setData({
      current: 2,
    })

    await showActionSheet(page);

    await screenshot();
  })
  if (!isMP) {
    it("custom titleColor cancelText cancelColor backgroundColor", async () => {
      await page.setData({
        titleColorCustom: true,
        cancelTextCustom: true,
        cancelColorCustom: true,
        backgroundColorCustom: true,
      })
      await showActionSheet(page);
      await page.waitFor(1000)
      await screenshot();
    })
  }
  it("showActionSheet 并在回调中再次 showActionSheet", async () => {
    await page.callMethod('showActionSheetAndShowAgainInCallback')
    await page.waitFor(1000);
    await screenshot();
    if (isApp) {
      await program.tap({
        x: 200,
        y: 700,
      })
    } else if (isWeb) {
      await page.callMethod('closeWebActionSheet')
    }
    await page.waitFor(1000);
    await screenshot();
  })
  if (!isMP) {
    it("hideActionSheet", async () => {
      await page.callMethod('hideActionSheet')
      await page.waitFor(1000);

      await screenshot();
    })
  }
  afterAll(async () => {
    if(isApp && !isAppWebview){
      await page.callMethod('resetTheme')
    }
  });
});
