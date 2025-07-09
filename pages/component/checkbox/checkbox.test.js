const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')

describe('Checkbox.uvue', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/checkbox/checkbox')
    await page.waitFor('view')
    await page.waitFor(1000)
  })
  it('change', async () => {
    expect(await page.data('value')).toEqual([])
    const cb1 = await page.$('.cb1')
    await cb1.tap()
    await page.waitFor(100)
    expect(await page.data('value')).toEqual(['cb', 'cb1'])
    const cb = await page.$('.cb')
    await cb.tap()
    await page.waitFor(100)
    expect(await page.data('value')).toEqual(['cb1'])
    const cb2 = await page.$('.cb2')
    await cb2.tap()
    await page.waitFor(100)
    expect(await page.data('value')).toEqual(['cb1'])
    await cb1.tap()
    await page.waitFor(100)
    expect(await page.data('value')).toEqual([])
  })
  it('length', async () => {
    const checkboxGroupElements = await page.$$('.checkbox-group')
    expect(checkboxGroupElements.length).toBe(4)
    const checkboxElements = await page.$$('.checkbox')
    expect(checkboxElements.length).toBe(12)
  })
  it('text', async () => {
    const cb = await page.$('.cb1')
    expect(await cb.text()).toEqual('未选中')
    await page.setData({
      text: 'not selected',
    })
    expect(await cb.text()).toEqual('not selected')
  })
  if(isMP) {
    it('disabled', async () => {
      const cb = await page.$('.cb2')
      const disabled1 = await cb.property('disabled')
      expect(disabled1).toBe(true)
      await page.setData({
        disabled: false,
      })
      const disabled2 = await cb.property('disabled')
      expect(disabled2).toBe(false)
    })
  } else {
    it('disabled', async () => {
      const cb = await page.$('.cb2')
      const disabled1 = await cb.attribute('disabled')
      expect(disabled1).toBe(true + '')
      await page.setData({
        disabled: false,
      })
      const disabled2 = await cb.attribute('disabled')
      expect(disabled2).toBe(false + '')
    })
  }
  if(!isMP) {
    // 自动化测试获取的property checked在app、web和微信小程序之间有差异。微信小程序获取的和显示效果一致，app、web获取的是绑定值
    it('checked', async () => {
      const cb = await page.$('.cb')
      // TODO
      const newValue1 = await cb.property('checked')
      expect(newValue1.toString()).toBe(true + '')
      await page.setData({
        checked: false,
      })
      // TODO
      const newValue2 = await cb.property('checked')
      expect(newValue2.toString()).toBe(false + '')
    })
  }
  if(!isMP) {
    it('color', async () => {
      const cb = await page.$('.cb')
      expect(await cb.attribute('color')).toBe('#007aff')
      await page.setData({
        color: '#63acfc',
      })
      expect(await cb.attribute('color')).toBe('#63acfc')
    })

    it('icon color', async () => {
      const cb = await page.$('.cb')
      expect(await cb.attribute('iconColor')).toBe('#211cfe')
      await page.setData({
        iconColor: '#63acfc',
      })
      expect(await cb.attribute('iconColor')).toBe('#63acfc')
    })
    it('foreColor', async () => {
      const cb = await page.$('.cb')
      expect(await cb.attribute('foreColor')).toBe('#ff0000')
      await page.setData({
        foreColor: '#63acfe',
      })
      expect(await cb.attribute('foreColor')).toBe('#63acfe')
    })
    it('trigger UniCheckboxGroupChangeEvent', async () => {
      const element = await page.$('.checkbox-item-0')
      await element.tap()
      // 设置等待2.5s,避免 toast 弹框影响后续截图测试
      await page.waitFor(2500)
      const { testEvent } = await page.data()
      expect(testEvent).toBe(true)
    })
  }
})
