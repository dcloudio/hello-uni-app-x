const PAGE_PATH = '/pages/template/calendar/calendar'

describe('calendar', () => {
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
