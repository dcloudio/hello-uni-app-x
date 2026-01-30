const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isHarmony = platformInfo.startsWith('harmony')
const isWeb = platformInfo.startsWith('web')
const isDom2 = process.env.UNI_APP_X_DOM2 === "true"
const PAGE_PATH = '/pages/CSS/style-isolation/style-isolation'

describe('style-isolation', () => {
  if (!(isWeb || (isDom2 && isHarmony))) {
    it('skip: DOM1 不支持', () => {
      expect(1).toBe(1)
    })
    return
  }

  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it('测试组件的根节点为二级组件时 样式传递', async () => {
    const levelEl = await page.$('.level-child-class')
		const levelElStyle = await levelEl.style('background-color')
    if(isHarmony){
      expect(['#00AAFFFF', 'rgb(0,170,255)']).toContain(levelElStyle)
    }
    if(isWeb){
      expect(levelElStyle).toBe('rgb(0, 170, 255)')
    }
  })

  it('styleIsolation-isolated模式 - 全隔离', async () => {
    const compIsolatedEl = await page.$('.comp-isolated')
    // 样式全隔离，预期组件自身样式紫色
    const comBoxEl = await compIsolatedEl.$('.com-box')
    const comBoxStyle = await comBoxEl.style('background-color')
    if(isHarmony){
      expect(['#D9D1FFFF', 'rgb(217,209,255)']).toContain(comBoxStyle)
    }
    if(isWeb){
      expect(comBoxStyle).toBe('rgb(217, 209, 255)')
    }
    // 验证全局样式无效，预期组件默认字体大小16px
    const globalTestEl = await compIsolatedEl.$('.global-text')
    const globalTestStyle = await globalTestEl.style('font-size')
    expect(globalTestStyle).toBe('16px')
  })

  it('styleIsolation-app模式 - 受全局样式影响', async () => {
    const compAppEl = await page.$('.comp-app')
    // 优先级：全局样式 < 自身样式，预期组件自身样式紫色
    const comBoxEl = await compAppEl.$('.com-box')
    const comBoxStyle = await comBoxEl.style('background-color')
    if(isHarmony){
      expect(['#D9D1FFFF', 'rgb(217,209,255)']).toContain(comBoxStyle)
    }
    if(isWeb){
      expect(comBoxStyle).toBe('rgb(217, 209, 255)')
    }
    // 验证，全局样式有效(字体的粗细bold与 700 等值，大小18px)
    const globalTestEl = await compAppEl.$('.global-text')
    const globalTestWeight = await globalTestEl.style('font-weight')
    const globalTestSize = await globalTestEl.style('font-size')
    expect(globalTestWeight).toBe('700')
    expect(globalTestSize).toBe('18px')
    // 验证，页面样式无效，默认字体大小16px
    const pageTestEl = await compAppEl.$('.page-text')
    const pageTestSize = await pageTestEl.style('font-size')
    expect(pageTestSize).toBe('16px')
  })

  it('styleIsolation-app-and-page模式 - 受全局和页面样式影响', async () => {
    const compAppAndPageEl = await page.$('.comp-app-and-page')
    // 优先级：全局样式 < 组件自身样式 < 页面样式，预期组件应用页面样式（绿色）优先级最高
    const comBoxEl = await compAppAndPageEl.$('.com-box')
    const comBoxStyle = await comBoxEl.style('background-color')
    if(isHarmony){
      expect(['#E8F5E9FF', 'rgb(232,245,233)']).toContain(comBoxStyle)
    }
    if(isWeb){
      expect(comBoxStyle).toBe('rgb(232, 245, 233)')
    }
    // 验证，全局样式有效(字体的粗细bold，大小18px)
    const globalTestEl = await compAppAndPageEl.$('.global-text')
    const globalTestSize = await globalTestEl.style('font-size')
    expect(globalTestSize).toBe('18px')
    // 验证，页面样式有效，字体大小14px
    const pageTestEl = await compAppAndPageEl.$('.page-text')
    const pageTestSize = await pageTestEl.style('font-size')
    expect(pageTestSize).toBe('14px')
  })

});
