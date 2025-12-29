const PAGE_PATH = '/pages/CSS/style-isolation/style-isolation'

describe('style-isolation', () => {
  if (process.env.UNI_APP_X_DOM2 !== 'true') {
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
		console.log('levelEl',levelEl)

		const levelElStyle = await levelEl.style('background-color')
		console.log('levelElStyle',levelElStyle)

		expect(levelElStyle).toBe('rgb(0, 170, 255)')

  })
});
