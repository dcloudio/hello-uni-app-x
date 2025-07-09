const PAGE_PATH = '/pages/component/picker-view/wrap-picker-view'
let page, pickerViewEl;

describe('wrap-picker-view', () => {
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')

  })

  it('not crash', async () => {
    const element = await page.$('.btn_toggle')
    await element.tap()
    await page.waitFor(1000)
    const childExits = await page.$('.picker-view')
    expect(!!childExits).toBe(true)

  })

})
