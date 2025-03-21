const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isIOS = platformInfo.startsWith('ios')
const isAndroid = platformInfo.startsWith('android')
const isHarmony = platformInfo.startsWith('harmony')

describe('component-native-nested-scroll-body', () => {
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
    //打开lnested-scroll-body测试页
    page = await program.reLaunch('/pages/component/nested-scroll-body/nested-scroll-body')
    await page.waitFor(600)
  })

  //检测横向scroll_into_view属性赋值
  it('check_scroll_into_view_left', async () => {
    await page.callMethod('testBodyScrollBy', 400)
    await page.waitFor(300)
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
  })

  if(isIOS || isAndroid || isHarmony){
    it('check_scroll', async () => {
      let lists = []
      for (let i = 0; i < 5; i++) {
        lists.push("item---" + i)
      }

      await page.setData({
        scrollData: lists
      })

      await page.waitFor(300)

      let x = 100
      let y = 450

      // 滑动事件
      await program.swipe({
        startPoint: {x: x, y: y},
        endPoint: {x: x,y: 0},
        duration: 300
      })

      await page.waitFor(300)

      y = 200
      await program.swipe({
        startPoint: {x: x, y: y},
        endPoint: {x: x,y: y + 100},
        duration: 300
      })

      await page.waitFor(300)

      let scrollTop = await page.data('testScrollTop')
      expect(scrollTop).toBeLessThan(200)
    })
  }
})
