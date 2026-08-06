jest.setTimeout(30000)

const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMpWeixin = platformInfo === 'mp-weixin'
const isMpWeixinSimulator =
  isMpWeixin && !require('../../../env.js')['mp-weixin'].remote
const itRewriteRoute = isMpWeixinSimulator ? it.skip : it

const PAGE_PATH = '/pages/API/app-route/app-route'
const PAGE_ROUTE = 'pages/API/app-route/app-route'
const TARGET_PATH = '/pages/API/app-route/app-route-target'
const TARGET_ROUTE = 'pages/API/app-route/app-route-target'

describe('应用路由事件', () => {
  let page

  const waitForPageReady = async () => {
    if (isMpWeixin) {
      await page.waitFor(300)
    } else {
      await page.waitFor('view')
    }
  }

  beforeEach(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await waitForPageReady()
    await page.callMethod('clearRecords')
  })

  it('监听并注销应用路由事件', async () => {
    page = await program.navigateTo(`${TARGET_PATH}?from=normal`)
    await waitForPageReady()
    expect((await page.data('data')).from).toBe('normal')

    page = await program.navigateBack()
    await waitForPageReady()
    let data = await page.data('data')
    expect(data.beforeAppRouteCount).toBe(2)
    expect(data.appRouteCount).toBe(2)
    expect(data.beforeAppRouteEvents.length).toBe(2)
    expect(data.appRouteEvents.length).toBe(2)
    expect(data.lastNavigateToBeforePath).toBe(TARGET_ROUTE)
    expect(data.lastNavigateToAppRoutePath).toBe(TARGET_ROUTE)

    await page.callMethod('clearRecords')
    await page.callMethod('stopListen')
    page = await program.navigateTo(`${TARGET_PATH}?from=normal`)
    await waitForPageReady()
    page = await program.navigateBack()
    await waitForPageReady()
    data = await page.data('data')
    expect(data.beforeAppRouteCount).toBe(0)
    expect(data.appRouteCount).toBe(0)
    expect(data.beforeAppRouteEvents.length).toBe(0)
    expect(data.appRouteEvents.length).toBe(0)
    expect(data.isListening).toBe(false)
  })

  itRewriteRoute('重写下一次路由', async () => {
    await page.callMethod('enableRewriteNextRoute')
    page = await program.navigateTo(`${TARGET_PATH}?from=source`)
    await waitForPageReady()
    expect((await page.data('data')).from).toBe('rewrite')

    page = await program.navigateBack()
    await waitForPageReady()
    const data = await page.data('data')
    expect(data.rewriteRouteResult.replace(/\s/g, '')).toBe('rewriteRoute:ok')
    expect(data.lastNavigateToBeforePath).toBe(TARGET_ROUTE)
    expect(data.lastNavigateToAppRoutePath).toBe(TARGET_ROUTE)
    expect(data.beforeAppRouteCount).toBe(3)
    expect(data.appRouteCount).toBe(2)
    expect(data.beforeAppRouteEvents.length).toBe(3)
    expect(data.appRouteEvents.length).toBe(2)
  })

  afterEach(async () => {
    const currentPage = await program.currentPage()
    if (currentPage.path === PAGE_ROUTE) {
      await currentPage.callMethod('stopListen')
    }
  })
})
