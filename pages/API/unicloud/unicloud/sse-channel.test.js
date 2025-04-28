const PAGE_PATH = '/pages/API/unicloud/unicloud/sse-channel'
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()

describe('unicloud-database', () => {
  it('databaseLookup', async () => {
    await page.callMethod('receiveMessage')
    const {
      messages
    } = await page.data()
    expect(messages.length).toBe(3)
  })
});
