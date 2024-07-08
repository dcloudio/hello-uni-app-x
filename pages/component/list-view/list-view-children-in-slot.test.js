describe('list-view-children-in-slot', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/list-view/list-view-children-in-slot')
    await page.waitFor('list-view')
    await page.waitFor(300)
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
    await page.waitFor(500)

    listItems = await page.$$('list-item')
    expect(listItems.length).toBe(11)

    texts = await page.$$('.text-in-list-item')
    for (let i = 0; i < texts.length; i++) {
      expect(await texts[i].text()).toBe(`${i > (texts.length / 2 - 1)? i - texts.length / 2 : i}`)
    }

    const emptyBtn = await page.$('#empty-btn')
    await emptyBtn.tap()
    await page.waitFor(500)
    listItems = await page.$$('list-item')
    expect(listItems.length).toBe(3)

    await addBtn.tap()
    await page.waitFor(500)
    listItems = await page.$$('list-item')
    expect(listItems.length).toBe(5)

    texts = await page.$$('.text-in-list-item')
    for (let i = 0; i < texts.length; i++) {
      expect(await texts[i].text()).toBe(`0`)
    }
  })
})
