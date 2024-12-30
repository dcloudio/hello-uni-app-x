jest.setTimeout(30000);
describe('test element-get-attribute', () => {
  let page;
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.startsWith('android')
  const isIos = platformInfo.startsWith('ios')
  const isApp = isAndroid || isIos
  const isWeb = platformInfo.startsWith('web')
  const isMP = platformInfo.startsWith('mp')
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
    if(isWeb||isMP){
      await page.callMethod('getAttributeStyle')
      console.log('attrStyle:',await page.data('attrStyle'))
      const attrStyle = isMP?'background-color:#FFF000;':'padding: 0.625rem; background-color: rgb(255, 240, 0);'
      expect(await page.data('attrStyle')).toEqual(attrStyle);
    }
  });
  it('check getPropertyValue', async () => {
    await page.callMethod('getPropertyValue')
    const propertyValue = isWeb?'rgb(255, 240, 0)':'#FFF000'
    expect(await page.data('propertyValue')).toEqual(propertyValue);
  });
  if(isApp||isMP){
    it('check scrollTo', async () => {
      await page.callMethod('scrollTo')
      await page.waitFor(100);
      const scrollView =  await page.$('.scroll-view_H')
      expect(await scrollView.property('scrollLeft')).toBe(200);
    });
  }
});
