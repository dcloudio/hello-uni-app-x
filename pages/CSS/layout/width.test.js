describe('/pages/CSS/layout/width.uvue', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/layout/width');
  });

  it('test nest components width', async () => {
    await page.waitFor('view');
    const element = await page.$('.child_box');

    console.log('element', element)
    const size = await element.size()
    if (process.env.UNI_APP_X_DOM2 === "true") {
      expect(size.width).toBe(100)
      expect(size.height).toBe(100)
    } else {
      expect(size.width).toBe(150)
      expect(size.height).toBe(150)
    }

  })
});
