const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIOS = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isAndroid || isIOS || isHarmony
describe('API-loading', () => {
  let page;
  const screeShotParams = {
    deviceShot: true,
    fullPage: true
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/show-loading/show-loading')
    await page.waitFor('view');
    if (isApp) {
      const windowInfo = await program.callUniMethod('getWindowInfo');
      const topSafeArea = isAndroid ? 60 : windowInfo.safeAreaInsets.top;
      screeShotParams.area = {
        x: 0,
        y: topSafeArea + 44
      }
    }
  });

  async function toScreenshot(imgName) {
    const image = await program.screenshot(screeShotParams);
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