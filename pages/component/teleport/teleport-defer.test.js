const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIOS = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isAndroid || isIOS || isHarmony
const isVapor = process.env.UNI_APP_X_DOM2 === 'true'
const PAGE_PATH = '/pages/component/teleport/teleport-defer'

describe('teleport-defer', () => {
  if (!isApp || !isVapor) {
    it('only supports app vapor', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page

  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
    await page.waitFor(300)
  })

  async function prepareTeleport(useDefer, targetAfter) {
    await page.waitFor(300)
    await page.setData({
      data: {
        showTeleport: false
      }
    })
    await page.waitFor(300)
    await page.setData({
      data: {
        useDefer,
        targetAfter
      }
    })
    await page.waitFor(300)
    await page.setData({
      data: {
        showTeleport: true
      }
    })
    await page.waitFor(300)
  }

  async function expectContentInsideTarget(targetTitle) {
    const target = await page.$('#teleport-defer-target')
    const content = await page.$('#teleport-defer-content')
    expect(target == null).toBe(false)
    expect(content == null).toBe(false)
    expect(await target.text()).toContain(targetTitle)
    expect(await content.text()).toContain('to: #teleport-defer-target')

    const targetRect = await page.callMethod('getBoundingClientRectForTest', 'teleport-defer-target')
    const contentRect = await page.callMethod('getBoundingClientRectForTest', 'teleport-defer-content')
    expect(targetRect == null).toBe(false)
    expect(contentRect == null).toBe(false)

    expect(contentRect.left).toBeGreaterThanOrEqual(targetRect.left)
    expect(contentRect.top).toBeGreaterThanOrEqual(targetRect.top)
    expect(contentRect.right).toBeLessThanOrEqual(targetRect.right)
    expect(contentRect.bottom).toBeLessThanOrEqual(targetRect.bottom)
  }

  it('renders into target declared after teleport when defer is enabled', async () => {
    await prepareTeleport(true, true)

    await expectContentInsideTarget('后置目标')
  })

  it('renders into target declared before teleport when defer is enabled', async () => {
    await prepareTeleport(false, false)

    await expectContentInsideTarget('前置目标')
  })
})
