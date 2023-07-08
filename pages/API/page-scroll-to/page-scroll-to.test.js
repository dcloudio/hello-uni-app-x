const PAGE_PATH = '/pages/API/page-scroll-to/page-scroll-to'

describe('page-scroll-to', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  // TODO
  it('scroll-to', async () => {
    const btnScrollTo = await page.$('.btn-scrollTo')

    await btnScrollTo.tap()
    await page.waitFor(50)
    // const scrollTop = await page.scrollTop()
    // expect(scrollTop).toBe(100)
  })
  // it('scroll-to-element', async () => {
  //   const btnScrollTo = await page.$('.btn-scrollToElement')
  //   const scrollToElement = await page.$('.custom-element')

  //   await btnScrollTo.tap()
  //   await page.waitFor(50)
  //   const offset = await scrollToElement.offset()
  //   expect(offset.top).toBe(0)
  // })
})