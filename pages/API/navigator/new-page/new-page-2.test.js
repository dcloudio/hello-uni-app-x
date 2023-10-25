jest.setTimeout(20000)
const PAGE_PATH = '/pages/API/navigator/new-page/new-page-2'
const INTERMEDIATE_PAGE_PATH = '/pages/API/navigator/navigator'
let page
let lifeCycleNum

describe('app-lifecycle', () => {
  it('onLaunch onShow', async () => {
    page = await program.reLaunch(INTERMEDIATE_PAGE_PATH)
    await page.waitFor('view')
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(1100)
  })
  it('onLastPageBackPress', async () => {
    page = await program.navigateBack()
    await page.waitFor('view')
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(100)

    await page.callMethod('setLifeCycleNum', 0)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(0)
  })
})

describe('page-lifecycle', () => {
  it('onLoad onShow onReady', async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(120)
    await page.callMethod('setLifeCycleNum', 0)
  })
  it('onPullDownRefresh', async () => {
    await page.callMethod('pullDownRefresh')
    await page.waitFor(1500)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(10)
    await page.callMethod('setLifeCycleNum', 0)
  })
  it('onPageScroll onReachBottom', async () => {
    await program.pageScrollTo(2000)
    const data = await page.data()
    expect(data.isScrolled).toBe(true)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(10)
    await page.callMethod('setLifeCycleNum', 0)
  })
  it('onHide', async () => {
    page = await program.navigateTo(INTERMEDIATE_PAGE_PATH)
    await page.waitFor('view')
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(-10)
    page = await program.navigateBack()
    await page.waitFor('view')
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(0)
  })
  it('onUnload', async () => {
    page = await program.redirectTo(INTERMEDIATE_PAGE_PATH)
    await page.waitFor('view')
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(-100)
    await page.callMethod('setLifeCycleNum', 0)
  })
  it('onBackPress', async () => {
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(120)
    page = await program.navigateBack()
    await page.waitFor('view')
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(10)
    await page.callMethod('setLifeCycleNum', 0)
  })
})
