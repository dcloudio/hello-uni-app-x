describe('component-native-video', () => {
  if(process.env.uniTestPlatformInfo.startsWith('web')){
    // TODO: web 端暂不支持测试
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/video/video');
    if(process.env.uniTestPlatformInfo.startsWith('web')){
      await page.setData({
        muted: true
      });
    }
    await page.waitFor(1000);
  });

  it('test API', async () => {
    expect(await page.data('isError')).toBe(false);
    // play
    await page.callMethod('play');
    await page.waitFor(100);
    expect(await page.data('isPlaying')).toBe(true);
    // pause
    await page.callMethod('pause');
    await page.waitFor(100);
    expect(await page.data('isPause')).toBe(true);
  });

  it('test local source', async () => {
    await page.setData({
      autoTest: true,
      isError: false
    });
    await page.callMethod('downloadSource');
    await page.waitFor(5000);
    expect(await page.data('isError')).toBe(false);
    await page.setData({
      localSrc: '/static/test-video/2minute-demo.m3u8'
    });
    await page.waitFor(100);
    expect(await page.data('isError')).toBe(false);
    await page.setData({
      autoTest: false
    });
  });

  it('test event play pause', async () => {
    await page.setData({
      autoTest: true
    });
    await page.callMethod('play');
    await page.waitFor(100);
    expect(await page.data('eventPlay')).toEqual({
      tagName: 'VIDEO',
      type: 'play'
    });
    await page.callMethod('pause');
    await page.waitFor(100);
    expect(await page.data('eventPause')).toEqual({
      tagName: 'VIDEO',
      type: 'pause'
    });
    await page.callMethod('play');
  });

  it('test event waiting progress timeupdate', async () => {
    await page.setData({
      pos: 10
    });
    await page.callMethod('seek');
    await page.waitFor(100);
    expect(await page.data('eventWaiting')).toEqual({
      tagName: 'VIDEO',
      type: 'waiting'
    });
    await page.waitFor(200);
    expect(await page.data('eventProgress')).toEqual({
      tagName: 'VIDEO',
      type: 'progress',
      isBufferedValid: true
    });
    const infos = process.env.uniTestPlatformInfo.split(' ');
    const version = parseInt(infos[infos.length - 1]);
    if (process.env.uniTestPlatformInfo.startsWith('android') && version > 5) {
      await page.waitFor(200);
      expect(await page.data('eventTimeupdate')).toEqual({
        tagName: 'VIDEO',
        type: 'timeupdate',
        currentTime: 10,
        duration: 121
      });
    }
  });

  it('test event fullscreenchange fullscreenclick controlstoggle', async () => {
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
      return;
    }
    await page.callMethod('requestFullScreen');
    await page.waitFor(500);
    expect(await page.data('eventFullscreenchange')).toEqual({
      tagName: 'VIDEO',
      type: 'fullscreenchange',
      fullScreen: true,
      direction: 'horizontal'
    });
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      const res = await program.adbCommand('wm size');
      const width = res.data.split(' ').at(-1).split('x')[0]
      const height = res.data.split(' ').at(-1).split('x')[1]
      const res2 = await program.adbCommand('wm density');
      const scale = res2.data.split(' ').at(-1) / 160;
      await page.waitFor(100);
      await program.adbCommand(`input tap ${parseInt(height / 2)} ${parseInt(width / 2)}`);
      await page.waitFor(100);
      expect(await page.data('eventControlstoggle')).toEqual({
        tagName: 'VIDEO',
        type: 'controlstoggle',
        show: false
      });
      expect(await page.data('eventFullscreenclick')).toEqual({
        tagName: 'VIDEO',
        type: 'fullscreenclick',
        screenX: parseInt(height / 2 / scale),
        screenY: parseInt(width / 2 / scale),
        screenWidth: parseInt(height / scale),
        screenHeight: parseInt(width / scale)
      });
    }
    await page.callMethod('exitFullScreen');
  });

  it('test event ended', async () => {
    await page.setData({
      pos: 120
    });
    await page.callMethod('seek');
    await page.waitFor(2500);
    expect(await page.data('eventEnded')).toEqual({
      tagName: 'VIDEO',
      type: 'ended'
    });
  });

  it('test event error', async () => {
    const oldSrc = await page.data('src');
    await page.setData({
      src: 'invalid url'
    });
    await page.waitFor(300);
    expect(await page.data('eventError')).toEqual({
      tagName: 'VIDEO',
      type: 'error',
      errCode: 300001
    });
    await page.setData({
      autoTest: false,
      src: oldSrc
    });
  });

  it('test format', async () => {
    page = await program.navigateTo('/pages/component/video/video-format');
    await page.waitFor(1000);
    expect(await page.data('isError')).toBe(false);
  });
});
