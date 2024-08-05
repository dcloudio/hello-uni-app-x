const PAGE_PATH = '/pages/API/get-enter-options-sync/get-enter-options-sync'

describe('getEnterOptionsSync', () => {
  it('app onShow 和 getEnterOptionsSync 结果一致', async () => {
    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
    const pageData = await page.data()
    expect(pageData.testResult).toBe(true)
  })
})
