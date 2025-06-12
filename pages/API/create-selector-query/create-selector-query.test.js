const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isWeb = platformInfo.startsWith('web')

const PAGE_PATH = '/pages/API/create-selector-query/create-selector-query'

const RECT_LEFT = 15;
const RECT_WIDTH = 150;
const RECT_HEIGHT = 100;

describe('nodes-info', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it("screenshot", async () => {
    const image = await program.screenshot({ fullPage: true });
    expect(image).toSaveImageSnapshot();
  })

  it('get-root-node-info', async () => {
    // 测试 class 选择器
    await getRootNode('.page')

    // 测试 id 选择器
    await getRootNode('#page')

    // 测试 标签 选择器
    // await getRootNode('page')
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
    expect(nodeInfo2.left > 180).toBe(true)
    expect(nodeInfo2.top > 220).toBe(true)
    expect(Math.round(nodeInfo2.width)).toBe(RECT_WIDTH)
    expect(Math.round(nodeInfo2.height)).toBe(RECT_HEIGHT)
  })
  if(!isMP) {
    // 小程序端启用了虚拟host，无法获取到子组件
    it('get-node-info-child', async () => {
      const child = await page.$('.node-child')
      const childData = await child.data()
      console.log('get-node-info-child.childData.top', childData.top);
      expect(childData.top > 100).toBe(true)
    })
  }

  it('multi-child', async () => {
    const pageData = await page.data()
    expect(pageData.selectCount).toBe(1)
    expect(pageData.selectAllCount).toBe(2)
  })

  // #ifdef APP
  //检测onResize获取BoundingClientRect信息是否有效
  /* it('check_resizeRectValid', async () => {
    const resizeRectValid = await page.data('resizeRectValid')
    expect(resizeRectValid).toBe(true)
  }) */
  // #endif

  if (!(isWeb || isMP)) {
    it('test fields', async () => {
      const pageData = await page.data()
      expect(pageData.fieldsResultContainNode).toBe(true)
    })

    it('test node', async () => {
      const pageData = await page.data()
      expect(pageData.nodeResultContainNode).toBe(true)
    })
  }
})

async function getRootNode(selector) {
  const page = await program.currentPage()

  await page.setData({
    rootNodeInfo: null,
  })
  await page.waitFor(100)

  await page.callMethod('getRootNodeInfo', selector)
  await page.waitFor(100)

  const data = await page.data()
  expect(data.rootNodeInfo != null).toBe(true)
}
