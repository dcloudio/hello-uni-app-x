const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIOS = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isWeb = platformInfo.startsWith('web')
const isApp = isAndroid || isIOS || isHarmony
const isVapor = process.env.UNI_APP_X_DOM2 === 'true'
const isSupported = isApp || isWeb
const isAppVapor = isApp && isVapor
const PAGE_PATH = '/pages/component/teleport/teleport'

const PAGE_TARGET_CASE = { title: 'page', targetIndex: 2, bottomAnchorRectId: 'teleport-page-bottom-anchor' }
const TARGET_CASES = [
  { title: '#id', targetIndex: 0, containerSelector: '#teleport-id-target', rectId: 'teleport-id-target', description: '指定 id 容器' },
  { title: 'ref', targetIndex: 1, containerSelector: '#teleport-ref-target', rectId: 'teleport-ref-target', description: '模板 ref 容器' }
]
const SWITCH_TARGET_CASES = isAppVapor ? [PAGE_TARGET_CASE, ...TARGET_CASES] : TARGET_CASES
const RECT_TOLERANCE = 1

describe('teleport', () => {
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

  async function setTargetByIndex(targetIndex) {
    await page.callMethod('setTargetByIndex', targetIndex)
    await page.waitFor(300)
  }

  async function switchTargetDestroyed(targetIndex) {
    await page.callMethod('setShowTeleport', false)
    await page.waitFor(300)
    await setTargetByIndex(targetIndex)
    await setDisabled(false)
  }

  async function createTeleport() {
    await page.callMethod('setShowTeleport', true)
    await page.waitFor(300)
  }

  async function destroyTeleport() {
    await page.callMethod('setShowTeleport', false)
    await page.waitFor(300)
  }

  async function setDisabled(disabled) {
    await page.callMethod('setTeleportDisabled', disabled)
    await page.waitFor(300)
  }

  async function expectDestroyed() {
    const empty = await page.$('.empty-text')
    expect(empty == null).toBe(false)
    expect(await empty.text()).toBe('Teleport 已销毁')
  }

  async function getElementRect(rectId) {
    if (rectId == null) {
      throw new Error('Target rectId is required for getBoundingClientRectForTest')
    }
    return await page.callMethod('getBoundingClientRectForTest', rectId)
  }

  async function expectContentInside(targetCase, fallbackContainerSelector, fallbackRectId) {
    const rectId = fallbackRectId ?? targetCase.rectId
    const allowScrollOverflow = fallbackContainerSelector == null && targetCase.allowScrollOverflow === true
    const containerRect = await getElementRect(rectId)
    const contentRect = await page.callMethod('getBoundingClientRectForTest', 'teleport-content')
    expect(containerRect == null).toBe(false)
    expect(contentRect == null).toBe(false)

    expect(contentRect.left).toBeGreaterThanOrEqual(containerRect.left - RECT_TOLERANCE)
    expect(contentRect.top).toBeGreaterThanOrEqual(containerRect.top - RECT_TOLERANCE)
    expect(contentRect.right).toBeLessThanOrEqual(containerRect.right + RECT_TOLERANCE)
    if (!allowScrollOverflow) {
      expect(contentRect.bottom).toBeLessThanOrEqual(containerRect.bottom + RECT_TOLERANCE)
    }
  }

  async function expectContentAfterBottomAnchor() {
    const bottomAnchorRect = await getElementRect(PAGE_TARGET_CASE.bottomAnchorRectId)
    const contentRect = await page.callMethod('getBoundingClientRectForTest', 'teleport-content')
    expect(bottomAnchorRect == null).toBe(false)
    expect(contentRect == null).toBe(false)
    expect(contentRect.top).toBeGreaterThanOrEqual(bottomAnchorRect.bottom - RECT_TOLERANCE)
  }

  async function expectTargetContent(targetCase) {
    if (targetCase.title == PAGE_TARGET_CASE.title) {
      await expectContentAfterBottomAnchor()
      return
    }
    await expectContentInside(targetCase)
  }

  TARGET_CASES.forEach((targetCase) => {
    it(`toggles teleport lifecycle for ${targetCase.title} target`, async () => {
      await switchTargetDestroyed(targetCase.targetIndex)

      await createTeleport()
      await expectContentInside(targetCase)

      await destroyTeleport()
      await expectDestroyed()

      await createTeleport()
      await expectContentInside(targetCase)

      await setDisabled(true)
      await expectContentInside(targetCase, '#teleport-origin-box', 'teleport-origin-box')

      await setDisabled(false)
      await expectContentInside(targetCase)
    })
  })

  if (isAppVapor) {
    it('renders page target content after bottom anchor in app vapor', async () => {
      await switchTargetDestroyed(PAGE_TARGET_CASE.targetIndex)

      await createTeleport()
      await expectContentAfterBottomAnchor()
    })
  }

  it('switches target dynamically across all targets', async () => {
    await switchTargetDestroyed(SWITCH_TARGET_CASES[0].targetIndex)
    await createTeleport()
    await expectTargetContent(SWITCH_TARGET_CASES[0])

    for (let i = 1; i < SWITCH_TARGET_CASES.length; i++) {
      const targetCase = SWITCH_TARGET_CASES[i]
      await setTargetByIndex(targetCase.targetIndex)
      await expectTargetContent(targetCase)
    }

    await setTargetByIndex(SWITCH_TARGET_CASES[0].targetIndex)
    await expectTargetContent(SWITCH_TARGET_CASES[0])
  })
})
