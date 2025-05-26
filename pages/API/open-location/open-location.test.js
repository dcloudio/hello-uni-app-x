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

  it('dialogPage should be opened', async () => {
		const dialogPagesNum = await page.data('dialogPagesNum')
		expect(dialogPagesNum).toBe(1)
	})
	
	afterAll(async () => {
		await page.callMethod('setLifeCycleNum', originLifeCycleNum)
  });
})
