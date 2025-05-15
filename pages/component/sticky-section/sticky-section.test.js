const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isHarmony = platformInfo.startsWith('harmony')
const isWeb = platformInfo.startsWith('web')
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

describe('component-native-sticky-section', () => {
  if (isMP || isHarmony) {
  	it('not support', () => {
  		expect(1).toBe(1)
  	})
  	return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/sticky-section/sticky-section')
    // harmony querySelector('sticky-section') 取不到
    await page.waitFor('sticky-section')
  })

  it('check_delete_and_refresher', async () => {
    await page.callMethod('deleteSection')
    await page.waitFor(400)
    await page.setData({
      refresherTriggered: true
    })
    await page.waitFor(500)
    await page.setData({
      refresherTriggered: false
    })
    await page.waitFor(2000)
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
  })

  //检测吸顶上推效果
  it('check_sticky_section', async () => {
    await page.waitFor(async () => {
      return await page.data('isReady') === true;
    });
    page.waitFor(600)
    await page.callMethod('listViewScrollByY', 1000)
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
  })

  if (isWeb || isAppWebView || isHarmony) {
    return
  }

  it('check_goto_sticky_header', async () => {
    //滚动回顶部
    await page.callMethod('toTop')
    page.waitFor(100)
    await page.setData({
      scrolling: 'true'
    })
    if (!isAppWebView) {
      //跳转到id为C的StickyHeader位置
      await page.callMethod('gotoStickyHeader', 'C')
    }
    await page.waitFor(async () => {
      return await page.data('scrolling') === false;
    });
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
  })
})
