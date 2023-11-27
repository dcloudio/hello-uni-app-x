const PAGE_PATH = '/pages/API/globalProperties/globalProperties'

describe('globalProperties', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page = null
    beforeAll(async () => {
      page = await program.navigateTo(PAGE_PATH)
      await page.waitFor(500)
    })
    it('globalProperties', async () => {
      let data = await page.data()
      expect(data.myGlobalProperties.str).toBe('default string')
      expect(data.myGlobalProperties.num).toBe(0)
      expect(data.myGlobalProperties.bool).toBe(false)
      expect(data.myGlobalProperties.obj).toEqual({
        bool: false,
        num: 0,
        str: 'default globalProperties obj string'
      })
      expect(data.myGlobalProperties.arr).toEqual([])
      expect(data.myGlobalProperties.set).toEqual([])
      expect(data.myGlobalProperties.map).toEqual({})
      expect(data.myGlobalProperties.reactiveObj).toEqual({
        str: 'default reactive string',
        num: 0,
        bool: false
      })
      expect(data.globalPropertiesFnRes).toBe('globalPropertiesStr: default string, globalPropertiesNum: 0')
      await page.callMethod('updateGlobalProperties')
      data = await page.data()
      expect(data.myGlobalProperties.str).toBe('new string')
      expect(data.myGlobalProperties.num).toBe(100)
      expect(data.myGlobalProperties.bool).toBe(true)
      expect(data.myGlobalProperties.obj).toEqual({
        bool: true,
        num: 100,
        str: 'new globalProperties obj string'
      })
      expect(data.myGlobalProperties.arr).toEqual([1, 2, 3])
      expect(data.myGlobalProperties.set).toEqual(['a', 'b', 'c'])
      expect(data.myGlobalProperties.map).toEqual({
        'a': 1,
        'b': 2,
        'c': 3
      })
      expect(data.myGlobalProperties.reactiveObj).toEqual({
        str: 'new reactive string',
        num: 200,
        bool: true
      })
      expect(data.globalPropertiesFnRes).toBe('globalPropertiesStr: new string, globalPropertiesNum: 100')
    })
    it('screenshot', async () => {
      const image = await program.screenshot({
        fullPage: true
      });
      expect(image).toMatchImageSnapshot();
    })
  } else {
    // TODO: web 端暂不支持
    it('web', async () => {
      expect(1).toBe(1)
    })
  }
})
