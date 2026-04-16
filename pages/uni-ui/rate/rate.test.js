const PAGE_PATH = '/pages/uni-ui/rate/rate'

describe('rate', () => {
  let page

  beforeEach(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  async function setPageData(newData) {
    return await page.setData(newData)
  }

  it('rate model value', async () => {
    expect(await page.data('vModelRateValue.value')).toBe(0)
    expect(await page.data('rateValue.value')).toBe(0)

    await setPageData({
      vModelRateValue: 2
    })
    expect(await page.data('vModelRateValue.value')).toBe(2)

    await setPageData({
      vModelRateValue: 4
    })
    expect(await page.data('vModelRateValue.value')).toBe(4)

    await setPageData({
      rateValue: 5
    })
    expect(await page.data('rateValue.value')).toBe(5)
  })

  it('rate snapshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  })
})
