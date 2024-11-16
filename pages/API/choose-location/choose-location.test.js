describe('dialog page', () => {
  if (process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true') {
		it('skip app-webview', () => {
			expect(1).toBe(1)
		})
		return
	}

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/choose-location/choose-location')
    await page.waitFor('view');
  });

  it('dialogPage should empty', async () => {
		await page.callMethod('chooseLocation')
		await page.waitFor(1000)
		const dialogPagesNum = await page.data('dialogPagesNum')
		expect(dialogPagesNum).toBe(0)
  })
})
