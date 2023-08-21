/* function getData(key = '') {
  return new Promise(async (resolve, reject) => {
    const data = await page.data()
    resolve(key ? data[key] : data)
  })
}

let page
beforeAll(async () => {
  page = await program.reLaunch('/pages/component/button/button')
  await page.waitFor(1000)
})*/


describe('Button.uvue', () => {
	// TODO BUTTON TEST
  /* it('click', async () => {
    const defaultBtn = await page.$('.default-button')
    const disabledBtn = await page.$('.disabled-button')
    expect(await getData('count')).toEqual(0)
    await defaultBtn.tap()
    expect(await getData('count')).toEqual(1)
    await disabledBtn.tap()
    expect(await getData('count')).toEqual(1)
  })
  it('length', async () => {
    const elements = await page.$$('.button')
    expect(elements.length).toBe(13)
  })
  it('text', async () => {
    const textBtn = await page.$('.text-button')
    expect(await textBtn.text()).toEqual('文字来自data绑定')
    await page.setData({
      text: 'button',
    })
    expect(await textBtn.text()).toEqual('button')
  })
  it('type', async () => {
    const btn = await page.$('.test-button')
    expect(await btn.property('type')).toBe('primary')
    await page.setData({
      type: 'default',
    })
    await page.waitFor(500)
    expect(await btn.property('type')).toBe('default')
    await page.setData({
      type: 'warn',
    })
    await page.waitFor(500)
    expect(await btn.property('type')).toBe('warn')
  })
  it('size', async () => {
    const btn = await page.$('.test-button')
    expect(await btn.property('size')).toBe('default')
    await page.setData({
      size: 'mini',
    })
    await page.waitFor(500)
    expect(await btn.property('size')).toBe('mini')
  })
  it('plain', async () => {
    const btn = await page.$('.test-button')
    expect(await btn.property('plain')).toBe(false)
    await page.setData({
      plain: true,
    })
    await page.waitFor(500)
    expect(await btn.property('plain')).toBe(true)
  })
  it('disabled', async () => {
    const btn = await page.$('.test-button')
    expect(await btn.property('disabled')).toBe(false)
    await page.setData({
      disabled: true,
    })
    await page.waitFor(500)
    expect(await btn.property('disabled')).toBe(true)
  }) */
})
