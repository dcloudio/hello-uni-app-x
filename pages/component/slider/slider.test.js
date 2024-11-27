const PAGE_PATH = '/pages/component/slider/slider'

describe('slider', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.startsWith('android')
  const isIOS = platformInfo.startsWith('ios')
  const isMP = platformInfo.startsWith('mp')
  const isWeb = platformInfo.startsWith('web')
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  // it('change', async () => {})
  it('value', async () => {
    const slider = await page.$('#slider-custom-color-and-size')

    const sliderValue = 80
    await page.setData({
      sliderValue: sliderValue,
    })
    await page.waitFor(100)
    // TODO
    const newValue = await slider.property('value')
    expect(newValue.toString()).toBe(sliderValue + '')
  })
  if(!isMP) {
    it('color', async () => {
      const slider = await page.$('#slider-custom-color-and-size')
      expect(await slider.attribute('backgroundColor')).toBe('#000000')
      expect(await slider.attribute('activeColor')).toBe('#FFCC33')
      expect(await slider.attribute('blockColor')).toBe('#8A6DE9')
      expect(await slider.attribute('activeBackgroundColor')).toBe('#FFCC33')
      expect(await slider.attribute('foreColor')).toBe('#8A6DE9')

      const backgroundColor = '#008000'
      const activeColor = '#00FF00'
      const blockColor = '#0000A0'

      await page.setData({
        sliderBackgroundColor: backgroundColor,
        sliderActiveColor: activeColor,
        sliderBlockColor: blockColor,
      })
      await page.waitFor(100)
      expect(await slider.attribute('backgroundColor')).toBe(backgroundColor)
      expect(await slider.attribute('activeColor')).toBe(activeColor)
      expect(await slider.attribute('activeBackgroundColor')).toBe(activeColor)
      expect(await slider.attribute('blockColor')).toBe(blockColor)
      expect(await slider.attribute('foreColor')).toBe(blockColor)
    })
  }
  if(isMP) {
    it('block-size', async () => {
      const slider = await page.$('#slider-custom-color-and-size')
      expect(await slider.property('blockSize')).toBe(20)

      const blockSize = 18
      await page.setData({
        sliderBlockSize: blockSize,
      })
      await page.waitFor(100)
      expect(await slider.property('blockSize')).toBe(blockSize)
    })
  } else {
    it('block-size', async () => {
      const slider = await page.$('#slider-custom-color-and-size')
      expect(await slider.attribute('blockSize')).toBe(20 + '')

      const blockSize = 18
      await page.setData({
        sliderBlockSize: blockSize,
      })
      await page.waitFor(100)
      expect(await slider.attribute('blockSize')).toBe(blockSize + '')
    })
  }
})
