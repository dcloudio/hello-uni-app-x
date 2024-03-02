describe('list-view-children-in-slot', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    it('dummyTest', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/list-view/list-view-children-in-slot')
    await page.waitFor('list-view')
  })

  it('basic', async () => {
    let listItems = await page.$$('list-item')
    expect(listItems.length).toBe(9)

    let texts = await page.$$('.text-in-list-item')
    for (let i = 0; i < texts.length; i++) {
      expect(await texts[i].text()).toBe(`${i > (texts.length / 2 - 1)? i - texts.length / 2 : i}`)
    }

    const addBtn = await page.$('#add-btn')
    await addBtn.tap()

    listItems = await page.$$('list-item')
    expect(listItems.length).toBe(11)

    texts = await page.$$('.text-in-list-item')
    for (let i = 0; i < texts.length; i++) {
      expect(await texts[i].text()).toBe(`${i > (texts.length / 2 - 1)? i - texts.length / 2 : i}`)
    }

    const emptyBtn = await page.$('#empty-btn')
    await emptyBtn.tap()

    listItems = await page.$$('list-item')
    expect(listItems.length).toBe(3)

    await addBtn.tap()

    listItems = await page.$$('list-item')
    expect(listItems.length).toBe(5)

    texts = await page.$$('.text-in-list-item')
    for (let i = 0; i < texts.length; i++) {
      expect(await texts[i].text()).toBe(`0`)
    }
  })
})
