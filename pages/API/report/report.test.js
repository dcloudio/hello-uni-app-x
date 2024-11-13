const PAGE_PATH = '/pages/API/report/report'
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')

describe('report', () => {
  let page = null
  beforeAll(async () => {
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor('view')
  })
  it('Report - onLaunch', async () => {
    await page.callMethod('handleAppLaunch')
    const msg = await page.data('msg')
    expect(msg).toBe('onLaunch --> report:ok')
  })
  it('Report - onShow', async () => {
    await page.callMethod('handleAppShow')
    const msg = await page.data('msg')
    expect(msg).toBe('onAppShow --> report:ok')
  })
  it('Report - onHide', async () => {
    await page.callMethod('handleAppHide')
    const msg = await page.data('msg')
    expect(msg).toBe('onAppHide --> report:ok')
  })
  it('Report - onError', async () => {
    await page.callMethod('handleAppError')
    const msg = await page.data('msg')
    expect(msg).toBe('onAppError --> report:ok')
  })
})
