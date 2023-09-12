const PAGE_PATH = '/pages/API/nodes-info/nodes-info'

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
    const nodeInfo = data.nodeInfoList[0]

    expect(nodeInfo.left > 15).toBe(true)
    expect(nodeInfo.width == 150).toBe(true)
    expect(nodeInfo.height == 100).toBe(true)
  })
  it('get-all-node-info', async () => {
    const btnGetAllNodeInfo = await page.$('.btn-get-all-node-info')

    await btnGetAllNodeInfo.tap()
    await page.waitFor(50)

    const data = await page.data()

    const nodeInfo1 = data.nodeInfoList[0]
    expect(nodeInfo1.left > 15).toBe(true)
    expect(nodeInfo1.top > 220).toBe(true)
    expect(nodeInfo1.width == 150).toBe(true)
    expect(nodeInfo1.height == 100).toBe(true)

    const nodeInfo2 = data.nodeInfoList[1]
    expect(nodeInfo2.left > 200).toBe(true)
    expect(nodeInfo2.top > 220).toBe(true)
    expect(nodeInfo2.width == 150).toBe(true)
    expect(nodeInfo2.height == 100).toBe(true)
  })
})