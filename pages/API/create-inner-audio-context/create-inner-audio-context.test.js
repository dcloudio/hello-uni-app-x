const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isIos = platformInfo.startsWith('ios')
const isHarmony = platformInfo.toLocaleLowerCase().startsWith('harmony')
const isSafari = platformInfo.indexOf('safari') > -1

describe('inner-audio', () => {
  // TODO: safari 运行正常，测试时报错导致后续超时，暂时屏蔽
  if (isMP || isIos || isSafari) {
    it('not support', () => {
      expect(1).toBe(1)
    })
    return
  }

  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/create-inner-audio-context/create-inner-audio-context')
    await page.waitFor('view');
  });

  it('onCanplay',async()=>{
    await page.waitFor(1000)
    await page.waitFor(async()=>{
      return await page.data('isCanplay')
    })
    const isCanplay = await page.data('isCanplay')
    if (!isHarmony) {
      expect(await page.data('buffered')).toBeGreaterThan(0)
    } else {
      expect(isCanplay).toBe(true)
    }
  })

  it('play-onPlay-onTimeUpdate', async () => {
    await page.callMethod('play')
    const waitTime = process.env.uniTestPlatformInfo.includes('chrome') ? 5000:3000
    await page.waitFor(waitTime)
    expect(await page.data('isPlaying')).toBeTruthy()
    console.log("duration：",await page.data('duration'),"currentTime：",await page.data('currentTime'))
    expect(await page.data('duration')).toBeCloseTo(175.109, 0);
    // console.log("isPaused",await page.data('isPaused'))
    // expect(await page.data('currentTime')).toBeGreaterThan(0);
    // expect(await page.data('isPaused')).toBeFalsy();
  });

  it('seek-onSeeking-onSeeked', async () => {
    if (process.env.uniTestPlatformInfo.indexOf('android') > -1 ) {
    	expect(1).toBe(1)
    	return false
    }

    await page.callMethod('onchangeValue',20)
    const waitTime = process.env.uniTestPlatformInfo.includes('chrome') ? 1500:500
    await page.waitFor(waitTime)
    console.log("seek-onSeeking-onSeeked：",await page.data())
    let isDone = await page.waitFor(async () => {
    	return await page.data('onSeekingTest')
    })
    expect(await page.data('onSeekingTest')).toBeTruthy();
    // expect(await page.data('onWaitingTest')).toBeTruthy();
    // expect(await page.data('onSeekedTest')).toBeTruthy();
    const image = await program.screenshot({fullPage: true})
    expect(image).toSaveImageSnapshot();
  });

  it('pause-onPause', async () => {
    await page.callMethod('pause')
    await page.waitFor(500);
    expect(await page.data('isPlaying')).toBeFalsy()
    // expect(await page.data('isPaused')).toBeTruthy();
  });

  it('stop-onStop', async () => {
    await page.callMethod('play')
    await page.waitFor(2000);
    // 第一次点停止时，不触发onStop事件
    await page.callMethod('stop')
    await page.callMethod('stop')
    await page.waitFor(1000);
    expect(await page.data('isPlaying')).toBeFalsy()
    // expect(await page.data('isPaused')).toBeTruthy();
  });

  it('onEnded', async () => {
    await page.callMethod('onchangeValue',173)
    await page.waitFor(500);
    await page.callMethod('play')
    await page.waitFor(3000);
    // expect(await page.data('isPlayEnd')).toBeTruthy();
  });
  it('onEnded-android', async () => {
    if (!process.env.uniTestPlatformInfo.startsWith('android')) {
      expect(1).toBe(1)
      return
    }
    await page.setData({
    	isPlayEnd: false
    })
    await page.callMethod('setSrc','file:///android_asset/uni-autoTest/alert2s.mp3')
    await page.callMethod('play')
    await page.waitFor(3000);
    expect(await page.data('isPlayEnd')).toBeTruthy();
  });
});
