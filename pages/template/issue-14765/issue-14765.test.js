const PAGE_PATH = '/pages/examples/bind-id-prop/bind-id-prop'

// TODO 此测试例本应放在hello-uvue内，但是目前hello-uvue测试时是关闭virtualHost的，暂时放在这里

describe(PAGE_PATH, () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLowerCase()
  const isAndroid = platformInfo.startsWith('android')
  const isWeb = platformInfo.startsWith('web')
  const isMP = platformInfo.startsWith('mp')
  let page

	beforeAll(async () => {
		page = await program.reLaunch(PAGE_PATH)
		await page.waitFor('view')
	})
  it('basic bind id test', async () => {
		await page.waitFor(500)
    const {
      testNode1,
      testNode2
    } = await page.data()
    expect(testNode1).toBe(true)
    expect(testNode2).toBe(true)
	})
})
