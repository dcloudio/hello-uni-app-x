const PAGE_PATH = '/pages/API/get-app/get-app'

describe('getApp', () => {
  let page = null
  beforeAll(async () => {
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
  })
  it('globalData', async () => {
    await page.callMethod('getGlobalData')
    let data = await page.data()
    expect(data.globalDataStr).toBe('global data str')
    expect(data.globalDataNum).toBe(123)
    expect(data.globalDataBool).toBe(true)
    await page.callMethod('setGlobalData')
    await page.callMethod('getGlobalData')
    data = await page.data()
    expect(data.globalDataStr).toBe('new global data str')
    expect(data.globalDataNum).toBe(456)
    expect(data.globalDataBool).toBe(false)
  })
  it('method', async () => {
    const oldLifeCycleNum = await page.data('lifeCycleNum')
    await page.callMethod('_increasetLifeCycleNum')
    const newLifeCycleNum = await page.data('lifeCycleNum')
    expect(newLifeCycleNum - oldLifeCycleNum).toBe(100)
    await page.callMethod('setLifeCycleNum', oldLifeCycleNum)
  })
})
