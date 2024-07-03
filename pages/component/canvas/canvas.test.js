let page

beforeAll(async () => {
  page = await program.reLaunch('/pages/component/canvas/canvas')
  await page.waitFor(2000)
})

describe('Canvas.uvue', () => {
  it('toBlob', async () => {
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('web')) {
      const {
        testToBlobResult,
        testToDataURLResult
      } = await page.data()

      expect(testToBlobResult).toBe(true)
      expect(testToDataURLResult).toBe(true)
    }
  })
})
