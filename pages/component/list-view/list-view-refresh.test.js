describe('component-native-list-view-refresh', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web')) {
    it('dummyTest', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page
  beforeAll(async () => {
    //打开list-view测试页
    page = await program.reLaunch('/pages/component/list-view/list-view-refresh')
    await page.waitFor(600)
  })

  it('check_list_view_refresh', async () => {
    await page.waitFor(async () => {
      return await page.data('refresherTriggered') === false;
    });
    //等待下拉刷新结束
    await page.waitFor(500)
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
  })
})
