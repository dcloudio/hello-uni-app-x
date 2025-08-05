describe('background-image-test', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/background/background-image');
    await page.waitFor('view');
    await page.waitFor(1000);
  });


  it('background-image-screenshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    });
    expect(image).toSaveImageSnapshot();
  });

  it('background-image-select', async () => {
    await page.callMethod('updateBackgroundSelect')
    await page.waitFor(300);
    const image = await program.screenshot({
      fullPage: true
    });
    expect(image).toSaveImageSnapshot();
  });

  it('动态切换 background color', async () => {
    await page.callMethod('setBackgroundColor')
    await page.waitFor(300);
    const image = await program.screenshot({
      fullPage: true
    });
    expect(image).toSaveImageSnapshot();

  })
  it('动态切换 background color/image', async () => {
    await page.callMethod('setBackgroundImage')
    await page.waitFor(300);

    const image = await program.screenshot({
      fullPage: true
    });
    expect(image).toSaveImageSnapshot();

  })
});
