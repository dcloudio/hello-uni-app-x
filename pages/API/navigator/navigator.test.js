jest.setTimeout(40000)
const CURRENT_PAGE_PATH = '/pages/API/navigator/navigator'
const HOME_PAGE_PATH = '/pages/tabBar/component'

describe('navigator', () => {
  let page
  let lifeCycleNum
  it('reLaunch', async () => {
    page = await program.navigateTo(CURRENT_PAGE_PATH)
    await page.waitFor(1000)
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('reLaunch')
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    page = await program.navigateTo(CURRENT_PAGE_PATH)
    await page.waitFor(1000)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
  })

  it('navigateTo', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateTo')
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
    page = await program.navigateBack()
    await page.waitFor(1000)
  })

  it('navigateTo error page', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateToErrorPage')
    await page.waitFor(1000)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
  })

  it('navigateTo debounce', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateToDebounce')
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(4)
    page = await program.navigateBack()
    await page.waitFor(1000)
  })

  it('navigateBack', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('navigateBack')
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    page = await program.navigateTo(CURRENT_PAGE_PATH)
    await page.waitFor(1000)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
  })

  it('redirectTo', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('redirectTo')
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    page = await program.redirectTo(CURRENT_PAGE_PATH)
    await page.waitFor(1000)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
  })

  it('switchTab', async () => {
    await page.callMethod('setLifeCycleNum', 0)
    await page.callMethod('switchTab')
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    page = await program.navigateTo(CURRENT_PAGE_PATH)
    await page.waitFor(1000)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(2)
  })

  it('reset lifecycle', async () => {
    const resetLifecycleNum = 1100
    await page.callMethod('setLifeCycleNum', resetLifecycleNum)
    lifeCycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifeCycleNum).toBe(resetLifecycleNum)
  })
})
