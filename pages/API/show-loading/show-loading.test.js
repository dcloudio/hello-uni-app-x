const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isAndroid || isIos || isHarmony
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

const PAGE_PATH = '/pages/API/show-loading/show-loading'

describe('API-loading', () => {
  let deviceShotOptions = {}
  let page;
  beforeAll(async () => {
    const windowInfo = await program.callUniMethod('getWindowInfo');
    let topSafeArea = windowInfo.safeAreaInsets.top;
    if (isAppWebView) {
      if (isIos) {
        topSafeArea = 59
      } else if (isAndroid) {
        topSafeArea = 24
        if (platformInfo.startsWith('android 5')) {
          topSafeArea = 25
        } else if (platformInfo.startsWith('android 11')) {
          topSafeArea = 52
        } else if (platformInfo.startsWith('android 13') || platformInfo.startsWith('android 15')) {
          topSafeArea = 49
        }
      } else if (isHarmony) {
        // mate 60
        // topSafeArea = 33
        // mate 60 pro
        topSafeArea = 38
      }
    }
    deviceShotOptions = {
      deviceShot: true,
      area: {
        x: 0,
        y: topSafeArea + 44,
      },
    };

    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view');
  });

  async function toScreenshot(imgName) {
    const image = await program.screenshot(deviceShotOptions);
    expect(image).toSaveImageSnapshot({customSnapshotIdentifier() {
      return imgName
    }})
    await page.waitFor(500);
  }

  it('onload-loading-test', async () => {
    await toScreenshot('loading-onload')
  })

  it('show-loading-with-different-titles', async () => {
    const radios = await page.$$('.radio')
    for (let i = 0; i < radios.length; i++) {
      await radios[i].tap()
      await page.waitFor(100)
      await page.callMethod('showLoading')
      await page.waitFor(300)
      const radioText = await radios[i].text()
      await toScreenshot(`loading-title-${radioText}`)
    }
  })

  it('manual-hide-loading', async () => {
    await page.callMethod('showLoading')
    await page.waitFor(100)
    await toScreenshot('loading-manual-show')
    await page.callMethod('hideLoading')
    await page.waitFor(300)
    await toScreenshot('loading-manual-hide')
  })

});
