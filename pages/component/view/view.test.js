const PAGE_PATH = '/pages/component/view/view'

// 此用例仅用于模拟点击关闭iOS弹窗逻辑，无实际意义
describe('view-test', () => {

  // 先屏蔽 android 及 web 平台
  if (process.env.uniTestPlatformInfo.startsWith('android') || process.env.uniTestPlatformInfo.startsWith('web')) {
    it('other platform', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(1000);
  })


  it('itemclick-event', async () => {
    // 关闭弹窗 iPhone Pro 机型
    await program.tap({
      x: 220,
      y: 516,
      duration: 100
    })

    // 关闭弹窗 iPhone ProMax 机型
    await program.tap({
      x: 220,
      y: 546,
      duration: 100
    })

    // 关闭弹窗 iPhone mini 机型
    await program.tap({
      x: 186,
      y: 463,
      duration: 100
    })
    expect(1).toBe(1)
  })

})
