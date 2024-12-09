jest.setTimeout(30000);
describe('/pages/API/element-get-attribute/element-get-attribute', () => {
  let page;
  if (!process.env.uniTestPlatformInfo.startsWith('mp')) {
    it('skip', () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/element-get-attribute/element-get-attribute')
    await page.waitFor(3000);
  });
  it('check getAttributeId', async () => {
    await page.callMethod('getAttributeId')
    expect(await page.data('attrId')).toEqual('box');
  });
  it('check setStyle getAttributeStyle', async () => {
    await page.callMethod('setStyle')
    await page.callMethod('getAttributeStyle')
    expect(await page.data('attrStyle')).toEqual('background-color:#FFF000');
  });
  it('check scrollTo', async () => {
    await page.callMethod('scrollTo')
    await page.waitFor(100);
    const scrollView =  await page.$('.scroll-view_H')
    expect(await scrollView.property('scrollLeft')).toBe(200);
  });
});
