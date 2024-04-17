describe('api-resize-observer', () => {
  if (!process.env.uniTestPlatformInfo.startsWith('android')) {
    it('dummyTest', async () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/resize-observer/resize-observer')
    await page.waitFor('button')
  })

  it('check_resize-observer', async () => {
    await page.waitFor(600)
    const image = await program.screenshot();
    expect(image).toSaveImageSnapshot();
  })
})
