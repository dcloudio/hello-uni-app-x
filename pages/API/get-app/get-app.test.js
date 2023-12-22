const PAGE_PATH = '/pages/API/get-app/get-app'

describe('getApp', () => {
  let page = null
  beforeAll(async () => {
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
  })
  it('method', async () => {
    const oldLifeCycleNum = await page.data('lifeCycleNum')
    await page.callMethod('_increasetLifeCycleNum')
    const newLifeCycleNum = await page.data('lifeCycleNum')
    expect(newLifeCycleNum - oldLifeCycleNum).toBe(100)
    await page.callMethod('setLifeCycleNum', oldLifeCycleNum)
  })
})
