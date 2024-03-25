// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('component-native-image', () => {

    let page;
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

    it('check_image_load_error', async () => {
      await page.setData({
        loadError: false,
        imageSrc: 'testerror.jpg'
      })
      await page.waitFor(300);
      expect(await page.data('loadError')).toBe(true)
    })

    if (process.env.uniTestPlatformInfo.startsWith('android')) {
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

    it('path-screenshot', async () => {
      const page = await program.navigateTo('/pages/component/image/image-path');
      await page.waitFor(3000);
      const image = await program.screenshot({
        fullPage: true
      })
      expect(image).toMatchImageSnapshot()
    });

    it('mode-screenshot', async () => {
      if (process.env.android_cpu_type === 'x86_64') return
      const page = await program.navigateTo('/pages/component/image/image-mode');
      await page.waitFor(1000);
      const image = await program.screenshot({
        fullPage: true
      })
      expect(image).toMatchImageSnapshot()
    });
});
