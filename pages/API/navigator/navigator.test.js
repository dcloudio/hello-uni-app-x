jest.setTimeout(40000)
const CURRENT_PAGE_PATH = '/pages/API/navigator/navigator'
const CHILD1_PAGE_PATH = '/pages/API/navigator/new-page/new-page-1'
const CHILD2_PAGE_PATH = '/pages/API/navigator/new-page/new-page-2'

describe('navigator', () => {
  let page
  let lifeCycleNum

  afterAll(async () => {
    const resetLifecycleNum = 1100
    await page.callMethod('setLifeCycleNum', resetLifecycleNum)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(resetLifecycleNum)
  })

  it('reLaunch', async () => {
    page = await program.navigateTo(CURRENT_PAGE_PATH)
    await page.waitFor(500)
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('reLaunch')
    await page.waitFor(500)
    page = await program.navigateTo(CURRENT_PAGE_PATH)
    await page.waitFor(500)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
  })

  it('navigateTo', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateTo')
    await page.waitFor(500)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
    page = await program.navigateBack()
    await page.waitFor(500)
  })

  it('navigateTo error page', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateToErrorPage')
    await page.waitFor(500)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
  })

  it('navigateTo debounce', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateToDebounce')
    await page.waitFor(500)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(4)
    page = await program.navigateBack()
    await page.waitFor(500)
  })

  it('navigateTo relative path', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateToRelativePath1')
    page = await program.navigateBack()
    await page.waitFor(500)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
    await page.waitFor(500)
  })

  it('navigateTo relative path ./', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateToRelativePath2')
    page = await program.navigateBack()
    await page.waitFor(500)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
    await page.waitFor(500)
  })

  it('navigateTo relative path ../', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateToRelativePath3')
    page = await program.navigateBack()
    await page.waitFor(500)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
    await page.waitFor(500)
  })

  it('navigateBack', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateBack')
    await page.waitFor(500)
    page = await program.navigateTo(CURRENT_PAGE_PATH)
    await page.waitFor(500)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
  })

  it('navigateBackWithDelta1', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateBackWithDelta1')
    await page.waitFor(1000)
    page = await program.currentPage()
    expect(`/${page.path}`).toBe(CURRENT_PAGE_PATH)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
  })

  it('navigateBackWithDelta2', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await program.navigateTo(CHILD2_PAGE_PATH)
    await page.waitFor(500)
    page = await program.navigateTo(CHILD1_PAGE_PATH)
    await page.waitFor(500)
    await page.callMethod('navigateBackWithDelta2')
    await page.waitFor(500)
    page = await program.currentPage()
    expect(`/${page.path}`).toBe(CURRENT_PAGE_PATH)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(10)
  })

  it('navigateBackWithDelta100', async () => {
    page = await program.reLaunch(CURRENT_PAGE_PATH)
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateBackWithDelta100')
    await page.waitFor(1000)
    page = await program.currentPage()
    expect(`/${page.path}`).toBe(CURRENT_PAGE_PATH)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
  })

  it('redirectTo', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('redirectTo')
    await page.waitFor(500)
    page = await program.redirectTo(CURRENT_PAGE_PATH)
    await page.waitFor(500)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
  })

  it('switchTab', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('switchTab')
    await page.waitFor(500)
    page = await program.navigateTo(CURRENT_PAGE_PATH)
    await page.waitFor(500)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
  })
})
