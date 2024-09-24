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

  // 此测试针对开发者使用 translate 移动view
  it('Check Overflow Visible Part Use translate Drag', async ()=> {
    await page.callMethod('jest_getRect')
    const point_x = await page.data('jest_click_x');
    const point_y = await page.data('jest_click_y');
    const distance = 100;
    const destY = point_y + 100
    const duration = 1000
    await program.adbCommand("input swipe" + " " + point_x + " " + point_y + " " + point_x + " " + destY + " " + duration)
    await page.waitFor(1500);
    await page.callMethod('jest_getParentRect')
    const currentParentTop = await page.data('jest_parent_top');
    const offset = 2
    const diff = Math.abs(currentParentTop - distance) < offset
    console.log("current ", currentParentTop);
    console.log("diff", diff);
    expect(diff).toBe(true)
  })

  it('Check Overflow Visible Block View Click', async () => {
    await page.callMethod('jest_getAbsoluteViewRect')
    const point_x = await page.data('jest_click_x');
    const point_y = await page.data('jest_click_y');
    console.log("input tap" + " " + point_x + " " + point_y);
    await program.adbCommand("input tap" + " " + point_x + " " + point_y)
    await page.waitFor(500);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  })

  it('Check Overflow Visible Deep Level Click', async () => {
    await page.callMethod('jest_scrollToDeepOverflow')
    await page.waitFor(500);
    const point_x = await page.data('jest_click_x');
    const point_y = await page.data('jest_click_y');
    console.log("input tap" + " " + point_x + " " + point_y);
    await program.adbCommand("input tap" + " " + point_x + " " + point_y)
    await page.waitFor(500);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  })
});
