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

  it('Check Special characters Url download file', async () => {
    res = await page.callMethod('jest_special_characters_download')
    await page.waitFor(2000);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  });

  if (!process.env.uniTestPlatformInfo.startsWith('web')) {
    it('Check uni.env', async () => {
      await page.callMethod('jest_downloadFile_with_uni_env');
      await page.waitFor(2000);
      res = await page.data('jest_result');
      expect(res).toBe(true);
    });

    // 15以下的模拟器所对应的xcode不能编译自定义插件，大于15是因为某台设备，会用xcode14.1跑15.5的设备
    let version = process.env.uniTestPlatformInfo
    let split = version.split(" ")
    version = parseInt(split[split.length - 1])
    if(!process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('ios') || version > 15) {
      it('Check Download File In UTS Module', async () => {
        res = await page.callMethod('jest_uts_module_invoked')
        await page.waitFor(2000);
        res = await page.data('jest_result');
        expect(res).toBe(true)
      })
    }
  }


  let shouldTestCookie = false
  if (process.env.uniTestPlatformInfo.startsWith('android') && !process.env.UNI_AUTOMATOR_APP_WEBVIEW) {
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
