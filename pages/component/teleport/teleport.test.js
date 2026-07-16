const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIOS = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isAndroid || isIOS || isHarmony
const isVapor = process.env.UNI_APP_X_DOM2 === 'true'
const PAGE_PATH = '/pages/component/teleport/teleport'

const TARGET_CASES = [
  { title: 'page', targetIndex: 0, containerSelector: 'page', rectId: 'page', bottomAnchorRectId: 'teleport-page-bottom-anchor', allowScrollOverflow: true, description: '页面根节点' },
  { title: '#id', targetIndex: 1, containerSelector: '#teleport-id-target', rectId: 'teleport-id-target', description: '指定 id 容器' },
  { title: 'ref', targetIndex: 2, containerSelector: '#teleport-ref-target', rectId: 'teleport-ref-target', description: '模板 ref 容器' }
]
const RECT_TOLERANCE = 1

describe('teleport', () => {
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

  async function setPageData(data) {
    await page.setData({ data })
    await page.waitFor(300)
  }

  async function setTargetByIndex(targetIndex) {
    await page.callMethod('setTargetByIndex', targetIndex)
    await page.waitFor(300)
  }

  async function switchTargetDestroyed(targetIndex) {
    await setPageData({ showTeleport: false })
    await setTargetByIndex(targetIndex)
    await setPageData({ teleportDisabled: false })
  }

  async function createTeleport() {
    await setPageData({ showTeleport: true })
  }

  async function destroyTeleport() {
    await setPageData({ showTeleport: false })
  }

  async function setDisabled(disabled) {
    await setPageData({ teleportDisabled: disabled })
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
    const containerSelector = fallbackContainerSelector ?? targetCase.containerSelector
    const rectId = fallbackRectId ?? targetCase.rectId
    const allowScrollOverflow = fallbackContainerSelector == null && targetCase.allowScrollOverflow === true
    const container = await page.$(containerSelector)
    const content = await page.$('#teleport-content')
    expect(container == null).toBe(false)
    expect(content == null).toBe(false)
    expect(await content.text()).toContain(targetCase.description)

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

    if (fallbackContainerSelector == null && targetCase.bottomAnchorRectId != null) {
      const bottomAnchorRect = await getElementRect(targetCase.bottomAnchorRectId)
      expect(bottomAnchorRect == null).toBe(false)
      expect(contentRect.top).toBeGreaterThanOrEqual(bottomAnchorRect.bottom - RECT_TOLERANCE)
    }
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

  it('switches target dynamically across all targets', async () => {
    await switchTargetDestroyed(TARGET_CASES[0].targetIndex)
    await createTeleport()
    await expectContentInside(TARGET_CASES[0])

    for (let i = 1; i < TARGET_CASES.length; i++) {
      const targetCase = TARGET_CASES[i]
      await setTargetByIndex(targetCase.targetIndex)
      await expectContentInside(targetCase)
    }

    await setTargetByIndex(TARGET_CASES[0].targetIndex)
    await expectContentInside(TARGET_CASES[0])
  })
})
