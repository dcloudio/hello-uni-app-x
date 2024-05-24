let page;
describe('movable-view.uvue', () => {
  console.log(process.env.uniTestPlatformInfo,process.env.uniTestPlatformInfo.startsWith('web'))
  if (!process.env.uniTestPlatformInfo.startsWith('web')) {
    it('app', () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/movable-view/movable-view')
    await page.waitFor('view');
  });

  it('移动至 (30px, 30px)', async () => {
    expect(await page.data('x')).toBe(0)
    expect(await page.data('y')).toBe(0)
    await page.callMethod('tap')
    await page.waitFor(500);
    expect(await page.data('x')).toBe(30)
    expect(await page.data('y')).toBe(30)
  })
  it('放大3倍', async () => {
    expect(await page.data('scale')).toBe(2)
    await page.callMethod('tap2')
    await page.waitFor(500);
    expect(await page.data('scale')).toBe(3)
  })

})
