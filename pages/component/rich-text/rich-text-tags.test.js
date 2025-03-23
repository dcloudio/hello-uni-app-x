const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isApp = isAndroid || isIos
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')
const isAppWebview = !!process.env.UNI_AUTOMATOR_APP_WEBVIEW

let pageIndex = 0
const pages = [
  '/pages/component/rich-text/rich-text-tags'
]

let page;
let windowInfo

async function getWindowInfo() {
  const windowInfoPage = await program.reLaunch('/pages/API/get-window-info/get-window-info')
  await windowInfoPage.waitFor(600);
  return await windowInfoPage.callMethod('jest_getWindowInfo')
}

describe("page screenshot test", () => {
  if (platformInfo.indexOf('safari') !== -1) {
    it('暂时规避 safari 截图测试', () => {
      expect(1).toBe(1)
    })
    return
  }

  beforeAll(async () => {
    console.log("page screenshot test start");
  });
  beforeEach(async () => {
    const currentPagePath = pages[pageIndex]
    page = await program.reLaunch(currentPagePath);
  });
  afterEach(() => {
    pageIndex++;
  });
  afterAll(() => {
    console.log("page screenshot test finish");
  });
  test.each(pages)("%s", async () => {
    const currentPagePath = pages[pageIndex]
    console.log("Taking screenshot: ", pageIndex, currentPagePath);
    let fullPage = true;

    const screenshotParams = {
      fullPage
    }
    if (!fullPage && !isAppWebview) {
      if (!windowInfo) {
        windowInfo = await getWindowInfo()
        page = await program.reLaunch(currentPagePath);
      }
      let offsetY = '0'
      if (isAndroid) {
        offsetY = `${windowInfo.statusBarHeight + 44}`
      }
      if (isIos) {
        offsetY = `${windowInfo.safeAreaInsets.top + 44}`
      }
      screenshotParams.offsetY = offsetY
    }

    await page.waitFor(2000);

    const image = await program.screenshot(screenshotParams);
    expect(image).toSaveImageSnapshot({
      customSnapshotIdentifier() {
        return `__pages_test__/${currentPagePath.replace(/\//g, "-").substring(1)}`
      }
    })
    await page.waitFor(800);
  });
});
