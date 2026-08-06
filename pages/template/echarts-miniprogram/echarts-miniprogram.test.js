const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isVapor = process.env.UNI_APP_X_DOM2 === 'true'
const isSupported = platformInfo.startsWith('web') || platformInfo.startsWith('mp-') || isVapor
const PAGE_PATH = '/pages/template/echarts-miniprogram/echarts-miniprogram'

describe('echarts-miniprogram', () => {
  if (!isSupported) {
    it('only supports web, mini program or app vapor', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page

  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
    await page.waitFor(1500)
  })

  it('initializes chart and switches data set', async () => {
    const chart = await page.$('.chart')
    const button = await page.$('.action-button')
    let state = await page.callMethod('jest_getState')

    expect(chart).not.toBeNull()
    expect(button).not.toBeNull()
    expect(await button.text()).toBe('Switch data set')
    expect(state.chartInited).toBe(true)
    expect(state.activeDataSet).toBe(0)

    await page.callMethod('toggleData')
    await page.waitFor(100)
    state = await page.callMethod('jest_getState')

    expect(state.activeDataSet).toBe(1)
  })
})
