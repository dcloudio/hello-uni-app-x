jest.setTimeout(30000);
describe('test title', () => {
  let page, vant;
  if (!process.env.uniTestPlatformInfo.startsWith('mp')) {
    it('not support', () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/template/vant-button/vant-button')
    await page.waitFor(3000);
    vant = await page.$('van-button');
    expect(await page.data('jest')).toBe(false);
  });
  it('check title onClick', async () => {
    const titleText = await vant.text();
    expect(titleText).toEqual('vant weapp的van-button按钮组件');
    await vant.tap()
    await page.waitFor(1000);
    console.log('jest', await page.data('jest'))
    // expect(await page.data('jest')).toBe(true);
  });
});
