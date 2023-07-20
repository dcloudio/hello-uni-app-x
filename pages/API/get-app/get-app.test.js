const PAGE_PATH = '/pages/API/get-app/get-app'

describe('getApp', () => {
  it('getApp', async () => {
    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(1000)
    const oldData = await page.data()
    await page.callMethod('_increasetLifeCycleNum')
    const newData = await page.data()
    expect(newData.lifeCycleNum - oldData.lifeCycleNum).toBe(100)
  })
})
