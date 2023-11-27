describe('component-native-sticky-header', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page
    beforeAll(async () => {
      page = await program.reLaunch('/pages/component/sticky-header/sticky-header')
      await page.waitFor('sticky-header')
    })

    //检测吸顶效果
    it('check_sticky_header', async () => {
      await page.callMethod('confirm_scroll_top_input', 600)
      const image = await program.screenshot();
      expect(image).toMatchImageSnapshot();
    })
  } else {
    // TODO: web 端暂不支持
    it('web', async () => {
      expect(1).toBe(1)
    })
  }
})