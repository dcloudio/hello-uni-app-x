const PAGE_PATH = '/pages/component/scroll-view/scroll-view-custom-refresher-props'

const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')
const isiOS = platformInfo.startsWith('ios')
const isAndroid = platformInfo.startsWith('android')
const isHarmony = platformInfo.startsWith('harmony')

describe('scroll-view-custom-refresher-props-test', () => {

  // //TODO：临时方案
  // if (isWeb || isMP || isAndroid || isHarmony) {
  //   it('其他平台需要测试验证再放开', () => {
  //     expect(1).toBe(1)
  //   })
  //   return
  // }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
    await page.waitFor(500)
  });

  async function getPageData(dataKey) {
    return await page.data('data.' + dataKey)
  }

  /**
   * 执行下拉刷新操作
   * @param {string} elementId - scroll-view 的id
   * @param {number} pullDistance - 下拉距离
   * @param {number} offsetY - 在scroll-view内部的Y偏移量（默认10，从顶部稍微往下一点开始滑动）
   */
  async function performPullRefresh(elementId, pullDistance = 150, offsetY = 10) {
    const rect = await page.callMethod('getBoundingClientRectForRefreshing', elementId);
    console.log(`Refresher [${elementId}] rect:`, JSON.stringify(rect));

    const windowInfo = await program.callUniMethod('getWindowInfo')

    const startX = rect.left + rect.width / 2;
    const startY = rect.top + offsetY + windowInfo.safeAreaInsets.top + 44;

    console.log(`Refresher [${elementId}] swipe from (${startX}, ${startY}) to (${startX}, ${startY + pullDistance})`);

    await program.swipe({
      startPoint: {
        x: startX,
        y: startY
      },
      endPoint: {
        x: startX,
        y: startY + pullDistance
      },
      duration: 500
    })

    await page.waitFor(300)
  }

  async function screenshot() {
    await page.waitFor(500)
    const windowInfo = await program.callUniMethod('getWindowInfo')
    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: windowInfo.safeAreaInsets.top + 44
      }
    })
    expect(image).toSaveImageSnapshot()
  }

  it('test-initial-screenshot', async () => {
    await page.waitFor(500)
    const windowInfo = await program.callUniMethod('getWindowInfo')
    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: windowInfo.safeAreaInsets.top + 44
      }
    })
    expect(image).toSaveImageSnapshot()
  })

  // ==================== 4个下拉刷新截图 ====================
  it('test-all-refreshers-loading-screenshot', async () => {
    await performPullRefresh('refreshing1', 180)
    await screenshot()

    await performPullRefresh('refreshing2', 180)
    await screenshot()

    await performPullRefresh('refreshing3', 180)
    await screenshot()

    await performPullRefresh('refreshing4', 180)
    await screenshot()
  })

  // ==================== 第1个下拉刷新功能测试 ====================
  it('test-refresher-1-pull-to-refresh', async () => {
    const initialCount = await getPageData('listCount1')

    await performPullRefresh('refreshing1', 180)
    await page.waitFor(500)

    // 验证刷新状态为true
    const refreshing = await getPageData('refreshing1')
    expect(refreshing).toBe(true)

    // 等待刷新完成 (1500ms + 缓冲)
    await page.waitFor(2000)

    // 验证刷新状态变为false
    const finalRefreshing = await getPageData('refreshing1')
    expect(finalRefreshing).toBe(false)

    // 验证列表数量增加了5个
    const finalCount = await getPageData('listCount1')
    expect(finalCount).toBe(initialCount + 5)
  })

  // ==================== 第2个下拉刷新功能测试 ====================
  it('test-refresher-2-pull-to-refresh', async () => {
    const initialCount = await getPageData('listCount2')

    await performPullRefresh('refreshing2', 180)
    await page.waitFor(500)

    const refreshing = await getPageData('refreshing2')
    expect(refreshing).toBe(true)

    await page.waitFor(2000)

    const finalRefreshing = await getPageData('refreshing2')
    expect(finalRefreshing).toBe(false)

    const finalCount = await getPageData('listCount2')
    expect(finalCount).toBe(initialCount + 5)
  })

  // ==================== 第3个下拉刷新功能测试 ====================
  it('test-refresher-3-pull-to-refresh', async () => {
    const initialCount = await getPageData('listCount3')

    await performPullRefresh('refreshing3', 180)
    await page.waitFor(500)

    const refreshing = await getPageData('refreshing3')
    expect(refreshing).toBe(true)

    await page.waitFor(2000)

    const finalRefreshing = await getPageData('refreshing3')
    expect(finalRefreshing).toBe(false)

    const finalCount = await getPageData('listCount3')
    expect(finalCount).toBe(initialCount + 5)
  })

  // ==================== 第4个下拉刷新功能测试 ====================
  it('test-refresher-4-pull-to-refresh', async () => {
    const initialCount = await getPageData('listCount4')

    await performPullRefresh('refreshing4', 180)
    await page.waitFor(500)

    const refreshing = await getPageData('refreshing4')
    expect(refreshing).toBe(true)

    await page.waitFor(2000)

    const finalRefreshing = await getPageData('refreshing4')
    expect(finalRefreshing).toBe(false)

    const finalCount = await getPageData('listCount4')
    expect(finalCount).toBe(initialCount + 5)
  })

  // ==================== 测试部分下拉（不触发刷新）====================
  it('test-partial-pull-not-trigger-refresh', async () => {
    // 记录初始列表数量
    const initialCount = await getPageData('listCount1')

    // 验证初始pullingDistance为0
    const initialDistance = await getPageData('pullingDistance1')
    expect(initialDistance).toBe(0)

    // 执行部分下拉 (只下拉30px，小于threshold 45，不应触发刷新)
    await performPullRefresh('refreshing1', 30)

    await page.waitFor(1000)

    // 验证列表数量没有变化（因为没有触发刷新）
    const finalCount = await getPageData('listCount1')
    expect(finalCount).toBe(initialCount) // 数量应该保持不变

    // 验证pullingDistance已重置为0
    const finalDistance = await getPageData('pullingDistance1')
    expect(finalDistance).toBe(0)
  })
})
