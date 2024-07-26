const PAGE_PATH = '/pages/API/create-canvas-context-async/create-canvas-context-async'

describe('create-canvas-context-async', () => {
	if (!process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
		it('ios only', () => {
			expect(1).toBe(1)
		})
		return
	}
	let page
	beforeAll(async () => {
		page = await program.reLaunch(PAGE_PATH)
		await page.waitFor('view')
	})

	it('page canvas', async () => {
		await page.waitFor(100)
		const data = await page.callMethod('getContext')
		expect(data.ctx).toBe('object')
		expect(data.hasFillRect).toBe(true)
	})

	it('component canvas', async () => {
		// child-canvas
		await page.waitFor(100)
		// const element = await page.$('.node-child-component')
		const element = await page.$('child-canvas')
		const data = await page.callMethod('getContext')
		expect(data.ctx).toBe('object')
		expect(data.hasFillRect).toBe(true)
	})
})
