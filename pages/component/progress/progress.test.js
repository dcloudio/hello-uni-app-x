function getData(key = '') {
  return new Promise(async (resolve, reject) => {
    const data = await page.data()
    resolve(key ? data[key] : data)
  })
}

let page
beforeAll(async () => {
  page = await program.reLaunch('/pages/component/progress/progress')
  await page.waitFor(2000);
})

beforeEach(async () => {
  await page.callMethod('setEventCallbackNum', 0)
})

describe('Progress.uvue', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isMP = platformInfo.startsWith('mp')
  const isWeb = platformInfo.startsWith('web')
  const isHarmony = platformInfo.startsWith('harmony')
  
  it('percent', async () => {
    await page.callMethod('setProgress')
    await page.waitFor(1000);
    const p = await page.$('.p')
    expect(await p.attribute('percent')).toEqual(20 + '')
    const p1 = await page.$('.p1')
    expect(await p1.attribute('percent')).toEqual(40 + '')
    const p2 = await page.$('.p2')
    expect(await p2.attribute('percent')).toEqual(60 + '')
    const p3 = await page.$('.p3')
    expect(await p3.attribute('percent')).toEqual(80 + '')
    if (process.env.UNI_PLATFORM === 'app-android') {
      expect(await getData('curPercent')).toEqual(20)
    }
    await page.callMethod('clearProgress')
    await page.waitFor(1000)
    expect(await p.attribute('percent')).toEqual(0 + '')
    expect(await p1.attribute('percent')).toEqual(0 + '')
    expect(await p2.attribute('percent')).toEqual(0 + '')
    expect(await p3.attribute('percent')).toEqual(0 + '')
    if (process.env.UNI_PLATFORM === 'app-android') {
      expect(await getData('curPercent')).toEqual(0)
    }
  })
  it('length', async () => {
    const elements = await page.$$('.progress')
    expect(elements.length).toBe(4)
  })
  if(isMP) {
    it('show-info', async () => {
      const el = await page.$('.p')
      expect(await el.property('showInfo')).toEqual(true)
      await page.setData({
        showInfo: false
      })
      expect(await el.property('showInfo')).toEqual(false)
    })
  } else {
    it('show-info', async () => {
      const el = await page.$('.p')
      expect(await el.attribute('show-info')).toEqual(true + '')
      await page.setData({
        showInfo: false
      })
      expect(await el.attribute('show-info')).toEqual(false + '')
    })
  }
  it('border-radius', async () => {
    const el = await page.$('.p')
    expect(await el.attribute('border-radius')).toEqual(0 + '')
    await page.setData({
      borderRadius: 5
    })
    expect(await el.attribute('border-radius')).toEqual(5 + '')
  })
  it('font-size', async () => {
    const el = await page.$('.p')
    expect(await el.attribute('font-size')).toEqual(16 + '')
    await page.setData({
      fontSize: 18
    })
    expect(await el.attribute('font-size')).toEqual(18 + '')
  })
  it('stroke-width', async () => {
    const el = await page.$('.p')
    expect(await el.attribute('stroke-width')).toEqual(3 + '')
    await page.setData({
      strokeWidth: 6
    })
    expect(await el.attribute('stroke-width')).toEqual(6 + '')
    await page.setData({
      strokeWidth: '10px'
    })
    expect(await el.attribute('stroke-width')).toEqual('10px')
    await page.setData({
      strokeWidth: '30rpx'
    })
    expect(await el.attribute('stroke-width')).toEqual('30rpx')
  })
  it('backgroundColor', async () => {
    const el = await page.$('.p')
    expect(await el.attribute('background-color')).toEqual('#EBEBEB')
    await page.setData({
      backgroundColor: "#007aff"
    })
    expect(await el.attribute('background-color')).toEqual('#007aff')
  })
  it('trigger UniProgressActiveendEvent', async () => {
    if (isWeb || isMP) {
      expect(1).toBe(1)
      return
    }

    await page.setData({
      pgList: [21, 40, 60, 80]
    })
    // 动画执行
    await page.waitFor(1000);
    const eventCallbackNum = await page.callMethod('getEventCallbackNum')
    expect(eventCallbackNum).toBe(3)
  })
})
