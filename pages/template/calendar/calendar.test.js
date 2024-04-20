const PAGE_PATH = '/pages/template/calendar/calendar'

describe('calendar', () => {
  if (process.env.uniTestPlatformInfo.indexOf('web') > -1 || process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true') {
    it('dummyTest', () => {
      expect(1).toBe(1)
    })
    return
  }
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('width', async () => {
    const pageData = await page.data()
    expect(pageData.testWidth > 0).toBe(true)
  })
})
