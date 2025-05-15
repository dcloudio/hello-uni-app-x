const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')

let page;
describe('label.uvue', () => {
  if (!isWeb) {
    it('app', () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/label/label')
    await page.waitFor('view');
  });
  afterEach(async() => {
    await page.setData({
      checkboxValue: [],
      radioValue:''
    })
  });
  function getData(key = '') {
    return new Promise(async (resolve, reject) => {
      const data = await page.data()
      resolve(key ? data[key] : data)
    })
  }
  it('表单组件在label内', async () => {
    expect(await getData('checkboxValue')).toEqual([])
    const checkboxItems = await page.$$('.checkboxItemsTest')
    await checkboxItems[0].tap()
    expect(await getData('checkboxValue')).toEqual(['USA', 'CHN'])
  })
  it('label用for标识表单组件', async () => {
    const radioItems = await page.$$('.label-2-text')
    await radioItems[0].tap()
    expect(await getData('radioValue')).toEqual('USA')
    await radioItems[1].tap()
    expect(await getData('radioValue')).toEqual('CHN')
  })
  it('label内有多个时选中第一个', async () => {
    const labelText = await page.$('.uni-center')
    await labelText.tap()
    expect(await getData('checkboxValue')).toEqual([''])
  })
})
