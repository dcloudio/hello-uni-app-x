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
  it("测试异步创建canvas上下文", async () => {
    await page.callMethod('useAsync');
    // const element = await page.$('#testCanvasContext')
    expect(await element.text()).toBe('true')
  })
  // it("测试同步创建canvas上下文", async () => {
  //   await page.callMethod('useAsync');
  //   const element = await page.$('#testCanvasContext')
  //   expect(await element.text()).toBe('true')
  // })
  it('测试 canvasToDataURL', async () => {
    await page.callMethod('canvasToDataURL');
    const element = await page.$('#testToDataURLResult')
    expect(await element.text()).toBe('true')
  })
  it('测试 createImage', async () => {
    await page.callMethod('onCreateImage');
    await page.waitFor(500) // 加载图片
    const element = await page.$('#testCreateImage')
    expect(await element.text()).toBe('true')
  })
})
