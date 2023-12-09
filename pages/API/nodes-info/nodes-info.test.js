const PAGE_PATH = '/pages/API/nodes-info/nodes-info'

const RECT_LEFT = 15;
const RECT_WIDTH = 150;
const RECT_HEIGHT = 100;

describe('nodes-info', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('get-node-info', async () => {
    const btnGetNodeInfo = await page.$('.btn-get-node-info')

    await btnGetNodeInfo.tap()
    await page.waitFor(50)

    const data = await page.data()

    // TODO 和浏览器的计算存在差异
    const nodeInfo = data.nodeInfoList[0]
    expect(Math.round(nodeInfo.left)).toBe(RECT_LEFT)
    expect(Math.round(nodeInfo.width)).toBe(RECT_WIDTH)
    expect(Math.round(nodeInfo.height)).toBe(RECT_HEIGHT)
  })
  it('get-all-node-info', async () => {
    const btnGetAllNodeInfo = await page.$('.btn-get-all-node-info')

    await btnGetAllNodeInfo.tap()
    await page.waitFor(50)

    const data = await page.data()

    const nodeInfo1 = data.nodeInfoList[0]
    expect(Math.round(nodeInfo1.left)).toBe(RECT_LEFT)
    expect(nodeInfo1.top > 220).toBe(true)
    expect(Math.round(nodeInfo1.width)).toBe(RECT_WIDTH)
    expect(Math.round(nodeInfo1.height)).toBe(RECT_HEIGHT)

    const nodeInfo2 = data.nodeInfoList[1]
    expect(nodeInfo2.left > 200).toBe(true)
    expect(nodeInfo2.top > 220).toBe(true)
    expect(Math.round(nodeInfo2.width)).toBe(RECT_WIDTH)
    expect(Math.round(nodeInfo2.height)).toBe(RECT_HEIGHT)
  })
})
