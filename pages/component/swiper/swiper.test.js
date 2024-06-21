jest.setTimeout(30000);
describe('test swiper', () => {
  let page;
  const webDetailRes = {
    current: 1,
    currentItemId: 'B',//web端多了currentItemId
    source: 'autoplay' ,
  }
  const appDetailRes = {
    current: 1,
    source: 'autoplay' ,
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/swiper/swiper')
    await page.waitFor(600)
  })
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
      currentValChange: 0,
      autoplaySelect: true,
    })
    await page.waitFor(2400)
    expect(await page.data('currentValChange')).toEqual(1)
    await page.waitFor(2000)
    expect(await page.data('currentValChange')).toEqual(2)
    await page.waitFor(2000)
    expect(await page.data('currentValChange')).toEqual(0)

    await page.setData({
      autoplaySelect: false
    })
    await page.waitFor(300)
  });

  it('check current', async () => {
    await page.setData({
      currentVal: 2,
    })
    await page.waitFor(600)
    expect(await page.data('currentValChange')).toEqual(2)
    await page.setData({
      currentVal: 0,
    })
    await page.waitFor(600)
    expect(await page.data('currentValChange')).toEqual(0)
  });

  it('check currentId', async () => {
    await page.setData({
      currentItemIdVal: 'C',
    })
    await page.waitFor(600)
    expect(await page.data('currentValChange')).toEqual(2)

    await page.setData({
      currentItemIdVal: 'A',
    })
    await page.waitFor(600)
    expect(await page.data('currentValChange')).toEqual(0)
  });

  it('Trigger Event', async () => {
    await page.setData({
      swiperChangeSelect: true,
      swiperTransitionSelect: true,
      swiperAnimationfinishSelect: true,
      autoplaySelect:true
    })
    await page.waitFor(2000)
    await page.waitFor(async()=>{
      return await page.data('currentValChange') == 1
    })
    await page.setData({
      autoplaySelect:false
    })
  });

  it('Event transitiont', async () => {
    // bug：android端swiper的事件event参数detail类型错误，暂时忽略测试
    if(!process.env.UNI_UTS_PLATFORM.startsWith('app-android')){
      const transitionDetailInfo = await page.data('transitionDetailTest')
      // bug：在iOS端，swiper首次横向滑动切换@transition事件参数e.detail.dy为1错误，暂时忽略测试
      if(process.env.uniTestPlatformInfo.startsWith('web')){
        expect(transitionDetailInfo.dy).toBe(0)
      }
      expect(transitionDetailInfo.dx).not.toBe(0)
      expect(await page.data('isTransitionTest')).toBe('transition:Success')
    }
  });

  it('Event change', async () => {
    if(!process.env.UNI_UTS_PLATFORM.startsWith('app-android')){
      const changeDetailInfo = await page.data('changeDetailTest')
      if(process.env.uniTestPlatformInfo.startsWith('web')){
        expect(changeDetailInfo).toEqual(webDetailRes)
      }else{
        expect(changeDetailInfo).toEqual(appDetailRes)
      }
      expect(await page.data('isChangeTest')).toBe('change:Success')
    }
  });

  it('Event animationfinish', async () => {
    await page.waitFor(1000)
    // bug：在android端第一次触发@animationfinish 得到detail中的source为空，第二次触发时正常得到source: 'autoplay'
    if(!process.env.UNI_UTS_PLATFORM.startsWith('app-android')){
      const animationfinishDetailInfo = await page.data('animationfinishDetailTest')
      if(process.env.uniTestPlatformInfo.startsWith('web')){
        expect(animationfinishDetailInfo).toEqual(webDetailRes)
      }else{
        expect(animationfinishDetailInfo).toEqual(appDetailRes)
      }
      expect(await page.data('isAnimationfinishTest')).toBe('animationfinish:Success')
    }
  });
});
