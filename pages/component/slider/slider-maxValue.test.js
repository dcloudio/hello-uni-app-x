const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')

const PAGE_PATH = '/pages/component/slider/slider-maxValue'

describe('touch-events-test', () => {

  if (isAndroid || isWeb || isMP || process.env.UNI_TEST_DEVICES_DIRECTION == 'landscape') {
    it('not support', () => {
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
    let x = iconRect.x + 25
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

  it('test-slider-click', async () => {

    let iconRect = await page.data('sliderRect')
    let x = iconRect.x + 100
    let y = iconRect.y + iconRect.height / 2.0

    // 点击事件
    await program.tap(
      {x: x, y: y}
    )

    await page.waitFor(600);
    const ret = await page.data('sliderValue')
    expect(ret).toBeLessThan(10)
  })
})
