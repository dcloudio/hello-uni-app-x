describe("match-media", () => {
  it("match-media screenshot", async () => {
    page = await program.currentPage();
    await page.waitFor(3000);
    const image = await program.screenshot({
      fullPage: true,
    });
    expect(image).toSaveImageSnapshot();
  });
});
