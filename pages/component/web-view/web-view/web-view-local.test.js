// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('component-native-web-view', () => {
  if (!process.env.uniTestPlatformInfo.startsWith('web') && !process.env.UNI_AUTOMATOR_APP_WEBVIEW) {
    let page;
    let start = 0;
    beforeAll(async () => {
      page = await program.reLaunch('/pages/component/web-view/web-view/web-view-local');
      await page.waitFor(1000);
    });

    it('check_load_url', async () => {
      expect(await page.data('loadError')).toBe(false)
    });

    it('screenshot', async () => {
      await page.waitFor(async () => {
        return await page.data('loadFinish') === true;
      });
      const image = await program.screenshot({
        fullPage: true
      });
      expect(image).toSaveImageSnapshot();
    });

    it('test event download', async () => {
      await page.setData({
        autoTest: true
      });
      await page.callMethod('testEventDownload');
      start = Date.now();
      await page.waitFor(async () => {
        return (await page.data('eventDownload')) || (Date.now() - start > 1000);
      });
      if (process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
        // expect(await page.data('eventDownload')).toEqual({
        //   tagName: 'WEB-VIEW',
        //   type: 'download',
        //   url: 'https://web-ext-storage.dcloud.net.cn/uni-app-x/pkg/hello-uniappx.apk',
        //   userAgent: `uni-app-x/${process.env.HX_Version.split('-')[0].split('.').slice(0, 2).join('.')}`,
        //   contentDisposition: '',
        //   mimetype: 'application/vnd.android.package-archive',
        //   isContentLengthValid: true
        // });
        return;
      }
      const infos = process.env.uniTestPlatformInfo.split(' ');
      const version = parseInt(infos[infos.length - 1]);
      if (version == 8) return; // android8测试结果不稳定
      if (version >= 9) {
        expect(await page.data('eventDownload')).toEqual({
          tagName: 'WEB-VIEW',
          type: 'download',
          url: 'https://web-ext-storage.dcloud.net.cn/uni-app-x/pkg/hello-uniappx.apk',
          userAgent: `uni-app-x/${process.env.HX_Version.split('-')[0].split('.').slice(0, 2).join('.')}`,
          contentDisposition: `attachment; filename="hello-uniappx.apk"; filename*=utf-8''hello-uniappx.apk`,
          mimetype: 'application/vnd.android.package-archive',
          isContentLengthValid: true
        });
      } else if (version >= 7) { // 低版本webview内核，部分属性无有效值
        expect(await page.data('eventDownload')).toEqual({
          tagName: 'WEB-VIEW',
          type: 'download',
          url: 'https://web-ext-storage.dcloud.net.cn/uni-app-x/pkg/hello-uniappx.apk',
          userAgent: '',
          contentDisposition: '',
          mimetype: '',
          isContentLengthValid: false
        });
      }
    });

    it('test event message', async () => {
      const infos = process.env.uniTestPlatformInfo.split(' ');
      const version = parseInt(infos[infos.length - 1]);
      if (process.env.uniTestPlatformInfo.startsWith('android') && version > 6) {
        await page.callMethod('testEventMessage');
        start = Date.now();
        await page.waitFor(async () => {
          return (await page.data('eventMessage')) || (Date.now() - start > 500);
        });
        expect(await page.data('eventMessage')).toEqual({
          tagName: 'WEB-VIEW',
          type: 'message',
          data: [{
            action: 'message'
          }]
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
