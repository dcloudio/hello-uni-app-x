const PAGE_PATH = '/pages/component/general-event/general-event'

describe('event trigger sequence', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.startsWith('android')
  let page
  let el
  beforeAll(async () => {
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
    el = await page.$('.target')
  })

  it('touch', async () => {
    if (process.env.uniTestPlatformInfo.startsWith('android') && !process.env.UNI_AUTOMATOR_APP_WEBVIEW) {
      await el.touchstart({
        touches: [{
          identifier: 1,
          pageX: 100,
          pageY: 100,
        }, ],
        changedTouches: [{
          identifier: 1,
          pageX: 100,
          pageY: 100,
        }, ],
      })
      await el.touchmove({
        touches: [{
          identifier: 1,
          pageX: 100,
          pageY: 100,
        }, ],
        changedTouches: [{
          identifier: 1,
          pageX: 101,
          pageY: 101,
        }, ],
      })
      await el.touchend({
        touches: [],
        changedTouches: [{
          identifier: 1,
          pageX: 101,
          pageY: 101,
        }, ],
      })
      const data = await page.data()
      expect(data.onTouchStartTime).toBeLessThanOrEqual(data.onTouchMoveTime);
      expect(data.onTouchMoveTime).toBeLessThanOrEqual(data.onTouchEndTime);
    }
  })

  it('click', async () => {
    await el.tap()
    const data = await page.data()
    expect(data.onTapTime).toBeLessThanOrEqual(data.onClickTime)
  })

  it('longPress', async () => {
    if (process.env.uniTestPlatformInfo.startsWith('android') && !process.env.UNI_AUTOMATOR_APP_WEBVIEW) {
      await el.longpress()
      const longPressTouchTargetIdentifier = isAndroid ? '1.0' : '1'
      const longPressTouchTargetValue = isAndroid ? '0.0' : '0'
      const longPressTouchIdentifier = await page.$('#long-press-touch-identifier')
      expect(await longPressTouchIdentifier.text()).toBe(longPressTouchTargetIdentifier)
      const longPressTouchPageX = await page.$('#long-press-touch-page-x')
      expect(await longPressTouchPageX.text()).toBe(longPressTouchTargetValue)
      const longPressTouchPageY = await page.$('#long-press-touch-page-y')
      expect(await longPressTouchPageY.text()).toBe(longPressTouchTargetValue)
      const longPressTouchClientX = await page.$('#long-press-touch-client-x')
      expect(await longPressTouchClientX.text()).toBe(longPressTouchTargetValue)
      const longPressTouchClientY = await page.$('#long-press-touch-client-y')
      expect(await longPressTouchClientY.text()).toBe(longPressTouchTargetValue)
      const longPressTouchScreenX = await page.$('#long-press-touch-screen-x')
      expect(await longPressTouchScreenX.text()).toBe(longPressTouchTargetValue)
      const longPressTouchScreenY = await page.$('#long-press-touch-screen-y')
      expect(await longPressTouchScreenY.text()).toBe(longPressTouchTargetValue)
      const longPressChangedTouchIdentifier = await page.$('#long-press-changed-touch-identifier')
      expect(await longPressChangedTouchIdentifier.text()).toBe(longPressTouchTargetIdentifier)
      const longPressChangedTouchPageX = await page.$('#long-press-changed-touch-page-x')
      expect(await longPressChangedTouchPageX.text()).toBe(longPressTouchTargetValue)
      const longPressChangedTouchPageY = await page.$('#long-press-changed-touch-page-y')
      expect(await longPressChangedTouchPageY.text()).toBe(longPressTouchTargetValue)
      const longPressChangedTouchClientX = await page.$('#long-press-changed-touch-client-x')
      expect(await longPressChangedTouchClientX.text()).toBe(longPressTouchTargetValue)
      const longPressChangedTouchClientY = await page.$('#long-press-changed-touch-client-y')
      expect(await longPressChangedTouchClientY.text()).toBe(longPressTouchTargetValue)
      const longPressChangedTouchScreenX = await page.$('#long-press-changed-touch-screen-x')
      expect(await longPressChangedTouchScreenX.text()).toBe(longPressTouchTargetValue)
      const longPressChangedTouchScreenY = await page.$('#long-press-changed-touch-screen-y')
      expect(await longPressChangedTouchScreenY.text()).toBe(longPressTouchTargetValue)
    }
  })
})
