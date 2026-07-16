const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIOS = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isWeb = platformInfo.startsWith('web')
const isApp = isAndroid || isIOS || isHarmony
const isSupported = isApp || isWeb
const PAGE_PATH = '/pages/component/teleport/teleport-defer'

describe('teleport-defer', () => {
  if (!isSupported) {
    it('only supports app and web', () => {
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
    await page.callMethod('setShowTeleport', false)
    await page.waitFor(300)
    await page.callMethod('setUseDefer', useDefer)
    await page.callMethod('setTargetAfter', targetAfter)
    await page.waitFor(300)
    await page.callMethod('setTargetVisible', true)
    await page.waitFor(300)
    await page.callMethod('setShowTeleport', true)
    await page.waitFor(1000)
  }

  async function expectContentInsideTarget() {
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

    await expectContentInsideTarget()
  })

  it('renders into target declared before teleport when defer is enabled', async () => {
    await prepareTeleport(false, false)

    await expectContentInsideTarget()
  })
})
