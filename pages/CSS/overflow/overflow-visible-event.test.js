// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('/pages/CSS/overflow/overflow-visible-event.uvue', () => {
  if (!process.env.uniTestPlatformInfo.startsWith('android')) {
    it('dummyTest', async () => {
      expect(1).toBe(1)
    })
    return
  }


	let page;
  let res;
	beforeAll(async () => {
	  page = await program.reLaunch('/pages/CSS/overflow/overflow-visible-event')
	  await page.waitFor(600);
	})
  beforeEach(async () => {
    await page.setData({
      jest_result: false,
      jest_click_x: -1,
      jest_click_y: -1
    })
  });

  it('Check Overflow Visible Part Click', async () => {
    res = await page.callMethod('jest_getRect')
    const point_x = await page.data('jest_click_x');
    const point_y = await page.data('jest_click_y');
    await program.adbCommand("input tap" + " " + point_x + " " + point_y)
    await page.waitFor(500);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  });
});
