jest.setTimeout(30000);

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
      currentValChange: 0,
      autoplaySelect: true,
    })
    await page.waitFor(2400)
    expect(await getData('currentValChange')).toEqual(1)
    await page.waitFor(2000)
    expect(await getData('currentValChange')).toEqual(2)
    await page.waitFor(2000)
    expect(await getData('currentValChange')).toEqual(0)

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

  it('Trigger Event', async () => {
    await page.setData({
      swiperChangeSelect: true,
      swiperTransitionSelect: true,
      swiperAnimationfinishSelect: true,
      autoplaySelect:true
    })
    await page.waitFor(2000)
    console.log('currentValChange',await getData('currentValChange'))
    if(await getData('currentValChange') == 1){
      await page.setData({
        autoplaySelect:false
      })
    }
  });

  it('Event change-transitiont-animationfinish', async () => {
    const webResult = {
      current: 1,
      currentItemId: 'B',//web端多了currentItemId
      source: 'autoplay' ,
    }
    const appResult = {
      current: 1,
      source: 'autoplay' ,
    }
    const changeInfo = await page.data('swiperChangeEventTest')
    // console.log('change',changeInfo)
    expect(changeInfo.type).toBe('change')
    if(process.env.uniTestPlatformInfo.startsWith('web')){
      expect(changeInfo.detail).toEqual(webResult)
    }else{
      expect(changeInfo.detail).toEqual(appResult)
    }
    expect(changeInfo.currentTarget).not.toBeFalsy();
    expect(changeInfo.target).not.toBeFalsy();

    const transitionInfo = await page.data('swiperTransitionTest')
    // console.log('transitiont',transitionInfo,detail)
    expect(transitionInfo.type).toBe('transition')
    expect(transitionInfo.detail.dy).toBe(0)
    expect(transitionInfo.detail.dx).toBeGreaterThan(0)
    expect(transitionInfo.currentTarget).not.toBeFalsy();
    expect(transitionInfo.target).not.toBeFalsy();
    await page.waitFor(1000)
    // bug：在android端第一次触发@animationfinish 得到detail中的source为空，第二次触发时正常得到source: 'autoplay'
    const animationfinishInfo = await page.data('swiperAnimationfinishTest')
    // console.log('animationfinish',animationfinishInfo.detail)
    expect(animationfinishInfo.type).toBe('animationfinish')
    if(process.env.uniTestPlatformInfo.startsWith('web')){
      expect(animationfinishInfo.detail).toEqual(webResult)
    }else if(!process.env.uniTestPlatformInfo.startsWith('android')){
      expect(animationfinishInfo.detail).toEqual(appResult)
    }
    expect(animationfinishInfo.currentTarget).not.toBeFalsy();
    expect(animationfinishInfo.target).not.toBeFalsy();
  });
});
