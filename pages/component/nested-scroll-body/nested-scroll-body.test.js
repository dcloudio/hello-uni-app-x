describe('component-native-nested-scroll-body', () => {
  let page
  beforeAll(async () => {
    //打开lnested-scroll-body测试页
    page = await program.reLaunch('/pages/component/nested-scroll-body/nested-scroll-body')
    await page.waitFor(600)
  })

  //检测横向scroll_into_view属性赋值
  it('check_scroll_into_view_left', async () => {
    await page.callMethod('testBodyScrollBy', 400)
    await page.waitFor(300)
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
  })
})
