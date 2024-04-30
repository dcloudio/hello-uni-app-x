describe('component-native-sticky-header', () => {
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
      if (process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('android')) {
        offsetY = `${windowInfo.statusBarHeight + 44}`
      }
      if (process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('ios')) {
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
