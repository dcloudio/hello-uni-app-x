const PAGE_PATH = '/pages/component/rich-text/rich-text'

describe('rich-text-test', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isMP = platformInfo.startsWith('mp')
  const isWeb = platformInfo.startsWith('web')
  const isAndroid = platformInfo.startsWith('android')

  if (isWeb || isMP) {
    it('other platform', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(1500);
  })


  it('richt-text-height', async () => {
    let beforeValue = await page.data('richTextHeight')
    if (beforeValue < 10) {
      await page.waitFor(2000)
      beforeValue = await page.data('richTextHeight')

      if (beforeValue < 10) {
        await page.waitFor(2000)
        beforeValue = await page.data('richTextHeight')
      }
    }
    await page.callMethod('changeText')
    await page.waitFor(500)
    await page.callMethod('changeText')
    await page.waitFor(1000)
    let afterValue = await page.data('richTextHeight')
    console.log('beforeValue:', beforeValue)
    console.log('afterValue:', afterValue)
    expect(beforeValue).toBe(afterValue)
  })

  if (isAndroid) {
    it('test selectable itemclick', async () => {
      await page.setData({
        autoTest: true,
        isItemClickTrigger: false
      });
      await page.waitFor(1000);
      const windowInfo = await program.callUniMethod('getWindowInfo');
      const rect = await page.callMethod('getBoundingClientRectForTest');
      await program.tap({
        x: (rect.right - rect.left) / 2,
        y: windowInfo.statusBarHeight + 44 + (rect.bottom - rect.top) / 2
      });
      await page.waitFor(1000);
      expect(await page.data('isItemClickTrigger')).toBe(true);
      await page.setData({
        isItemClickTrigger: false
      });
      await program.navigateTo("/pages/component/rich-text/rich-text-tags");
      await page.waitFor(500);
      await program.navigateBack();
      await program.tap({
        x: (rect.right - rect.left) / 2,
        y: windowInfo.statusBarHeight + 44 + (rect.bottom - rect.top) / 2
      });
      await page.waitFor(1000);
      expect(await page.data('isItemClickTrigger')).toBe(true);
      await page.setData({
        autoTest: false
      });
    });
  }

  it('rich-text parent click', async () => {
    const element = await page.$('#rich-text-parent')
    await element.tap()
    await page.waitFor(500)
    const element2 = await page.$('#rich-text-str')
    expect(await element2.text()).toBe("true")
  })
})
