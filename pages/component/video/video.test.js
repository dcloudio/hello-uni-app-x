jest.setTimeout(60000);

const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isHarmony = platformInfo.startsWith('harmony')
const isIOS = platformInfo.startsWith('ios')
const isMP = platformInfo.startsWith('mp')
const isWeb = platformInfo.startsWith('web')
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

describe('component-native-video', () => {
  if (isWeb || isAppWebView) {
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
    if (isWeb) {
      await page.setData({
        muted: true
      });
    }
    await page.$('.video');
  });

  it('test API', async () => {
    expect(await page.data('isError')).toBe(false);
    // play
    await page.callMethod('play');
    await page.waitFor(async () => {
      return await page.data('isPlaying');
    });
    // pause
    await page.callMethod('pause');
    await page.waitFor(async () => {
      return await page.data('isPause');
    });
  });

  if (!isMP) {
    it('test download source', async () => {
      await page.setData({
        autoTest: true,
        isError: false
      });
      const oldSrc = await page.data('src');
      await page.callMethod('downloadSource');
      await page.waitFor(5000);
      expect(await page.data('isError')).toBe(false);
      await page.setData({
        src: oldSrc
      });
    });

    it('test video local mp4', async () => {
      await page.setData({
        autoTest: true,
        isError: false
      });
      const oldSrc = await page.data('src');
      await page.setData({
        src: '/static/test-video/10second-demo.mp4'
      });
      await page.waitFor(1000);
      expect(await page.data('isError')).toBe(false);
      await page.setData({
        src: oldSrc
      });
    })
    // 鸿蒙不播放本地 m3u8
    if (!isHarmony) {
      it('test video local m3u8', async () => {
        await page.setData({
          autoTest: true,
          isError: false
        });
        const oldSrc = await page.data('src');
        await page.setData({
          src: '/static/test-video/2minute-demo.m3u8'
        });
        await page.waitFor(100);
        expect(await page.data('isError')).toBe(false);
        await page.setData({
          src: oldSrc
        });
      })
    }

    if (isAndroid) {
      it('android test assets path', async () => {
        const oldSrc = await page.data('src');
        await page.setData({
          isError: false,
          src: 'file:///android_asset/uni-autoTest/demo10s.mp4'
        });
        await page.waitFor(500);
        expect(await page.data('isError')).toBe(false);
        await page.setData({
          src: oldSrc
        });
      });
    }
  }
  it('test event play pause controlstoggle', async () => {
    await page.setData({
      isPause: false,
      isPlaying: false,
      autoTest: true,
    });
    await page.callMethod('play');
    start = Date.now();
    await page.waitFor(async () => {
      return await page.data('isPlaying');
    });
    await page.waitFor(async () => {
      return (await page.data('eventPlay')) || (Date.now() - start > 500);
    });
    if (isIOS) {
      // expect(await page.data('eventPlay')).toEqual({
      //   type: 'play'
      // });
    } else {
      expect(await page.data('eventPlay')).toEqual({
        tagName: 'VIDEO',
        type: 'play'
      });
    }
    await page.callMethod('pause');
    start = Date.now();
    await page.waitFor(async () => {
      return await page.data('isPause');
    });
    await page.waitFor(async () => {
      return (await page.data('eventPause')) || (Date.now() - start > 1000);
    });
    if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
      // expect(await page.data('eventPause')).toEqual({
      //   type: 'pause'
      // });
    } else {
      expect(await page.data('eventPause')).toEqual({
        tagName: 'VIDEO',
        type: 'pause'
      });
    }
    if (isAndroid || isIOS) {
      /**
       * app端video组件controlstoggle事件会在controls显示和隐藏触发（播放、暂停等操作都会触发）。
       * 微信小程序、web、鸿蒙播放暂停或者一些其他的操作也会影响controls的显隐，但是不会触发controlstoggle， 只有controls属性变化的时候才会触发
       */
      await page.callMethod('play');
      start = Date.now();
      await page.waitFor(async () => {
        return (await page.data('eventControlstoggle')) || (Date.now() - start > 1000);
      });
      if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
        // expect(await page.data('eventControlstoggle')).toEqual({
        //   tagName: 'VIDEO',
        //   type: 'controlstoggle',
        //   show: true
        // });
      } else {
        expect(await page.data('eventControlstoggle')).toEqual({
          tagName: 'VIDEO',
          type: 'controlstoggle',
          show: true
        });
      }
    }
  });


  if (isAndroid || isHarmony) {
    if (isAndroid) {
      it('test event waiting progress', async () => {
        await page.callMethod('seek', 10);
        start = Date.now();
        await page.waitFor(async () => {
          return (await page.data('eventWaiting')) && (await page.data('eventProgress')) || (Date.now() -
            start > 1000);
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
    }

    it('test event fullscreenchange fullscreenclick', async () => {
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
      if (isAndroid && version >
        5) { // android5.1模拟器全屏时会弹出系统提示框，无法响应adb tap命令
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
      await page.callMethod('seek', 120);
      if (isAndroid) {
        start = Date.now();
        await page.waitFor(async () => {
          return (await page.data('eventEnded')) || (Date.now() - start > 30000);
        });
        expect(await page.data('eventEnded')).toEqual({
          tagName: 'VIDEO',
          type: 'ended'
        });
      }
      await page.waitFor(3000);
      const infos = process.env.uniTestPlatformInfo.split(' ');
      const version = parseInt(infos[infos.length - 1]);
      if ((isAndroid && version > 5) || isHarmony) {
        let currentTime = 121
        if (isHarmony) currentTime = 120
        start = Date.now();
        await page.waitFor(async () => {
          return (await page.data('eventTimeupdate')) || (Date.now() - start > 500);
        });
        expect(await page.data('eventTimeupdate')).toEqual({
          tagName: 'VIDEO',
          type: 'timeupdate',
          currentTime,
          duration: 121
        });
      }
    });

    it('test event error', async () => {
      const oldSrc = await page.data('src');
      await page.setData({
        src: 'invalid url'
      });
      start = Date.now();
      await page.waitFor(async () => {
        return (await page.data('eventError')) || (Date.now() - start > 1000);
      });
      const eventError = await page.data('eventError')
      expect(eventError.tagName).toEqual('VIDEO')
      expect(eventError.type).toEqual('error')
      if (!isHarmony) {
        expect(eventError.errCode).toEqual(300001)
      } else {
        // 鸿蒙 video onError 没有错误信息，恒为 200001 内部错误
        expect(eventError.errCode).toEqual(200001)
      }
      await page.setData({
        autoTest: false,
        src: oldSrc
      });
    });

    if (isAndroid) {
      it('test sub component', async () => {
        await page.setData({
          subCompEnable: true,
          subCompShow: true
        });
        await page.waitFor(100);
        expect(await page.callMethod('hasSubComponent')).toBe(true);
      });
    }

    it('test enable-danmu', async () => {
      await page.callMethod('play');
      await page.waitFor(5000);
      await page.setData({
        enableDanmu: false
      });
      const windowInfo = await program.callUniMethod('getWindowInfo');
      const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: windowInfo.statusBarHeight + 44
        }
      });
      expect(image).toSaveImageSnapshot();
    });
  }

  it('test format', async () => {
    page = await program.navigateTo('/pages/component/video/video-format');
    await page.waitFor(1000);
    expect((await page.data('isError')).value).toBe(false);
  });
});
