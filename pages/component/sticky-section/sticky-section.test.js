describe('component-native-sticky-section', () => {
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let page
    beforeAll(async () => {
      page = await program.reLaunch('/pages/component/sticky-section/sticky-section')
      await page.waitFor('sticky-section')
    })

    //检测吸顶上推效果
    it('check_sticky_section', async () => {
      await page.callMethod('listViewScrollByY', 1000)
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