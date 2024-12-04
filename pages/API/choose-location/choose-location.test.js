const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')

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
    page = await program.reLaunch('/pages/API/choose-location/choose-location')
		await page.waitFor('view');

		originLifeCycleNum = await page.callMethod('getLifeCycleNum')

		await page.callMethod('chooseLocation')
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

	afterAll(async () => {
		await page.callMethod('setLifeCycleNum', originLifeCycleNum)
  });
})
