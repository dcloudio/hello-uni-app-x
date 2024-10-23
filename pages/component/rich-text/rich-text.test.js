const PAGE_PATH = '/pages/component/rich-text/rich-text'

describe('rich-text-test', () => {

  // 先屏蔽 android 及 web 平台
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
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
      await page.waitFor(1000)
      beforeValue = await page.data('richTextHeight')
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

  it('test selectable itemclick', async () => {
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
      return;
    }
    await page.setData({
      autoTest: true,
      isItemClickTrigger: false
    });
    await page.waitFor(1000);
    const info = await page.callMethod('getWindowInfoForTest');
    const rect = await page.callMethod('getBoundingClientRectForTest');
    await program.tap({
      x: (rect.right - rect.left) / 2,
      y: info.statusBarHeight + 44 + (rect.bottom - rect.top) / 2
    });
    await page.waitFor(1000);
    expect(await page.data('isItemClickTrigger')).toBe(true);
    await page.setData({
      autoTest: false
    });
  });

  it('rich-text parent click', async () => {
    const element = await page.$('#rich-text-parent')
    await element.tap()
    await page.waitFor(500)
    const element2 = await page.$('#rich-text-str')
    expect(await element2.text()).toBe("true")
  })

})
