jest.setTimeout(130000)
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isHarmony = platformInfo.startsWith('harmony')

describe('list-view-multiplex-video', () => {
  if (isMP) {
  	it('skip mp', () => {
  		expect(1).toBe(1)
  	})
  	return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/list-view/list-view-multiplex-video')
    await page.waitFor('list-view')
    await page.waitFor(4000)
  })

  it('screenshot', async () => {
    await page.setData({ isTesting: true })
    const image = await program.screenshot({ fullPage: true });
    expect(image).toSaveImageSnapshot()
  })
})
