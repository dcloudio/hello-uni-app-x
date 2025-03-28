const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')

describe('component-native-nested-scroll-header', () => {
  if (isMP) {
  	it('skip mp', () => {
  		expect(1).toBe(1)
  	})
  	return
  }

  if (process.env.uniTestPlatformInfo.indexOf('web') > -1 || process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true') {
    it('dummyTest', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    //打开lnested-scroll-header测试页
    page = await program.reLaunch('/pages/component/nested-scroll-header/nested-scroll-header')
    await page.waitFor(600)
  })


  it('check_nested-scroll-header', async () => {
    await page.waitFor(1000)
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
  })
})
