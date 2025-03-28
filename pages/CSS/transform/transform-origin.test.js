const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')
const PAGE_PATH = '/pages/CSS/transform/transform-origin'

describe('transform-origin-test', () => {

  if (isWeb || isMP || process.env.UNI_TEST_DEVICES_DIRECTION == 'landscape') {
    it('other platform', () => {
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
