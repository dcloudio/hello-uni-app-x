function getData(key = '') {
  return new Promise(async (resolve, reject) => {
    const data = await page.data()
    resolve(key ? data[key] : data)
  })
}

const PAGE_PATH = '/pages/component/picker-view/picker-view'

let page
beforeAll(async () => {
  page = await program.reLaunch(PAGE_PATH)
  await page.waitFor('view')
})

describe('PickerView.uvue', () => {
  it('value', async () => {
    const el = await page.$('.picker-view')
    await page.callMethod('setValue')
    await page.waitFor(1000)
    const newValue1 = await el.property('value')
    // TODO
    expect(newValue1.toString()).toEqual('0,0,0')
    if (process.env.UNI_PLATFORM === 'app-android') {
      expect(await getData('result')).toEqual([0, 0, 0])
    }

    await page.callMethod('setValue1')
    await page.waitFor(1000)
    const newValue2 = await el.property('value')
    // TODO
    expect(newValue2.toString()).toEqual('10,10,10')
    if (process.env.UNI_PLATFORM === 'app-android') {
      expect(await getData('result')).toEqual([10, 10, 10])
    }
  })

  it('length', async () => {
    const els = await page.$$('.picker-view')
    expect(els.length).toBe(1)
    const els1 = await page.$$('.picker-view-column')
    expect(els1.length).toBe(3)
  })
  it('indicator-style', async () => {
    const el = await page.$('.picker-view')
    await page.setData({
      indicatorStyle: 'height: 100px;',
    })
    await page.waitFor(500)
    expect(await el.attribute('indicatorStyle')).toBe('height: 100px;')
  })
  it('mask-top-style', async () => {
    const el = await page.$('.picker-view')
    await page.setData({
      maskTopStyle: 'background: #ffffff;',
    })
    expect(await el.attribute('mask-top-style')).toBe('background: #ffffff;')
  })
  it('mask-bottom-style', async () => {
    const el = await page.$('.picker-view')
    await page.setData({
      maskBottomStyle: 'background: #ffffff;',
    })
    expect(await el.attribute('mask-bottom-style')).toBe('background: #ffffff;')
  })

  it('reopen-picker-view-page', async () => {
    await program.switchTab('/')
    await page.waitFor(500)
    page = await program.navigateTo(PAGE_PATH)
    await page.waitFor(500)
    const date = new Date()
    const {
      year,
      month,
      day
    } = await page.data()
    expect(year).toEqual(date.getFullYear())
    expect(month).toEqual(date.getMonth() + 1)
    expect(day).toEqual(date.getDate())
  })
})
