const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase();
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'
const isWeb = platformInfo.startsWith('web')

describe("video-format", () => {
  if (isAppWebView || isWeb) {
  	it('skip', () => {
  		expect(1).toBe(1)
  	})
  	return
  }

  it("screenshot", async () => {
    const page = await program.reLaunch('/pages/component/video/video-format');
    await page.waitFor('view');
    await page.waitFor(3000)
    
    const image = await program.screenshot({ fullPage: true });
    expect(image).toSaveImageSnapshot();
  })
});
