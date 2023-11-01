const PAGE_PATH = '/pages/API/get-launch-options-sync/get-launch-options-sync'

describe('getLaunchOptionsSync', () => {
  it('getLaunchOptionsSync', async () => {
    const page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
    await page.callMethod('getLaunchOptionsSync')
    const data = await page.data()
    expect(data.checked).toBe(true)
  })
})
