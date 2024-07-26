const PAGE_PATH = '/pages/API/create-canvas-context-async/create-canvas-context-async'

describe('create-canvas-context-async', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it('page canvas', async () => {
    await page.waitFor(100)
    const data = await page.data()
    expect(data.isCanvasContextNull).toBe(true)
  })

  it('component canvas', async () => {
    // child-canvas
    await page.waitFor(100)
    // const element = await page.$('.node-child-component')
    const element = await page.$('child-canvas')
    const data = await page.data()
    expect(data.isCanvasContextNull).toBe(true)

  })
})