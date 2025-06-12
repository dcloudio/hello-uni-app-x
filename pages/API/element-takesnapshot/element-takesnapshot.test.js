const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')
const isWeb = platformInfo.startsWith('web')
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'
const PAGE_PATH = "/pages/API/element-takesnapshot/element-takesnapshot";

describe("element-takesnapshot", () => {
  if (isMP) {
  	it('skip mp', () => {
  		expect(1).toBe(1)
  	})
  	return
  }

  if (isWeb || isAppWebView) {
    it('dummyTest', () => {
      expect(1).toBe(1)
    })
    return
  }
  let page;
  function getData(key = '') {
    return new Promise(async (resolve, reject) => {
      const data = await page.data()
      resolve(key ? data[key] : data)
    })
  }


  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(1200);
  });


  it("takeSnapshot", async () => {
    await page.waitFor(1200)
    let btnTakeSnapshot = await page.$('.btn-TakeSnapshot')
    await btnTakeSnapshot.tap()
    await page.waitFor(1200)
    const image = await getData('snapImage')
    console.log(image)
    ///storage/emulated/0/Android/data/io.dcloud.uniappx/apps/__UNI__3584C99/cache/temp/screenshot/1697513148915.png
    expect(image.length).toBeGreaterThan(20)
  });
});
