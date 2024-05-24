describe('Picker.uvue', () => {
  console.log(process.env.uniTestPlatformInfo)
  if (!process.env.uniTestPlatformInfo.startsWith('web')) {
    it('app', () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/picker/picker')
    await page.waitFor('view');
  });
  function getData(key = '') {
    return new Promise(async (resolve, reject) => {
      const data = await page.data()
      resolve(key ? data[key] : data)
    })
  }
  function getValue(className,propertyValue='value') {
    return new Promise(async (resolve, reject) => {
      const el = await page.$(className)
      const value = await el.property(propertyValue)
      resolve(value)
    })
  }

  it('普通选择器', async () => {
    expect(await getValue('.picker')).toBe(await getData('index'))
    await page.setData({index:1})
    const pickerValueEl = await page.$('.pickerValue')
    expect(await pickerValueEl.text()).toBe('美国')
  })

  it('多列选择器', async () => {
    expect(await getValue('.pickerMulti')).toEqual(await getData('multiIndex'))
    const pickerMultiValueEl = await page.$('.pickerMultiValue')
    expect(await pickerMultiValueEl.text()).toStrictEqual('亚洲，中国，北京')
    await page.setData({multiIndex:[0, 0, 2]})
    const pickerMultiValueEl2 = await page.$('.pickerMultiValue')
    expect(await pickerMultiValueEl2.text()).toStrictEqual('亚洲，中国，广州')
  })

  it('时间选择器', async () => {
    expect(await getValue('.pickerTime')).toBe(await getData('time'))
    await page.setData({time:'15:30'})
    expect(await getValue('.pickerTime')).toEqual('15:30')
  })

  it('日期选择器', async () => {
    expect(await getValue('.pickerDate')).toBe(await getData('date'))
    await page.setData({date:'2028-05-20'})
    expect(await getValue('.pickerDate')).toEqual('2028-05-20')
    expect(await getValue('.pickerDate','start')).toStrictEqual(await getData('startDate'))
    expect(await getValue('.pickerDate','end')).toStrictEqual(await getData('endDate'))
  })

})
