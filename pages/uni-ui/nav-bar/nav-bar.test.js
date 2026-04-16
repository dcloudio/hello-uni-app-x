const PAGE_PATH = '/pages/uni-ui/nav-bar/nav-bar'

describe('nav-bar', () => {
  let page

  beforeEach(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('scroll-view')
  })

  it('nav-bar components exist', async () => {
    const navBars = await page.$$('uni-nav-bar')
    expect(navBars.length).toBe(11)
  })

  it('nav-bar snapshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  })
})
