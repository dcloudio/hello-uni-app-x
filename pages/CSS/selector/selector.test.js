const isDom2 = process.env.UNI_APP_X_DOM2 === 'true'

describe('/pages/CSS/selector/selector.uvue', () => {
  if (!isDom2) {
    it('skip non-dom2', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page

  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/selector/selector')
    await page.waitFor('view')
  })

  it('get page node background-color', async () => {
    const pageElement = await page.$('.uni-non-public-page')
    expect(pageElement).toBeTruthy()

    const backgroundColor = await pageElement.style('background-color')
    expect(['#0000FFFF', 'rgb(0,0,255)', 'rgb(0, 0, 255)']).toContain(backgroundColor)
  })
})
