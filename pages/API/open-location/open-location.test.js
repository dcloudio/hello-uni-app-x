const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isIos = platformInfo.startsWith('ios')

describe('dialog page', () => {
  if (process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true') {
  	it('skip app-webview', () => {
  		expect(1).toBe(1)
  	})
  	return
  }
  if (isMP) {
  	it('skip mp', () => {
  		expect(1).toBe(1)
  	})
  	return
  }

	let page;
	let originLifeCycleNum;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/open-location/open-location')
		await page.waitFor('view');

		originLifeCycleNum = await page.callMethod('getLifeCycleNum')

		await page.callMethod('openLocation')
		await page.waitFor(1000)
  });

  it('dialogPage should empty', async () => {
		const dialogPagesNum = await page.data('dialogPagesNum')
		expect(dialogPagesNum).toBe(0)
	})

	it('should trigger parent hide', async () => {
		const lifecycleNum = await page.callMethod('getLifeCycleNum')
		expect(lifecycleNum).toBe(originLifeCycleNum - 1)
	})
	if (isIos) {
		// 15以下的模拟器所对应的xcode不能编译自定义插件，大于15是因为某台设备，会用xcode14.1跑15.5的设备
    let version = process.env.uniTestPlatformInfo
    let split = version.split(" ")
		version = parseInt(split[split.length - 1])
		if (version > 15) {
			it('call openLocation in uts plugin', async () => {
				page = await program.reLaunch('/pages/API/open-location/open-location')
				await page.waitFor('view');
				await page.callMethod('openLocationByPlugin')
				await page.waitFor(1000)
				const lifecycleNum = await page.callMethod('getLifeCycleNum')
				expect(lifecycleNum).toBe(originLifeCycleNum - 1)
			})
		}
	}

	afterAll(async () => {
		await page.callMethod('setLifeCycleNum', originLifeCycleNum)
  });
})
