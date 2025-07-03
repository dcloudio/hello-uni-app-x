const PAGE_PATH = '/pages/API/keyboard/keyboard'

describe('keyboard', () => {
  let page;
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.startsWith('android')
  const isIOS = platformInfo.startsWith('ios')
  const isWeb = platformInfo.startsWith('web')
  if (isWeb) {
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
  });

  it('Check hideKeyboard', async () => {
    if (isIOS) {
      // iOS模拟器不弹出键盘,会导致此用例失败,因此屏蔽
      expect(1).toBe(1)
      return
    }
    // 显示键盘
    await page.setData({
      isFocus: true,
    })
    await page.waitFor(1000)
    let keyboardStatus = await page.data('keyboardStatus')
    expect(keyboardStatus).toBe('显示中')
    let keyboardHeight = await page.data('keyboardHeight')
    expect(keyboardHeight).toBeGreaterThan(0)

    await page.callMethod('hideKeyboard');
    await page.waitFor(1000)

    // 验证键盘是否隐藏
    keyboardStatus = await page.data('keyboardStatus')
    expect(keyboardStatus).toBe('已隐藏')
    keyboardHeight = await page.data('keyboardHeight')
    expect(keyboardHeight).toBe(0)
  });

});
