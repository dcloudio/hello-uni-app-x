describe('pull-zoom-image', () => {
  it('screenshot', async () => {
    const page = await program.reLaunch('/pages/template/pull-zoom-image/pull-zoom-image');
    await page.waitFor('view');

    const windowInfo = await program.callUniMethod('getWindowInfo');
    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: windowInfo.safeAreaInsets.top + 44
      }
    });
    expect(image).toSaveImageSnapshot();
  });
});
