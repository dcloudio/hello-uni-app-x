const PAGE_PATH = '/pages/API/create-selector-query/create-selector-query-onScroll'

describe('create-selector-query-onScroll', () => {

  // 先屏蔽 web 平台
  if (
    process.env.uniTestPlatformInfo.startsWith('web') ||
    process.env.uniTestPlatformInfo.startsWith('mp')
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


  it('test-createSelectorQuery-onScroll', async () => {

    let x = 100
    let y = 250
    // 滑动事件
    await program.swipe({
      startPoint: {x: x, y: y},
      endPoint: {x: x,y: y-100},
      duration: 300
    })

    await page.waitFor(600);
    const ret = await page.data('ret')
    expect(ret).toBe(true)
  })
})
