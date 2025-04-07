const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isHarmony = platformInfo.startsWith('harmony')

describe('component-native-sticky-section', () => {
  if (isMP || isHarmony) {
  	it('skip mp', () => {
  		expect(1).toBe(1)
  	})
  	return
  }

  it('check_issues-16118', async () => {
    let page = await program.reLaunch('/pages/component/sticky-section/issues-16118')
    await page.waitFor(500)
    //显示内容
    await page.callMethod('switchDisplay')
    await page.waitFor(1500)
    //隐藏内容
    await page.callMethod('switchDisplay')
    await page.waitFor(1500)
    //显示内容
    await page.callMethod('switchDisplay')
    await page.waitFor(500)
    //截图查看内容位置是否符合预期
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
  })
})
