describe('css-variable', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/variable/variable');
    await page.waitFor('view');
  });

  it('screenshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toMatchImageSnapshot()
  });
});
