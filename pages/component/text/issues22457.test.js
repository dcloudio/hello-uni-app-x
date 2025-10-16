const PAGE_PATH = '/pages/component/text/issues22457'

describe('issues-22457', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500);
  })

  it('absolute-text-width', async () => {

    let textWidth = await page.data('textWidth')
    // textWidth 应该大于 20
    expect(textWidth).toBeGreaterThan(30)
  })
})
