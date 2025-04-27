const PAGE_PATH = '/pages/component/global-events/touch-events-bubbles'

describe('touch-events-test', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.startsWith('android')
  const isMP = platformInfo.startsWith('mp')
  const isWeb = platformInfo.startsWith('web')
  const isHarmony = platformInfo.startsWith('harmony')

  if (isAndroid || isWeb || isMP || process.env.UNI_TEST_DEVICES_DIRECTION == 'landscape') {
    it('other platform', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500);
  })

  it('touch-event-bubbles-test1', async () => {
    let iconRect = await page.data('iconRect')
    let x = iconRect.x + iconRect.width / 2.0
    let y = iconRect.y + 25

    // 滑动事件
    await program.swipe({
      startPoint: {x: x, y: y},
      endPoint: {x: x,y: y+15},
      duration: 200
    })

    await page.waitFor(1500);
    await page.callMethod('isPassTest1')
    const ret = await page.data('ret1')
    expect(ret).toBe(true)
  })

  it('touch-event-bubbles-test2', async () => {

    let viewEleRect = await page.data('viewEleRect')
    let x = viewEleRect.x + viewEleRect.width / 2.0
    let y = viewEleRect.y + 25

    // 滑动事件
    await program.swipe({
      startPoint: {x: x, y: y},
      endPoint: {x: x,y: y+15},
      duration: 200
    })

    await page.waitFor(1500);
    await page.callMethod('isPassTest2')
    const ret = await page.data('ret2')
    expect(ret).toBe(true)
  })

})
