// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('component-native-web-view', () => {
  if (!process.env.uniTestPlatformInfo.startsWith('web') && !process.env.UNI_AUTOMATOR_APP_WEBVIEW) {
    let page;
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

    it('test touch event', async () => {
      await page.setData({
        autoTest: true
      });
      const info = await page.callMethod('getWindowInfo');
      await program.tap({
        x: 1,
        y: (info.statusBarHeight + 44) * info.pixelRatio + 1
      });
      await page.waitFor(100);
      expect(await page.data('eventTouchstart')).toEqual({
        clientX: 1,
        clientY: 1
      });
      expect(await page.data('eventTap')).toEqual({
        clientX: 1,
        clientY: 1
      });
      await page.setData({
        pointerEvents: 'none'
      });
      await page.waitFor(100);
      await program.tap({
        x: 10,
        y: (info.statusBarHeight + 44) * info.pixelRatio + 10
      });
      await page.waitFor(100);
      expect(await page.data('eventTouchstart')).toEqual({
        clientX: 1,
        clientY: 1
      });
      expect(await page.data('eventTap')).toEqual({
        clientX: 1,
        clientY: 1
      });
      await page.setData({
        pointerEvents: 'auto'
      });
    });

    it('test event loading load', async () => {
      await page.callMethod('reload');
      await page.waitFor(100);
      if(process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
        expect(await page.data('eventLoading')).toEqual({
          type: 'loading',
          src: 'https://www.dcloud.io/'
        });
      }else {
        expect(await page.data('eventLoading')).toEqual({
          tagName: 'WEB-VIEW',
          type: 'loading',
          src: 'https://www.dcloud.io/'
        });
      }

      await page.waitFor(1000);
      if(process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
         expect(await page.data('eventLoad')).toEqual({
           tagName: 'WEB-VIEW',
           type: 'load',
           src: 'https://www.dcloud.io/'
         });
      }else {
        expect(await page.data('eventLoad')).toEqual({
          tagName: 'WEB-VIEW',
          type: 'load',
          src: 'https://www.dcloud.io/'
        });
      }

    });

    it('test event error', async () => {
      const infos = process.env.uniTestPlatformInfo.split(' ');
      const version = parseInt(infos[infos.length - 1]);
      if (process.env.uniTestPlatformInfo.startsWith('android') && version > 5) {
        await page.setData({
          src: 'https://www.dclou.io/uni-app-x'
        });
        await page.waitFor(500);
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
  } else {
    // TODO: web 端暂不支持
    it('web', async () => {
      expect(1).toBe(1)
    })
  }
});
