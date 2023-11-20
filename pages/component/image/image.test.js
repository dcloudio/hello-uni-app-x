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

    it('path-screenshot', async () => {
      const page = await program.navigateTo('/pages/component/image/image-path');
      await page.waitFor(3000);
      const image = await program.screenshot({
        fullPage: true
      })
      expect(image).toMatchImageSnapshot()
    });
});
