describe('template-half-screen', () => {
  let page;

  beforeAll(async () => {
    page = await program.reLaunch('/pages/template/half-screen/half-screen')
  });

  it('screenshot', async () => {
    await page.waitFor('view')
    const btn = await page.$('.bottomButton')
    await btn.tap()
    await page.waitFor(500)
    const image = await program.screenshot({
      fullPage: true ,
    })
    expect(image).toSaveImageSnapshot()
  });
});
