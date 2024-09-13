const PAGE_PATH = '/pages/component/swiper/swiper'

describe('swiper-touch-test', () => {

  // 屏蔽 web 平台
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    it('other platform', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(1500);
  })


  it('swiper-touch-test', async () => {

    let x = await page.data('swipeX')
    let y = await page.data('swipeY')

    await program.swipe({
      startPoint: {x: x,y: y},
      endPoint: {x: 10,y: y},
      duration: 200
    })

    await page.waitFor(1000)
    let val = await page.data('currentValChange')
    console.log(val)
    expect(val).toEqual(1)
  })

})
