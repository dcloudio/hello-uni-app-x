const PAGE_PATH = '/pages/API/connect-event-source/connect-event-source'

describe('sse', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.startsWith('android')
  const isIOS = platformInfo.startsWith('ios')
  if (!(isAndroid || isIOS)) {
    it('not support', () => {
      expect(1).toBe(1)
    })
    return
  }
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view');
  });

  it('sse_open', async () => {
    await page.callMethod('connect')
    await page.waitFor(2500)
    const data = await page.data('data')
    expect(data.open).toBe(true)
    expect(data.receiveMessage).toBe(true)
  })
})
