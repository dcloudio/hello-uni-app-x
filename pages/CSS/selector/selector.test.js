const isDom2 = process.env.UNI_APP_X_DOM2 === 'true'
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isAndroid || isIos || isHarmony

describe('/pages/CSS/selector/selector.uvue', () => {
  if (!isApp) {
    it('skip non-app platform', () => {
      expect(1).toBe(1)
    })
    return
  }

  if (!isDom2) {
    it('skip non-dom2', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page

  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/selector/selector')
    await page.waitFor('view')
  })

  it('get page node padding from css variable', async () => {
    const pageElement = await page.$('.uni-non-public-page')
    expect(pageElement).toBeTruthy()

    const expectedPadding = ['16px']
    const paddingTop = await pageElement.style('padding-top')
    const paddingRight = await pageElement.style('padding-right')
    const paddingBottom = await pageElement.style('padding-bottom')
    const paddingLeft = await pageElement.style('padding-left')
    expect(expectedPadding).toContain(paddingTop)
    expect(expectedPadding).toContain(paddingRight)
    expect(expectedPadding).toContain(paddingBottom)
    expect(expectedPadding).toContain(paddingLeft)
  })
})
