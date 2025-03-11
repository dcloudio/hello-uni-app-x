const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')

describe('component-native-sticky-header', () => {
  if (isMP || isHarmony) {
  	it('not support', () => {
  		expect(1).toBe(1)
  	})
  	return
  }

  let page
  async function getWindowInfo() {
    const windowInfoPage = await program.reLaunch('/pages/API/get-window-info/get-window-info')
    await windowInfoPage.waitFor(600);
    return await windowInfoPage.callMethod('jest_getWindowInfo')
  }
  const screenshotParams = { fullPage: true }
  let windowInfo

  beforeAll(async () => {
    if (!process.env.UNI_AUTOMATOR_APP_WEBVIEW) {
      screenshotParams.fullPage = false
      windowInfo = await getWindowInfo()
      let offsetY = '0'
      if (isAndroid) {
        offsetY = `${windowInfo.statusBarHeight + 44}`
      }
      if (isIos) {
        offsetY = `${windowInfo.safeAreaInsets.top + 44}`
      }
      screenshotParams.offsetY = offsetY
    }
    page = await program.reLaunch('/pages/component/sticky-header/sticky-header')
    await page.waitFor('sticky-header')
  })

  //检测吸顶效果
  it('check_sticky_header', async () => {
    await page.callMethod('confirm_scroll_top_input', 600)
    const image = await program.screenshot(screenshotParams);
    expect(image).toSaveImageSnapshot();
  })
})
