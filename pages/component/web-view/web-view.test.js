// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('component-native-web-view', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isIOS = platformInfo.startsWith('ios')
  const isMP = platformInfo.startsWith('mp')
  const isWeb = platformInfo.startsWith('web')
  const isHarmony = platformInfo.startsWith('harmony')
  const isAndroid = platformInfo.startsWith('android')
  const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

  if (isWeb || isAppWebView) {
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page;
  let start = 0;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/web-view/web-view');
    await page.waitFor(3000);
  });

  it('check_load_url', async () => {
    expect(await page.data('loadError')).toBe(false)
  });

  it('test attr webview-styles', async () => {
    await page.setData({
      webview_styles: {
        progress: {
          color: '#FF0'
        }
      }
    });
    await page.waitFor(100);
    await page.callMethod('reload');
    await page.waitFor(100);
    await page.setData({
      webview_styles: {
        progress: {
          color: 'yellow'
        }
      }
    });
    await page.waitFor(100);
    await page.callMethod('reload');
  });

  if (isMP) {
    return
  }
  it('set auto test', async () => {
    await page.setData({
      autoTest: true
    });
    expect(1).toBe(1)
  });
  it('test touch event', async () => {
    const windowInfo = await program.callUniMethod('getWindowInfo');
    await program.tap({
      x: 1,
      y: windowInfo.safeAreaInsets.top + 44 + 1
    });
    await page.waitFor(500);
    if (!isIOS) {
      expect(await page.data('isTouchEnable')).toBe(true);
    }

    await page.setData({
      pointerEvents: 'none',
      isTouchEnable: false
    });
    await page.waitFor(100);
    await program.tap({
      x: 10,
      y: windowInfo.safeAreaInsets.top + 44 + 10
    });
    await page.waitFor(500);
    if (!isIOS && !isHarmony) {
      expect(await page.data('isTouchEnable')).toBe(false);
    }
    await page.setData({
      pointerEvents: 'auto'
    });
  });

  it('test event loading load', async () => {
    await page.callMethod('reload');
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventLoading')) || (Date.now() - start > 500);
    });
    if (isIOS) {
      const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
      if (
        platformInfo.indexOf('14.5') != -1 ||
        platformInfo.indexOf('13.7') != -1 ||
        platformInfo.indexOf('12.4') != -1
      ) {
        expect(1).toBe(1)
        return
      }
      expect(await page.data('eventLoading')).toEqual({
        "tagName": "WEB-VIEW",
        type: 'loading',
        src: 'https://www.dcloud.io/'
      });
    } else {
      expect(await page.data('eventLoading')).toEqual({
        tagName: 'WEB-VIEW',
        type: 'loading',
        src: 'https://www.dcloud.io/'
      });
    }
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventLoad')) || (Date.now() - start > 5000);
    });
    expect(await page.data('eventLoad')).toEqual({
      tagName: 'WEB-VIEW',
      type: 'load',
      src: 'https://www.dcloud.io/'
    });
  });

  it('test event contentheightchange', async () => {
    if (!isAndroid && !isIOS && !isHarmony) {
      expect(1).toBe(1);
      return;
    }
    expect(await page.callMethod('getContentHeight')).toBeGreaterThan(0);
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventContentHeightChange')) || (Date.now() - start > 500);
    });
    expect(await page.data('eventContentHeightChange')).toEqual({
      tagName: 'WEB-VIEW',
      type: 'contentheightchange',
      isValidHeight: true
    });
  });

  it('test event contentheightchange', async () => {
    if (!isAndroid && !isIOS && !isHarmony) {
      expect(1).toBe(1);
      return;
    }
    expect(await page.callMethod('getContentHeight')).toBeGreaterThan(0);
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventContentHeightChange')) || (Date.now() - start > 500);
    });
    expect(await page.data('eventContentHeightChange')).toEqual({
      tagName: 'WEB-VIEW',
      type: 'contentheightchange',
      isValidHeight: true
    });
  });

  it('test event error', async () => {
    const infos = process.env.uniTestPlatformInfo.split(' ');
    const version = parseInt(infos[infos.length - 1]);
    if (process.env.uniTestPlatformInfo.startsWith('android') && version > 5) {
      await page.setData({
        src: 'https://www.dclou.io/uni-app-x'
      });
      start = Date.now();
      await page.waitFor(async () => {
        return (await page.data('eventError')) || (Date.now() - start > 5000);
      });
      expect(await page.data('eventError')).toEqual({
        tagName: 'WEB-VIEW',
        type: 'error',
        errCode: 100002,
        errMsg: 'page error',
        url: 'https://www.dclou.io',
        fullUrl: 'https://www.dclou.io/uni-app-x',
        src: 'https://www.dclou.io/uni-app-x'
      });
    }
    await page.setData({
      autoTest: false
    });
  });

  it('checkNativeWebView', async () => {
    const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
    if (
      platformInfo.indexOf('14.5') != -1 ||
      platformInfo.indexOf('13.7') != -1 ||
      platformInfo.indexOf('12.4') != -1
    ) {
      expect(1).toBe(1)
      return
    }
    await page.waitFor(300);
    const has = await page.callMethod('checkNativeWebView')
    expect(has).toBe(true)
  })
});
