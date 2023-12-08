describe('component-native-list-view', () => {
  let page
  beforeAll(async () => {
    //打开list-view测试页
    page = await program.reLaunch('/pages/CSS/overflow/overflow')
    await page.waitFor("image")
  })

  //检测overflow设置hidden，visible
  it('check_view_overflow', async () => {
    const image = await program.screenshot({
      fullPage: true,
    });
    expect(image).toMatchImageSnapshot();
  })
})
