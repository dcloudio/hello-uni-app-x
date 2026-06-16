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

  it('get page node background-color', async () => {
    const pageElement = await page.$('.uni-non-public-page')
    expect(pageElement).toBeTruthy()

    const backgroundColor = await pageElement.style('background-color')
    expect(['#0000FFFF', 'rgb(0,0,255)', 'rgb(0, 0, 255)']).toContain(backgroundColor)
  })
})
