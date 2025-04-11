const PAGE_PATH = '/pages/component/scroll-view/scroll-view-custom-refresher-props'

const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')

describe('touch-events-test', () => {
  if (isWeb || isMP || process.env.UNI_TEST_DEVICES_DIRECTION == 'landscape') {
    it('not support', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view');
  })

  it('test-screenshot-custom-refresher', async () => {
    await page.waitFor(300);
    const windowInfo = await program.callUniMethod('getWindowInfo');
    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: windowInfo.safeAreaInsets.top + 44
      }
    });
    expect(image).toSaveImageSnapshot();
  })

  it('test-custom-refresher', async () => {

    let x = 100
    let y = 250

    await page.setData({
      triggered: false,
      listCount: 5
    })

    await page.waitFor(500);

    // 滑动事件
    await program.swipe({
      startPoint: {
        x: x,
        y: y
      },
      endPoint: {
        x: x,
        y: y + 100
      },
      duration: 300
    })

    await page.waitFor(500);
    const ret = await page.data('triggered')
    expect(ret).toBe(true)
  })
})
