const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isHarmony = platformInfo.startsWith('harmony')
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

describe('component-native-sticky-header', () => {
  if (isMP || isHarmony) {
  	it('not support', () => {
  		expect(1).toBe(1)
  	})
  	return
  }

  let page
  const screenshotParams = { }

  beforeAll(async () => {
    if (!isAppWebView) {
      const windowInfo = await program.callUniMethod('getWindowInfo');
      screenshotParams.offsetY = `${windowInfo.safeAreaInsets.top + 44}`
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
  //测试验证issues 16216 问题
  it('check_sticky_header_position', async () => {
    await page.callMethod('confirm_scroll_top_input', 300)
    await page.waitFor(600);
    await page.callMethod('clearListData')
    await page.waitFor(600);
    const image = await program.screenshot(screenshotParams);
    expect(image).toSaveImageSnapshot();
  })
})
