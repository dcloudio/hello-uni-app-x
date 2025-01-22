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
      const attrStyle = isMP?'background-color:#FFF000;':'background-color: rgb(255, 240, 0);'
      expect(await page.data('attrStyle')).toEqual(attrStyle);
    }
  });
  it('check getPropertyValue', async () => {
    await page.callMethod('getPropertyValue')
    await page.waitFor(1000)
    const propertyValue = isWeb?'rgb(255, 240, 0)':'#FFF000'
    console.log('propertyValue: ',propertyValue,await page.data('propertyValue'));
    expect(await page.data('propertyValue')).toEqual(propertyValue);
  });

  it('getBoundingClientRectSync', async () => {
    await page.callMethod("getBoundingClientRectAsyncChild");
    await page.waitFor(100)
    const rectInfo = await page.data("rectInfo")
    const systemInfo = await program.systemInfo();
    const width = systemInfo.screenWidth
    console.log('width: ',width);
    console.log('rectInfo: ',rectInfo);
    expect(Math.round(rectInfo.x)).toBe(15)
    expect(Math.round(rectInfo.y) >= 242).toBe(true)
    expect(width - 15 * 2 - Math.round(rectInfo.width) >= 0).toBe(true)
    expect(Math.round(rectInfo.height)).toBe(100)
    expect(Math.round(rectInfo.left)).toBe(15)
    expect(Math.round(rectInfo.top) >= 242).toBe(true)
    expect(width - 15 - Math.round(rectInfo.right) >= 0).toBe(true)
    expect(Math.round(rectInfo.bottom) >= 342).toBe(true)
  })
  if(isApp||isMP){
    it('check scrollTo', async () => {
      await page.callMethod('scrollTo')
      await page.waitFor(100);
      const scrollView =  await page.$('.scroll-view_H')
      expect(await scrollView.property('scrollLeft')).toBe(200);
    });
  }
});
