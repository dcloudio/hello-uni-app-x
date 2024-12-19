const PAGE_PATH = '/pages/component/global-events/touch-events-case'

describe('touch-events-test', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.startsWith('android')
  const isIOS = platformInfo.startsWith('ios')
  const isMP = platformInfo.startsWith('mp')
  const isWeb = platformInfo.startsWith('web')

  if (
    isWeb ||
    isMP
  ) {
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


  it('touch-event-preventDefault', async () => {

    let x = 25
    let y = 150

    // 滑动事件
    await program.swipe({
      startPoint: {x: x, y: y},
      endPoint: {x: x+200,y: y},
      duration: 300
    })

    await page.waitFor(1500);
    const ret = await page.callMethod('isPassTest1')
    expect(ret).toBe(true)
  })

  it('touch-event-stopPropagation', async () => {

    const ret = await page.callMethod('isPassTest2')
    expect(ret).toBe(true)
  })

})
