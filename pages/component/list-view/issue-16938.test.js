const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')

describe('issue-16938', () => {
  if (isMP) {
    it('skip mp', () => {
      expect(1).toBe(1)
    })
    return
  }
  let page

  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/list-view/issue-16938')
    await page.waitFor(600)
  })

  it('activate', async () => {
    await page.callMethod('setScrollTop', 1000)
    await page.callMethod('toNextPage')
    await page.waitFor(600)
    page = await program.navigateBack()
    await page.waitFor(600)
    const scrollTop = await page.callMethod('getScrollTop')
    expect(scrollTop).toBe(1000)
  })

})
