const PAGE_PATH = '/pages/API/keyboard/keyboard'

describe('keyboard', () => {
  let page;

  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
  });

  it('Check hideKeyboard', async () => {
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
