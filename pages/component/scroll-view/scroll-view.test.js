jest.setTimeout(30000);
describe('component-native-scroll-view', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isIos = platformInfo.startsWith('ios')
  if (isIos) {
    it('dummyTest', () => {
      expect(1).toBe(1)
    })
    return
  }
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/scroll-view/scroll-view');
    await page.waitFor(300);
  });

  it('scroll-view-screenshot', async () => {
    //禁止滚动条
    await page.setData({
        showScrollbar: false
    })
    await page.waitFor(300);
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
  });

  it('Event scroll-vertical',async()=>{
    // 纵向滚动
    await page.setData({scrollTop: 100})
    await page.waitFor(600)
    //设置top 是否触发scroll 事件
    const topScrollInfo = await page.data('scrollTest')
    // const topScrollResult = {
    //   "scrollLeft": 0,
    //   "scrollTop": 100,
    //   "scrollHeight": 450,
    //   "scrollWidth": 345,
    //   "deltaX": 0,
    //   "deltaY": -100
    // }
    const {scrollLeft,scrollTop,scrollHeight,scrollWidth,deltaX,deltaY} = topScrollInfo.detail
    expect(topScrollInfo.type).toBe('scroll')
    expect(scrollLeft).toBe(0)
    // Android 差异scrollTop：99.809525
    if(!process.env.uniTestPlatformInfo.startsWith('android')){
      expect(scrollTop).toBe(100)
    }
    expect(scrollHeight).toBeGreaterThan(0)
    expect(scrollWidth).toBeGreaterThan(0)
    expect(deltaX).toBe(0)
    expect(deltaY).toBe(-100)
    expect(topScrollInfo.currentTarget).not.toBeFalsy();
    expect(topScrollInfo.target).not.toBeFalsy();
    // expect(topScrollInfo.detail).toEqual(topScrollResult);
    if(process.env.uniTestPlatformInfo.startsWith('web')){
      expect(topScrollInfo.timeStamp).toBeGreaterThan(0)
    }
  })

  it('Event scroll-horizontal',async()=>{
    // 横向滚动
    console.log('scrollLeft',await page.data('scrollLeft'))
    await page.setData({scrollLeft:220})
    await page.waitFor(600)
    //设置left 是否触发scroll 事件
    const leftScrollInfo = await page.data('scrollTest')
    // const leftScrollResult = {
    //   "scrollLeft": 220,
    //   "scrollTop": 0,
    //   "scrollHeight": 150,
    //   "scrollWidth": 1036,
    //   "deltaX": -100,
    //   "deltaY": 0
    // }
    const {scrollLeft,scrollTop,scrollHeight,scrollWidth,deltaX,deltaY} = leftScrollInfo.detail
    console.log('deltaX',deltaX)
    expect(leftScrollInfo.type).toBe('scroll')
    // Android 差异scrollLeft：219.80952
    if(!process.env.uniTestPlatformInfo.startsWith('android')){
      expect(scrollLeft).toBe(220)
    }
    expect(scrollTop).toBe(0)
    expect(scrollHeight).toBeGreaterThan(0)
    expect(scrollWidth).toBeGreaterThan(0)
    expect(deltaX).toBe(-100)
    expect(deltaY).toBe(0)
    expect(leftScrollInfo.currentTarget).not.toBeFalsy();
    expect(leftScrollInfo.target).not.toBeFalsy();
    if(process.env.uniTestPlatformInfo.startsWith('web')){
      expect(leftScrollInfo.timeStamp).toBeGreaterThan(0)
    }
  })

  it('Event scrolltolower-滚动到底部/右边',async()=>{
    // 滚动到底部scrollTop:300,
    await page.setData({scrollTop: 300})
    await page.waitFor(600)
    //设置top 是否触发scrolltolower事件
    const toLowerInfo = await page.data('toLowerTest')
    expect(toLowerInfo.type).toBe('scrolltolower')
    expect(toLowerInfo.detail.direction).toBe('bottom')
    expect(toLowerInfo.currentTarget).not.toBeFalsy();
    expect(toLowerInfo.target).not.toBeFalsy();
    if(process.env.uniTestPlatformInfo.startsWith('web')){
      expect(toLowerInfo.timeStamp).toBeGreaterThan(0)
    }
  })

  it('Event scrolltoupper-滚动到顶部/左边',async()=>{
    // 滚动到顶部scrollTop: 0,
    // await page.setData({scrollTop: 0})
    await page.callMethod('goTop')
    await page.waitFor(600)
    //设置top 是否触发scrolltoupper事件
    const toUpperInfo = await page.data('toUpperTest')
    expect(toUpperInfo.type).toBe('scrolltoupper')
    expect(toUpperInfo.detail.direction).toBe('top')
    expect(toUpperInfo.currentTarget).not.toBeFalsy();
    expect(toUpperInfo.target).not.toBeFalsy();
    if(process.env.uniTestPlatformInfo.startsWith('web')){
      expect(toUpperInfo.timeStamp).toBeGreaterThan(0)
    }
  })
});
