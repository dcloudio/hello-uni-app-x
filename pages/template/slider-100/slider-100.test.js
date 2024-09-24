const PAGE_PATH = '/pages/template/slider-100/slider-100'

describe('slider', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('value', async () => {
    const sliderValue = 80
    await page.setData({
      sliderValue: sliderValue,
    })
    await page.waitFor(100)

    // TODO 暂时仅获取第一个
    const slider1 = await page.$('.slider')
    // TODO
    const newValue = await slider1.property('value')
    expect(newValue.toString()).toBe(sliderValue + '')

    // const slider100 = await page.$$('.slider')
    // for (let i = 0; i < slider100.length; i++) {
    //   const slider = slider100[i];
    //   expect(await slider.property('value')).toBe(sliderValue)
    // }
  })
})
