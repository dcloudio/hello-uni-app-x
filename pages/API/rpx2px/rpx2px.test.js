const PAGE_PATH = '/pages/API/rpx2px/rpx2px'

describe('API-rpx2px', () => {
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
  });
  it('rpx2px', async () => {
    const btnConvert = await page.$('.convert')
    await btnConvert.tap()
    await page.waitFor(100)

    const data = await page.data()
    expect(data.result).toBe(true)
  });
});
