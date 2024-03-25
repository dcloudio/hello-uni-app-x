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
    expect(data.originGlobalData.str).toBe('default globalData str')
    expect(data.originGlobalData.num).toBe(0)
    expect(data.originGlobalData.bool).toBe(false)
    expect(data.originGlobalData.obj).toEqual({
      bool: false,
      num: 0,
      str: 'default globalData obj str',
    })
    expect(data.originGlobalData.arr).toEqual([])
    expect(data.originGlobalData.mySet).toEqual([])
    expect(data.originGlobalData.myMap).toEqual({})
    expect(data.originGlobalDataFuncRes).toBe('globalData func')
    await page.callMethod('setGlobalData')
    data = await page.data()
    expect(data.newGlobalData.str).toBe('new globalData str')
    expect(data.newGlobalData.num).toBe(100)
    expect(data.newGlobalData.bool).toBe(true)
    expect(data.newGlobalData.obj).toEqual({
      bool: true,
      num: 200,
      str: 'new globalData obj str',
    })
    expect(data.newGlobalData.arr).toEqual([1, 2, 3])
    expect(data.newGlobalData.mySet).toEqual(['a', 'b', 'c'])
    expect(data.newGlobalData.myMap).toEqual({
      a: 1,
      b: 2,
      c: 3
    })
    expect(data.newGlobalDataFuncRes).toBe('new globalData func')
  })
  it('method', async () => {
    const oldLifeCycleNum = await page.data('lifeCycleNum')
    await page.callMethod('_increasetLifeCycleNum')
    const newLifeCycleNum = await page.data('lifeCycleNum')
    expect(newLifeCycleNum - oldLifeCycleNum).toBe(100)
    await page.callMethod('setLifeCycleNum', oldLifeCycleNum)
  })
})
