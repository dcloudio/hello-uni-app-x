describe('/pages/CSS/layout/width.uvue', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/CSS/layout/width');
  });

  it('test nest components width', async () => {
    const element = await page.$('#child_box');
    const size = await element.size()

    expect(size.width).toBe(150)
    expect(size.height).toBe(150)
  })
});
