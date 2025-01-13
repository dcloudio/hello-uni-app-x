const PAGE_PATH = '/pages/CSS/transform/transform-origin'

describe('transform-origin-test', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.startsWith('android')
  const isIOS = platformInfo.startsWith('ios')
  const isMP = platformInfo.startsWith('mp')
  const isWeb = platformInfo.startsWith('web')

  if (
    isWeb ||
    isMP
  ) {
    it('other platform', () => {
      expect(1).toBe(1)
    })
    return
  }

  if (process.env.UNI_TEST_DEVICES_DIRECTION == 'landscape') {
    it('跳过横屏模式', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500);
  })


  it('transform-origin-test', async () => {

    let iconRect = await page.data('iconRect')
    let x = 100
    let y = 160

    await program.tap({x: x, y: y})

    await page.waitFor(500);
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()

  })
})
