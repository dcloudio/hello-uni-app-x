const PAGE_PATH = '/pages/API/interceptor/interceptor'

describe('interceptor', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it('no Interceptor', async () => {
    const newPage = await program.navigateTo('./page1')
    await newPage.waitFor('text')
    const num = (await newPage.data()).page
    await program.navigateBack()
    expect(num).toBe(1)
    // 新增 navigator 元素
    const elementNavigatorButton = await page.$('.navigatorButton')
    await elementNavigatorButton.tap()
    await page.waitFor(300)

    const currentPage = await program.currentPage()
    expect(currentPage.path).toBe('pages/API/interceptor/page1')
    await program.navigateBack()
  })

  it('addInterceptor', async () => {
    await page.callMethod('addInterceptor')
    const newPage = await program.navigateTo('./page1')
    await newPage.waitFor('text')
    const num = (await newPage.data()).page
    await program.navigateBack()
    expect(num).toBe(2)
    // 新增 navigator 元素
    const elementNavigatorButton = await page.$('.navigatorButton')
    await elementNavigatorButton.tap()
    await page.waitFor(300)

    const currentPage = await program.currentPage()
    expect(currentPage.path).toBe('pages/API/interceptor/page2')
    await program.navigateBack()
  })

  it('removeInterceptor', async () => {
    await page.callMethod('removeInterceptor')
    const newPage = await program.navigateTo('./page1')
    await newPage.waitFor('text')
    const num = (await newPage.data()).page
    await program.navigateBack()
    expect(num).toBe(1)
    // 新增 navigator 元素
    const elementNavigatorButton = await page.$('.navigatorButton')
    await elementNavigatorButton.tap()
    await page.waitFor(300)

    const currentPage = await program.currentPage()
    expect(currentPage.path).toBe('pages/API/interceptor/page1')
    await program.navigateBack()
  })

  it('addSwitchTabInterceptor', async () => {
    await page.callMethod('addSwitchTabInterceptor')
    await page.callMethod('switchTab')
    await page.waitFor(300)
    const currentPage = await program.currentPage()
    expect(currentPage.path).toBe('pages/tabBar/API')
  })

  it('removeSwitchTabInterceptor', async () => {
    const currentPage1 = await program.navigateTo(PAGE_PATH)
    await currentPage1.callMethod('addSwitchTabInterceptor')
    await currentPage1.callMethod('removeSwitchTabInterceptor')
    await currentPage1.callMethod('switchTab')
    await page.waitFor(300)
    const currentPage2 = await program.currentPage()
    expect(currentPage2.path).toBe('pages/tabBar/component')
  })

})
