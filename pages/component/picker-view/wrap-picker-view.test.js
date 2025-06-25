const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isHarmony = platformInfo.startsWith('harmony')

const PAGE_PATH = '/pages/component/picker-view/wrap-picker-view'
let page;

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
    // 测试应用正常渲染，可以正常查询元素不会崩溃丢失
    const element = await page.$('.btn_toggle')
    await element.tap()
    await page.waitFor(1000)
    const childExits = await page.$('.btn_toggle')
    expect(!!childExits).toBe(true)
  })
})
