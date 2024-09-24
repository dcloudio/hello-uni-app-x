const PAGE_PATH = '/pages/component/global-events/touch-events'

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


  it('touchStart-tagName-touchCount', async () => {

    let iconRect = await page.data('iconRect')
    let x = iconRect.x + iconRect.width / 2.0
    let y = iconRect.y + iconRect.height / 2.0

    // 点击图片
    await program.tap({
      x: x,
      y: y,
      duration: 100
    })

    await page.waitFor(1500);
    const touchTargets = await page.data('touchTargets')
    const touchTargetsCount = await page.data('touchTargetsCount')

    console.log('touchTargets', touchTargets)
    console.log('touchTargetsCount', touchTargetsCount)

    expect(touchTargets).toBe("IMAGEIMAGEIMAGEVIEW")
    expect(touchTargetsCount).toBe(2)
  })

})
