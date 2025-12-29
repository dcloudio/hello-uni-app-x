const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isAndroid || isIos || isHarmony
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

const PAGE_PATH = '/pages/css/style-isolation/style-isolation'

describe('style-isolation', () => {
  // 此测试例暂时只对鸿蒙开放
  if(!isHarmony) {
    it('skip', () => {
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
		
		const levelChildEl = await levelEl.$('.box')
		console.log('levelChildEl',levelChildEl)
		
		const levelChildStyle = await levelChildEl.style('background-color')
		console.log('levelChildStyle',levelChildStyle)
		
		expect(levelChildStyle).toBe('#00aaff!important')
		
  })
});
