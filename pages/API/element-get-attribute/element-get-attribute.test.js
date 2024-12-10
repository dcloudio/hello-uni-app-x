jest.setTimeout(30000);
describe('test element-get-attribute', () => {
  let page,platform,attrStyle,propertyValue;
  platform = process.env.UNI_PLATFORM
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
    if(platform != 'app-plus'){
      await page.callMethod('getAttributeStyle')
      console.log('attrStyle:',await page.data('attrStyle'))
      attrStyle = platform == 'mp-weixin'?'background-color:#FFF000;':'padding: 0.625rem; background-color: rgb(255, 240, 0);'
      expect(await page.data('attrStyle')).toEqual(attrStyle);
    }
  });
  it('check getPropertyValue', async () => {
    await page.callMethod('getPropertyValue')
    propertyValue = platform == 'h5'?'rgb(255, 240, 0)':'#FFF000'
    expect(await page.data('propertyValue')).toEqual(propertyValue);
  });
  if(platform != 'h5'){
    it('check scrollTo', async () => {
      await page.callMethod('scrollTo')
      await page.waitFor(100);
      const scrollView =  await page.$('.scroll-view_H')
      expect(await scrollView.property('scrollLeft')).toBe(200);
    });
  }
});
