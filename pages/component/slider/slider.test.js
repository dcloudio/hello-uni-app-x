const PAGE_PATH = '/pages/component/slider/slider'

describe('slider', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  // it('change', async () => {})
  it('value', async () => {
    const slider = await page.$('.slider-custom-color-and-size')

    const sliderValue = 80
    await page.setData({
      sliderValue: sliderValue,
    })
    await page.waitFor(100)
    expect(await slider.property('value')).toBe(sliderValue)
  })
  it('color', async () => {
    const slider = await page.$('.slider-custom-color-and-size')
    expect(await slider.property('backgroundColor')).toBe('#000000')
    expect(await slider.property('activeColor')).toBe('#FFCC33')
    expect(await slider.property('blockColor')).toBe('#8A6DE9')

    const backgroundColor = '#008000'
    const activeColor = '#00FF00'
    const blockColor = '#0000A0'

    await page.setData({
      sliderBackgroundColor: backgroundColor,
      sliderActiveColor: activeColor,
      sliderBlockColor: blockColor,
    })
    await page.waitFor(100)
    expect(await slider.property('backgroundColor')).toBe(backgroundColor)
    expect(await slider.property('activeColor')).toBe(activeColor)
    expect(await slider.property('blockColor')).toBe(blockColor)
  })
  it('block-size', async () => {
    const slider = await page.$('.slider-custom-color-and-size')
    expect(await slider.property('blockSize')).toBe(20)

    const blockSize = 18
    await page.setData({
      sliderBlockSize: blockSize,
    })
    await page.waitFor(100)
    expect(await slider.property('blockSize')).toBe(blockSize)
  })
})