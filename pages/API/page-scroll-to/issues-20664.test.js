const PAGE_PATH = '/pages/API/page-scroll-to/page-scroll-to'

const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIOS = platformInfo.startsWith('ios')
const isMP = platformInfo.startsWith('mp')
const isWeb = platformInfo.startsWith('web')

describe('page-scroll-to', () => {

  if(isMP || isWeb) {
    // 不支持scrollend事件
    it('not support', async() => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('issues-20664', async () => {

    await page.callMethod('scrollTo')
    await page.waitFor(300)

    var scrollTop = await page.scrollTop()
    // 设备精度问题，允许上下浮动 1px
    expect(scrollTop > 99 && scrollTop < 101).toBe(true)


    await program.swipe({
      startPoint: {x: 100,y: 200},
      endPoint: {x: 100,y: 300},
      duration: 100
    })

    await page.waitFor(500)

    await page.callMethod('scrollTo')
    await page.waitFor(300)

    scrollTop = await page.scrollTop()

    console.log("scrollTop: ", scrollTop)

    // 设备精度问题，允许上下浮动 1px
    expect(scrollTop > 99 && scrollTop < 101).toBe(true)
  })
})
