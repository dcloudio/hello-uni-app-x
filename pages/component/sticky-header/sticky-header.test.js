describe('component-native-sticky-header', () => {
  let page
  beforeAll(async () => {
    //打开list-view测试页
    page = await program.reLaunch('/pages/component/sticky-header/sticky-header')
    await page.waitFor(200)
  })

  //检测吸顶效果
  it('check_sticky_header', async () => {
    await page.callMethod('confirm_scroll_top_input', 600)
    await page.waitFor(400)
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
  })
})
