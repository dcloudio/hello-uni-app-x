jest.setTimeout(30000)

const HOME_PAGE_PATH = '/pages/tabBar/component'
const PAGE_PATH = '/pages/API/get-current-pages/get-current-pages?test=123'
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')

describe('getCurrentPages', () => {
  let page
  const deviceScreenshotParams = {
    deviceShot: true,
    area: {
      x: 0,
      y: 0,
    }
  }
  it('getCurrentPages', async () => {
    // web 端等待应用首页加载完成
    if (process.env.uniTestPlatformInfo.startsWith('web')) {
      const waitTime = process.env.uniTestPlatformInfo.includes('safari') ?
        5000 :
        3000
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, waitTime)
      })
    }
    page = await program.switchTab(HOME_PAGE_PATH)
    await page.waitFor(1000)
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(1000)
    await page.callMethod('_getCurrentPages')
    await page.waitFor(200)
    const data = await page.data()
    expect(data.checked).toBe(true)
  })

  if (isMP) {
    return
  }
  it('page-style', async () => {
    const windowInfo = await program.callUniMethod('getWindowInfo');
    deviceScreenshotParams.area.y = windowInfo.safeAreaInsets.top + 44;

    await page.callMethod('getPageStyle')
    await page.waitFor(200)
    const isEnablePullDownRefresh1 = await page.data('currentPageStyle.enablePullDownRefresh')
    expect(isEnablePullDownRefresh1).toBe(true)

    // setPageStyle
    await page.callMethod('setPageStyle', {
      enablePullDownRefresh: false
    })
    await page.waitFor(200)

    await page.callMethod('getPageStyle')
    await page.waitFor(200)
    const isEnablePullDownRefresh2 = await page.data('currentPageStyle.enablePullDownRefresh')
    expect(isEnablePullDownRefresh2).toBe(false)

    await page.callMethod('startPullDownRefresh')
    await page.waitFor(500)
    const image2 = await program.screenshot({fullPage: true});
    expect(image2).toSaveImageSnapshot({customSnapshotIdentifier() {
      return 'get-current-pages-test-js-get-current-pages-page-style-before-set-page-style'
    }});

    await page.waitFor(3500)
    await page.callMethod('setPageStyle', {
      enablePullDownRefresh: true
    })
    await page.waitFor(200)
    await page.callMethod('startPullDownRefresh')
    await page.waitFor(500)
    const image3 = await program.screenshot({fullPage: true});
    expect(image3).toSaveImageSnapshot({customSnapshotIdentifier() {
      return 'get-current-pages-test-js-get-current-pages-page-style-after-set-page-style'
    }});

    // setPageStyle
    await page.callMethod('setPageStyle', {
      androidThreeButtonNavigationBackgroundColor: 'aqua'
    });
    await page.waitFor(2000);
    const image4 = await program.screenshot(deviceScreenshotParams);
    expect(image4).toSaveImageSnapshot({customSnapshotIdentifier() {
      return 'get-current-pages-test-androidThreeButtonNavigationBackgroundColor'
    }});

    await page.callMethod('setPageStyle', {
      androidThreeButtonNavigationStyle: 'black'
    });
    await page.waitFor(2000);
    const image5 = await program.screenshot(deviceScreenshotParams);
    expect(image5).toSaveImageSnapshot({customSnapshotIdentifier() {
      return 'get-current-pages-test-androidThreeButtonNavigationStyle'
    }});

    await page.callMethod('setPageStyle', {
      androidThreeButtonNavigationTranslucent: true
    });
    await page.waitFor(2000);
    const image6 = await program.screenshot(deviceScreenshotParams);
    expect(image6).toSaveImageSnapshot({customSnapshotIdentifier() {
      return 'get-current-pages-test-androidThreeButtonNavigationTranslucent'
    }});

    await page.callMethod('setPageStyle', {
      hideBottomNavigationIndicator: true,
      hideStatusBar: true
    })
    await page.waitFor(2000);
    const image7 = await program.screenshot(deviceScreenshotParams);
    expect(image7).toSaveImageSnapshot({customSnapshotIdentifier() {
      return 'get-current-pages-test-hideStatusBar-hideBottomNavigationIndicator'
    }});
  })
  it('$page', async () => {
    await page.setData({testing: true})
    const res = await page.callMethod('check$page')
    expect(res).toBe(true)
  })
  it('getParentPage', async () => {
    const res = await page.callMethod('checkGetParentPage')
    expect(res).toBe(true)
  })
  it('getDialogPages', async () => {
    const res = await page.callMethod('checkGetDialogPages')
    expect(res).toBe(true)
  })
  it('getElementById', async () => {
    const res = await page.callMethod('checkGetElementById')
    expect(res).toBe(true)
  })
  it('getAndroidView', async () => {
    const res = await page.callMethod('checkGetAndroidView')
    expect(res).toBe(isAndroid)
  })
  it('getIOSView', async () => {
    const res = await page.callMethod('checkGetIOSView')
    expect(res).toBe(false)
  })
  it('getHTMLElement', async () => {
    const res = await page.callMethod('checkGetHTMLElement')
    expect(res).toBe(isWeb)
  })

  if(isAndroid) {
    it('getAndroidActivity', async () => {
      const res = await page.callMethod('checkGetAndroidActivity')
      expect(res).toBe(true)
    })
  }
})
