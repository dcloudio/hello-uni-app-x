const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isWeb = platformInfo.startsWith('web')

describe('issue-17662', () => {
	if (isMP || isWeb) {
		it('skip', () => {
			expect(1).toBe(1)
		})
		return
	}
	let page

	beforeAll(async () => {
		page = await program.reLaunch('/pages/component/global-events/issue-17662')
		await page.waitFor(600)
	})

	it('issue17662', async () => {

		await program.tap({
			x: 50,
			y: 150,
			duration: 1000
		})
		await page.waitFor(300)

		var longpressItem = await page.data('longpressItem')
		expect(longpressItem).toBe(true)

		var longpressText = await page.data('longpressText')
		expect(longpressText).toBe(true)

		await page.setData({
			'scrollTop': 2000,
			'isStopPropagation': true,
      'longpressItem': false,
      'longpressText': false
		})
		await page.waitFor(500)

		await program.tap({
			x: 50,
			y: 150,
			duration: 1000
		})
		await page.waitFor(300)

    longpressItem = await page.data('longpressItem')
		expect(longpressItem).toBe(false)

		longpressText = await page.data('longpressText')
		expect(longpressText).toBe(true)
	})
})
