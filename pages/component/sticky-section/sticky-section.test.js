describe('component-native-sticky-section', () => {
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

  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    return
  }

  it('check_goto_sticky_header', async () => {
    //滚动回顶部
    await page.callMethod('toTop')
    page.waitFor(100)
    await page.setData({
      scrolling: 'true'
    })
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      //跳转到id为C的StickyHeader位置
      await page.callMethod('gotoStickyHeader', 'C')
    }
    await page.waitFor(async () => {
      return await page.data('scrolling') === false;
    });
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
  })
})
