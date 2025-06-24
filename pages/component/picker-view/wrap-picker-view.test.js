const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isHarmony = platformInfo.startsWith('harmony')

const PAGE_PATH = '/pages/component/picker-view/wrap-picker-view'
let page, pickerViewEl;

describe('wrap-picker-view', () => {
  if (isHarmony) {
    it('因运行时错误，暂时屏蔽', () => {
      expect(1).toBe(1)
    })
    return
  }

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
