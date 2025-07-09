const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'
const isAndroid = platformInfo.startsWith('android')

describe('component-native-image', () => {
  const screenshotParams = { fullPage: true }
  let page;
  let start = 0;

  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/image/image');
    await page.waitFor(600);
  });

  it('check_image_load', async () => {
    expect(await page.data('loadError')).toBe(false)
  });

  it('check_image_load_url', async () => {
    await page.setData({
      loadError: false,
      imageSrc: 'https://request.dcloud.net.cn/api/http/contentType/image/png'
    })
    await page.waitFor(300);
    expect(await page.data('loadError')).toBe(false)
  })

  if(process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
    it('check_qurey_url', async () => {
      await page.setData({
        loadError: false,
        imageSrc: '/static/logo.png?t=11234'
      })
      await page.waitFor(300);
      expect(await page.data('loadError')).toBe(false)
    })
  };

  it('check_image_load_error', async () => {
    await page.setData({
      loadError: false,
      imageSrc: 'testerror.jpg'
    })
    await page.waitFor(300);
    expect(await page.data('loadError')).toBe(true)
  })

  if (isAndroid && !isAppWebView) {
    it('check-cookie', async () => {
      await page.setData({
        autoTest: true,
        setCookieImage: 'https://cdn.dcloud.net.cn/img/shadow-grey.png'
      });
      await page.waitFor(1000);
      await page.setData({
        loadError: false,
        verifyCookieImage: 'https://request.dcloud.net.cn/img/shadow-grey.png'
      });
      await page.waitFor(1000);
      expect(await page.data('loadError')).toBe(false);
      await page.setData({
        autoTest: false
      });
    })
  }

  it('test event load', async () => {
    await page.setData({
      autoTest: true,
      imageSrc: 'https://request.dcloud.net.cn/api/http/contentType/image/png'
    });
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventLoad')) || (Date.now() - start > 1000);
    });
    expect(await page.data('eventLoad')).toEqual({
      tagName: isMP ? '' : 'IMAGE',
      type: 'load',
      width: 10,
      height: 10
    });
  });

  it('test event error', async () => {
    await page.setData({
      imageSrc: 'https://request.dcloud.net.cn/api/http/contentType/404.png'
    });
    start = Date.now();
    await page.waitFor(async () => {
      return (await page.data('eventError')) || (Date.now() - start > 1000);
    });
    expect(await page.data('eventError')).toEqual({
      tagName: isMP ? '' : 'IMAGE',
      type: 'error'
    });

    await page.setData({
      autoTest: false
    });
  });

  if(isMP) {
    // TODO 整理小程序、web支持的类型，页面上进行条件编译展示
    return
  }

  it('path-screenshot', async () => {
    const page = await program.navigateTo('/pages/component/image/image-path');
    await page.waitFor(3000);
    const image = await program.screenshot(screenshotParams)
    expect(image).toSaveImageSnapshot()
  });

  it('mode-screenshot', async () => {
    if (process.env.android_cpu_type === 'x86_64') return
    const page = await program.navigateTo('/pages/component/image/image-mode');
    await page.waitFor(1000);
    const image = await program.screenshot(screenshotParams)
    expect(image).toSaveImageSnapshot()
  });

  it('long-path-screenshot', async() => {
    if (isAndroid) {
       const infos = process.env.uniTestPlatformInfo.split(' ');
       const version = parseInt(infos[infos.length - 1]);
       if (version < 8) {
         console.log("安卓版本小于8设备 测试image-long 模拟器会出现内存不足错误 影响后续测试")
         expect(1).toBe(1)
         return
       }
    }
    const page = await program.navigateTo('/pages/component/image/image-long');
    await page.waitFor(3000);
    const image = await program.screenshot(screenshotParams)
    expect(image).toSaveImageSnapshot()
  })
});
