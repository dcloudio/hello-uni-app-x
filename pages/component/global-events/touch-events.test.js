const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isMP = platformInfo.startsWith('mp')
const isWeb = platformInfo.startsWith('web')

const PAGE_PATH = '/pages/component/global-events/touch-events'

describe('touch-events-test', () => {
  if (isAndroid || isMP || isWeb || process.env.UNI_TEST_DEVICES_DIRECTION == 'landscape') {
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
