jest.setTimeout(60000);
describe('component-native-video', () => {
  if(process.env.uniTestPlatformInfo.startsWith('web')){
    // TODO: web 端暂不支持测试
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page;
  let start = 0;
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
    const oldSrc = await page.data('src');
    await page.callMethod('downloadSource');
    await page.waitFor(5000);
    expect(await page.data('isError')).toBe(false);
    await page.setData({
      src: '/static/test-video/2minute-demo.m3u8'
    });
    await page.waitFor(100);
    expect(await page.data('isError')).toBe(false);
    await page.setData({
      src: oldSrc
    });
  });

  it('test event play pause controlstoggle', async () => {
    await page.callMethod('play');
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventPlay')) || (Date.now() - start > 500);
    });
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
      // expect(await page.data('eventPlay')).toEqual({
      //   type: 'play'
      // });
    }else {
      expect(await page.data('eventPlay')).toEqual({
        tagName: 'VIDEO',
        type: 'play'
      });
    }
    await page.callMethod('pause');
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventPause')) || (Date.now() - start > 500);
    });
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
      // expect(await page.data('eventPause')).toEqual({
      //   type: 'pause'
      // });
    }else {
       expect(await page.data('eventPause')).toEqual({
         tagName: 'VIDEO',
         type: 'pause'
       });
    }
    await page.callMethod('play');
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventControlstoggle')) || (Date.now() - start > 500);
    });
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
      // expect(await page.data('eventControlstoggle')).toEqual({
      //   tagName: 'VIDEO',
      //   type: 'controlstoggle',
      //   show: true
      // });
    }else {
      expect(await page.data('eventControlstoggle')).toEqual({
        tagName: 'VIDEO',
        type: 'controlstoggle',
        show: true
      });
    }

  });

  it('test event waiting progress', async () => {
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
      return
    }
    await page.callMethod('seek', 10);
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventWaiting')) && (await page.data('eventProgress')) || (Date.now() - start > 1000);
    });
    expect(await page.data('eventWaiting')).toEqual({
      tagName: 'VIDEO',
      type: 'waiting'
    });
    expect(await page.data('eventProgress')).toEqual({
      tagName: 'VIDEO',
      type: 'progress',
      isBufferedValid: true
    });
  });

  it('test event fullscreenchange fullscreenclick', async () => {
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
      return;
    }
    await page.callMethod('requestFullScreen');
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventFullscreenchange')) || (Date.now() - start > 1000);
    });
    expect(await page.data('eventFullscreenchange')).toEqual({
      tagName: 'VIDEO',
      type: 'fullscreenchange',
      fullScreen: true,
      direction: 'horizontal'
    });
    const infos = process.env.uniTestPlatformInfo.split(' ');
    const version = parseInt(infos[infos.length - 1]);
    if (process.env.uniTestPlatformInfo.startsWith('android') && version > 5) { // android5.1模拟器全屏时会弹出系统提示框，无法响应adb tap命令
      await page.waitFor(5000);
      await program.adbCommand('input tap 10 10');
      start = Date.now();
      await page.waitFor(async () => {
        return (await page.data('eventFullscreenclick')) || (Date.now() - start > 1000);
      });
      const res = await program.adbCommand('wm size');
      const width = res.data.split(' ').at(-1).split('x')[0];
      const height = res.data.split(' ').at(-1).split('x')[1];
      const res2 = await program.adbCommand('wm density');
      const scale = res2.data.split(' ').at(-1) / 160;
      expect(await page.data('eventFullscreenclick')).toEqual({
        tagName: 'VIDEO',
        type: 'fullscreenclick',
        screenX: parseInt(10 / scale),
        screenY: parseInt(10 / scale),
        screenWidth: parseInt(height / scale),
        screenHeight: parseInt(width / scale)
      });
    }
    await page.callMethod('exitFullScreen');
  });

  it('test event ended timeupdate', async () => {
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
      return
    }
    await page.callMethod('seek', 120);
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventEnded')) || (Date.now() - start > 30000);
    });
    expect(await page.data('eventEnded')).toEqual({
      tagName: 'VIDEO',
      type: 'ended'
    });
    const infos = process.env.uniTestPlatformInfo.split(' ');
    const version = parseInt(infos[infos.length - 1]);
    if (process.env.uniTestPlatformInfo.startsWith('android') && version > 5) {
      start = Date.now();
      await page.waitFor(async () => {
        return (await page.data('eventTimeupdate')) || (Date.now() - start > 500);
      });
      expect(await page.data('eventTimeupdate')).toEqual({
        tagName: 'VIDEO',
        type: 'timeupdate',
        currentTime: 121,
        duration: 121
      });
    }
  });

  it('test event error', async () => {
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
      return
    }
    const oldSrc = await page.data('src');
    await page.setData({
      src: 'invalid url'
    });
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventError')) || (Date.now() - start > 1000);
    });
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

  it('test sub component', async () => {
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) return
    await page.setData({
      subCompEnable: true,
      subCompShow: true
    });
    await page.waitFor(100);
    expect(await page.callMethod('hasSubComponent')).toBe(true);
  });

  it('test format', async () => {
    page = await program.navigateTo('/pages/component/video/video-format');
    await page.waitFor(1000);
    expect((await page.data('isError')).value).toBe(false);
  });
});
