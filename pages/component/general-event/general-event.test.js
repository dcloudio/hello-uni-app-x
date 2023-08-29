const PAGE_PATH = '/pages/component/general-event/general-event'

describe('event trigger sequence', () => {
  let page
  let el
  beforeAll(async () => {
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(1000)
    el = await page.$('.target')
  })

  it('touch', async () => {
    await el.touchstart({
      touches: [
        {
          identifier: 1,
          pageX: 100,
          pageY: 100,
        },
      ],
      changedTouches: [
        {
          identifier: 1,
          pageX: 100,
          pageY: 100,
        },
      ],
    })
    await el.touchmove({
      touches: [
        {
          identifier: 1,
          pageX: 100,
          pageY: 100,
        },
      ],
      changedTouches: [
        {
          identifier: 1,
          pageX: 101,
          pageY: 101,
        },
      ],
    })
    await el.touchend({
      touches: [],
      changedTouches: [
        {
          identifier: 1,
          pageX: 101,
          pageY: 101,
        },
      ],
    })
    const data = await page.data()
    expect(data.onTouchStartTime).toBeLessThan(data.onTouchMoveTime)
    expect(data.onTouchMoveTime).toBeLessThan(data.onTouchEndTime)
  })

  it('click', async () => {
    await el.tap()
    const data = await page.data()
    expect(data.onTapTime).toBeLessThanOrEqual(data.onClickTime)
  })

  it('longPress', async () => {
    await el.longpress()
    const data = await page.data()
    expect(data.onLongPressTime).toBeGreaterThan(0)
  })
})
