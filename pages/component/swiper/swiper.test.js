jest.setTimeout(20000);

function getData(key = '') {
  return new Promise(async (resolve, reject) => {
    const data = await page.data()
    resolve(key ? data[key] : data)
  })
}

let page;
beforeAll(async () => {
  page = await program.reLaunch('/pages/component/swiper/swiper')
  await page.waitFor(600)
})


describe('test swiper', () => {
  it('check indicator show', async () => {
    await page.setData({
      dotsSelect: true,
    })
    await page.waitFor(600)
    await page.setData({
      dotsSelect: false,
    })
    await page.waitFor(600)
    /**
     * todo 暂无判断条件
     */
  });

  it('check autoplay loop', async () => {
    await page.setData({
      autoplaySelect: true,
      currentValChange: 0,
    })
    await page.waitFor(600)
    expect(await getData('currentValChange')).toEqual(0)
    await page.waitFor(1600)
    expect(await getData('currentValChange')).toEqual(1)
    await page.waitFor(2000)
    expect(await getData('currentValChange')).toEqual(2)
    await page.waitFor(2000)
    expect(await getData('currentValChange')).toEqual(0)
    await page.setData({
      circularSelect: true,
      currentValChange: 0,
    })
    await page.waitFor(600)
    expect(await getData('currentValChange')).toEqual(0)
    await page.waitFor(1600)
    expect(await getData('currentValChange')).toEqual(1)
    await page.waitFor(2000)
    expect(await getData('currentValChange')).toEqual(2)
    await page.waitFor(2000)
    expect(await getData('currentValChange')).toEqual(0)
    await page.setData({
      circularSelect: false,
      autoplaySelect: false
    })
    await page.waitFor(300)
  });


  it('check current', async () => {
    await page.setData({
      currentVal: 2,
    })
    await page.waitFor(600)
    expect(await getData('currentValChange')).toEqual(2)
    await page.setData({
      currentVal: 0,
    })
    await page.waitFor(600)
    expect(await getData('currentValChange')).toEqual(0)
  });

  it('check currentId', async () => {
    await page.setData({
      currentItemIdVal: 'C',
    })
    await page.waitFor(600)
    expect(await getData('currentValChange')).toEqual(2)

    await page.setData({
      currentItemIdVal: 'A',
    })
    await page.waitFor(600)
    expect(await getData('currentValChange')).toEqual(0)
  });

});
