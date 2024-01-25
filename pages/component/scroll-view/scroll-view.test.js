describe('component-native-scroll-view', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/scroll-view/scroll-view');
    await page.waitFor(300);
  });


  it('scroll-view-screenshot', async () => {
    //禁止滚动条
    await page.setData({
        showScrollbar: false
    })
    await page.waitFor(300);
    const image = await program.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
