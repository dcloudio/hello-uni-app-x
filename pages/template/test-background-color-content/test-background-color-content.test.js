describe('PagesJson-backgroundColorContent', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch(
      '/pages/template/test-background-color-content/test-background-color-content')
    await page.waitFor('view');
  });

  it('background color content size', async () => {
    await program.pageScrollTo(1000)
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot()
  })

});
