const PAGE_PATH = '/pages/API/unicloud/unicloud/sse-channel'
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()

describe('sse-channel', () => {
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
  })

  it('basic', async () => {
    await page.callMethod('receiveMessage')
    await page.waitFor(2000)
    const {
      messages
    } = await page.data()
    expect(messages.length).toBe(2)
  })
});
