describe('image format', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/image/image-format');
    await page.waitFor('view')
    await page.waitFor(2000); // 等待页面加载完成
  });

  it('screenshot', async () => {
    const image = await program.screenshot({
      fullPage: true,
    });
    expect(image).toSaveImageSnapshot();
  });
});
