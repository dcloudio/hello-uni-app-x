const PAGE_PATH = '/pages/API/download-file/download-file'

describe('ExtApi-DownloadFile', () => {

  let page;
  let res;
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
    await page.callMethod('jest_downloadFile');
    await page.waitFor(2000);
    res = await page.data('jest_result');
  });

  beforeEach(async () => {
    await page.setData({
      jest_result: false
    })
  });

  it('Check ', async () => {
    expect(res).toBe(true);
  });

  let shouldTestCookie = false
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let version = process.env.uniTestPlatformInfo
    version = parseInt(version.split(" ")[1])
    shouldTestCookie = version > 9
  } else if (process.env.uniTestPlatformInfo.startsWith('web')) {
    // TODO 测试网址调整后放开此测试
    shouldTestCookie = false
  }
  if (!shouldTestCookie) {
    return
  }

  it('Check Set Cookie', async () => {
    res = await page.callMethod('jest_set_cookie')
    await page.waitFor(2000);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  });
  it('Check Delete Cookie', async () => {
    res = await page.callMethod('jest_delete_cookie')
    await page.waitFor(2000);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  });
});
