const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')

describe("match-media", () => {
    const isSupportted = isMP
    if (!isSupportted) {
      it("not support", () => {
        expect(1).toBe(1);
      });
      return;
    }
    
    let page;
    beforeAll(async () => {
      page = await program.reLaunch('/pages/component/match-media/match-media')
      await page.waitFor(2000);
    });

  it("match-media screenshot", async () => {
    const image = await program.screenshot({
      fullPage: true,
    });
    expect(image).toSaveImageSnapshot();
  });
});
