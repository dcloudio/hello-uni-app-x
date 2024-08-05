const PAGE_PATH = '/pages/API/request-animation-frame/request-animation-frame'

describe('API-requestAnimationFrame', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
  });

  it('requestAnimationFrame', async () => {
    await page.callMethod('startRequestAnimationFrame')
    await page.waitFor(100)
    const data = await page.data()
    expect(data.testFrameCount > 0).toBe(true)
  });
});
