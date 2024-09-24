const PAGE_PATH = '/pages/component/rich-text/rich-text'

describe('rich-text-test', () => {

  // 先屏蔽 android 及 web 平台
  if (process.env.uniTestPlatformInfo.startsWith('android') || process.env.uniTestPlatformInfo.startsWith('web')) {
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

})
