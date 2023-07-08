const PAGE_PATH = '/pages/API/page-scrollTo/page-scrollTo'

describe('page-scrollTo', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  // TODO
  it('scrollTo', async () => {
    const btnScrollTo = await page.$('.btn-scrollTo')

    await btnScrollTo.tap()
    await page.waitFor(50)
    // const scrollTop = await page.scrollTop()
    // expect(scrollTop).toBe(100)
  })
  // it('scrollToElement', async () => {
  //   const btnScrollTo = await page.$('.btn-scrollToElement')
  //   const scrollToElement = await page.$('.custom-element')

  //   await btnScrollTo.tap()
  //   await page.waitFor(50)
  //   const offset = await scrollToElement.offset()
  //   expect(offset.top).toBe(0)
  // })
})