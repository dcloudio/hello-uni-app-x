const PAGE_PATH = '/pages/component/mixin-datacom/mixin-datacom'

describe('mixin-datacom', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('mixinDatacomGet', async () => {
    const datacom = await page.$('.datacom')
    const children = await datacom.$$('.list-item')
    expect(children.length > 0).toBe(true)
  })
})
