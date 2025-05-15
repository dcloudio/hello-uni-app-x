describe("rich-text-tags", () => {
  it("screenshot", async () => {
    const page = await program.reLaunch('/pages/component/rich-text/rich-text-tags');
    await page.waitFor('view');
    await page.waitFor(1000)
    const image = await program.screenshot({ fullPage: true });
    expect(image).toSaveImageSnapshot();
  })
});
