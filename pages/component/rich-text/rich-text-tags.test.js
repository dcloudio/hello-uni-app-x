const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isAndroid || isIos || isHarmony
const isAppWebview = !!process.env.UNI_AUTOMATOR_APP_WEBVIEW

describe("rich-text-tags", () => {
  it("screenshot", async () => {
    const page = await program.reLaunch('/pages/component/rich-text/rich-text-tags');
    await page.waitFor('view');

    const image = await program.screenshot({ fullPage: true });
    expect(image).toSaveImageSnapshot();
  })
});
