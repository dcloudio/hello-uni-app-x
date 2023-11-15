describe('component-native-list-view', () => {
  let page
  beforeAll(async () => {
    //打开list-view-multiplex测试页
    page = await program.reLaunch('/pages/component/list-view/list-view-multiplex')
    await page.waitFor('list-view')
  })

  //滚动list-view到底部 加载更多 如果异常则直接闪退
  it('check_list_item_multiplex', async () => {
    await page.callMethod('listViewScrollByY', 5000)
    await page.waitFor(400)
    await page.callMethod('listViewScrollByY', 100)
  })

})
