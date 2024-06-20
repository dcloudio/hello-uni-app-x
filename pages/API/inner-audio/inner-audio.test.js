describe('inner-audio', () => {
  if (!process.env.uniTestPlatformInfo.startsWith('web')) {
    it('app', () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/inner-audio/inner-audio')
    await page.waitFor('view');
  });

  function getData(key = '') {
    return new Promise(async (resolve, reject) => {
      const data = await page.data()
      resolve(key ? data[key] : data)
    })
  }

  it('onCanplay',async()=>{
    await page.waitFor(1000)
    await page.waitFor(async()=>{
      return await getData('isCanplay')
    })
    expect(await getData('buffered')).toBeGreaterThan(0)
  })

  it('play-onPlay-onTimeUpdate', async () => {
    await page.callMethod('play')
    await page.waitFor(3000);
    expect(await getData('isPlaying')).toBeTruthy()
    console.log("duration：",await getData('duration'),"currentTime：",await getData('currentTime'))
    expect(await getData('duration')).toBeCloseTo(175.109, 0);
    // console.log("isPaused",await getData('isPaused'))
    // expect(await getData('currentTime')).toBeGreaterThan(0);
    // expect(await getData('isPaused')).toBeFalsy();
  });

  it('seek-onSeeking-onSeeked', async () => {
    await page.callMethod('onchange',20)
    await page.waitFor(500);
    expect(await getData('onSeekingTest')).toBeTruthy();
    // expect(await getData('onWaitingTest')).toBeTruthy();
    expect(await getData('onSeekedTest')).toBeTruthy();
  });

  it('pause-onPause', async () => {
    await page.callMethod('pause')
    await page.waitFor(500);
    expect(await getData('isPlaying')).toBeFalsy()
    // expect(await getData('isPaused')).toBeTruthy();
  });

  it('stop-onStop', async () => {
    await page.callMethod('play')
    await page.waitFor(2000);
    // 第一次点停止时，不触发onStop事件
    await page.callMethod('stop')
    await page.callMethod('stop')
    await page.waitFor(1000);
    expect(await getData('isPlaying')).toBeFalsy()
    // expect(await getData('isPaused')).toBeTruthy();
  });

  it('onEnded', async () => {
    await page.callMethod('onchange',173)
    await page.waitFor(500);
    await page.callMethod('play')
    await page.waitFor(3000);
    // expect(await getData('isPlayEnd')).toBeTruthy();
  });

});
