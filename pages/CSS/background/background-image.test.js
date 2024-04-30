describe('background-image-test', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/background/background-image');
    await page.waitFor(600);
  });


  it('background-image-screenshot', async () => {
    await page.waitFor(300);
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
  });

  it('background-image-select', async () => {
    await page.callMethod('updateBackgroundSelect')
    await page.waitFor(300);
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
  });
});
