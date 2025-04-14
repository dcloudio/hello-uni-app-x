const PAGE_PATH = '/pages/component/swiper/swiper'

describe('swiper-touch-test', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.startsWith('android')
  const isWeb = platformInfo.startsWith('web')
  const isMP = platformInfo.startsWith('mp')
  // 屏蔽 web & 小程序，不支持 program.swipe
  if (isWeb || isMP) {
    it('other platform', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view');
  })


  it('滑动切换 swiper', async () => {
    let x = await page.data('swipeX')
    let y = await page.data('swipeY')

    await program.swipe({
      startPoint: {x, y},
      endPoint: {x: 10, y},
      duration: 200
    })

    await page.waitFor(1000)
    let val = await page.data('currentValChange')
    expect(val).toEqual(1)
  })

})
