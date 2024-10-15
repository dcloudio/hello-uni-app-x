// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
const PAGE_PATH = '/pages/API/event-bus/uts-event-bus'


describe('event-bus', () => {

  if ( !process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
    it('pass', async () => {
      expect(1).toBe(1);
    });
    return;
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it('on', async () => {
    await page.callMethod('clear')
    await page.callMethod('JsOnUts')
    await page.callMethod('emitFromUts')
    const l1 = (await page.data()).log.length
    expect(l1).toBeGreaterThan(0)


    await page.callMethod('clear')
    await page.callMethod('offUts')
    await page.callMethod('emitFromUts')
    const l2 = (await page.data()).log.length
    expect(l2).toBe(0)

    await page.callMethod('clear')
    await page.callMethod('UtsOnJS')
    await page.callMethod('emitFormJS')
    const l3 = (await page.data()).log.length
    expect(l3).toBeGreaterThan(0)

    await page.callMethod('clear')
    await page.callMethod('offJs')
    await page.callMethod('emitFormJS')
    const l4 = (await page.data()).log.length
    console.log(l4)
    expect(l4).toBe(0)
    await page.callMethod('clear')
  })

  it('once', async () => {
    await page.callMethod('clear')
    await page.callMethod('JsOnUtsOnce')
    await page.callMethod('emitFromUts')
    const l1 = (await page.data()).log.length
    expect(l1).toBeGreaterThan(0)
    await page.callMethod('clear')
    await page.callMethod('emitFromUts')
    const l2 = (await page.data()).log.length
    expect(l2).toBe(0)

    await page.callMethod('clear')
    await page.callMethod('UtsOnJSOnce')
    await page.callMethod('emitFormJS')
    const l3 = (await page.data()).log.length
    expect(l3).toBeGreaterThan(0)
    await page.callMethod('clear')
    await page.callMethod('emitFormJS')
    const l4 = (await page.data()).log.length
    expect(l4).toBe(0)

    await page.callMethod('clear')
  })

})
