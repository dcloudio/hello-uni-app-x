const PAGE_PATH = '/pages/component/slider/slider-maxValue'

describe('touch-events-test', () => {

  // 先屏蔽 android 及 web 平台
  if (process.env.uniTestPlatformInfo.startsWith('android') || process.env.uniTestPlatformInfo.startsWith('web')) {
    it('other platform', () => {
      expect(1).toBe(1)
    })
    return
  }

  if (process.env.UNI_TEST_DEVICES_DIRECTION == 'landscape') {
    it('跳过横屏模式', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500);
  })


  it('test-slider-max-value', async () => {

    let iconRect = await page.data('sliderRect')
    let x = iconRect.x + 15
    let y = iconRect.y + 15

    // 滑动事件
    await program.swipe({
      startPoint: {x: x, y: y},
      endPoint: {x: x+1000,y: y},
      duration: 300
    })

    await page.waitFor(600);
    const ret = await page.data('sliderValue')
    expect(ret).toBe(10)
  })
})
