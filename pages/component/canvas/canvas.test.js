let page

beforeAll(async () => {
  // if (!process.env.uniTestPlatformInfo.toLowerCase().startsWith('web')) {
  //   return
  // }
  page = await program.reLaunch('/pages/component/canvas/canvas')
  await page.waitFor(500)
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
    } else {
      // app skip
      expect(true).toBe(true)
    }
  })
  it("测试异步方式", async () => {
    await page.callMethod('useAsync');
    const {
      testCanvasContext,
      testToDataURLResult
    } = await page.data()
    expect(testCanvasContext).toBe(true)
    await page.callMethod('canvasToDataURL');
    expect(testToDataURLResult).toBe(true)
  })
  it("测试同步方式", async () => {
    await page.callMethod('useSync');
    const data = await page.data()
    expect(data.testCanvasContext).toBe(true)
    await page.callMethod('canvasToDataURL');
    expect(data.testToDataURLResult).toBe(true)
  })
})
