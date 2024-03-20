describe('component-native-nested-scroll-header', () => {
  let page
  beforeAll(async () => {
    //打开lnested-scroll-header测试页
    page = await program.reLaunch('/pages/component/nested-scroll-header/nested-scroll-header')
    await page.waitFor(600)
  })


  it('check_nested-scroll-header', async () => {
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
  })
})

