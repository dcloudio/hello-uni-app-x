const PAGE_PATH = '/pages/template/tabbar-center-action/tabbar-center-action'

describe('template-tabbar-center-action', () => {
  let page

  async function waitForHomeSelected() {
    const start = Date.now()
    await page.waitFor(async () => {
      const tabPages = await page.$$('.tab-page')
      if (tabPages.length == 0) {
        return Date.now() - start > 3000
      }
      const homeVisibility = await tabPages[0].style('visibility')
      return homeVisibility == 'visible' || Date.now() - start > 3000
    })
  }

  async function waitForMineSelected() {
    const start = Date.now()
    await page.waitFor(async () => {
      const tabPages = await page.$$('.tab-page')
      if (tabPages.length < 2) {
        return Date.now() - start > 3000
      }
      const mineVisibility = await tabPages[1].style('visibility')
      return mineVisibility == 'visible' || Date.now() - start > 3000
    })
  }

  async function resetToHomeTop() {
    const tabTexts = await page.$$('.tab-item-text')
    const mineText = tabTexts[tabTexts.length - 1]
    const mineColor = await mineText.style('color')
    if (mineColor == 'rgb(255, 255, 255)' || mineColor == '#FFFFFF') {
      const tabItems = await page.$$('.tab-item')
      await tabItems[0].tap()
      await waitForHomeSelected()
      await page.waitFor(300)
    }

    const listView = await page.$('.list')
    expect(listView).not.toBeNull()
    expect(typeof listView.scrollTo).toBe('function')
    await listView.scrollTo(0, 500)
    await page.waitFor(400)

    let arrow = await page.$('.tab-item-arrow')
    if (arrow != null) {
      const tabItems = await page.$$('.tab-item')
      await tabItems[0].tap()
      await page.waitFor(400)
      arrow = await page.$('.tab-item-arrow')
      if (arrow != null) {
        await tabItems[0].tap()
        await page.waitFor(600)
      }
    }
  }

  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
    await page.waitFor('scroll-view')
    await page.waitFor(800)
  })

  beforeEach(async () => {
    await resetToHomeTop()
  })

  it('renders home tab content and center action button initially', async () => {
    const items = await page.$$('.list-item')
    const plusText = await page.$('.btn-plus-text')
    const loginButton = await page.$('button')
    const tabPages = await page.$$('.tab-page')
    const tabTexts = await page.$$('.tab-item-text')

    expect(items.length).toBeGreaterThan(0)
    expect(await plusText.text()).toBe('+')
    expect(loginButton).toBeNull()
    expect(tabPages.length).toBe(1)
    expect(await tabTexts[0].text()).toBe('首页')
    expect(await tabTexts[1].text()).toBe('我的')
    await waitForHomeSelected()
    expect(await tabPages[0].style('visibility')).toBe('visible')
  })

  it('lazy loads mine tab and keeps both tab pages mounted after switching', async () => {
    const tabItems = await page.$$('.tab-item')
    await tabItems[1].tap()
    await waitForMineSelected()
    await page.waitFor(300)

    const loginButton = await page.$('button')
    const tabPages = await page.$$('.tab-page')
    expect(loginButton).not.toBeNull()
    expect(await loginButton.text()).toBe('登录')
    expect(tabPages.length).toBe(2)
    expect(await tabPages[1].style('visibility')).toBe('visible')

    await tabItems[0].tap()
    await waitForHomeSelected()
    await page.waitFor(300)

    const items = await page.$$('.list-item')
    expect(items.length).toBeGreaterThan(0)
    expect((await page.$$('.tab-page')).length).toBe(2)
    expect(await tabPages[0].style('visibility')).toBe('visible')
  })

  it('shows back-to-top arrow after home list scroll and hides it after tapping home again', async () => {
    const listView = await page.$('.list')
    expect(listView).not.toBeNull()
    expect(await page.$('.tab-item-arrow')).toBeNull()

    await listView.scrollTo(0, 900)
    await page.waitFor(600)

    const arrow = await page.$('.tab-item-arrow')
    expect(arrow).not.toBeNull()

    const tabItems = await page.$$('.tab-item')
    await tabItems[0].tap()
    await page.waitFor(600)

    expect(await page.$('.tab-item-arrow')).toBeNull()
  })
})
