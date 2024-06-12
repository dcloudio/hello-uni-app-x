// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('component-native-scroll-view-refresher', () => {
  if (!process.env.uniTestPlatformInfo.startsWith('android') && !process.env.uniTestPlatformInfo.startsWith('web') || process.env.UNI_AUTOMATOR_APP_WEBVIEW) {
    it('other platform', () => {
      expect(1).toBe(1)
    })
    return
  }
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/scroll-view/scroll-view-refresher');
    await page.waitFor(300);
  });

  it('scroll-view-refresher-screenshot', async () => {
    //禁止滚动条
    await page.setData({
        showScrollbar: false
    })
    await page.waitFor(300);
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
  })

  it('check_refresher_refresh_event', async () => {
    await page.setData({
      refresherTriggered: true
    })
    await page.waitFor(2000);
    expect(await page.data('refresherrefreshTimes')).toBe(1)
    // 手动设置下拉刷新状态refresher-triggered为true时，在web和iOS不触发@refresherpulling事件
    if(process.env.uniTestPlatformInfo.startsWith('android')){
      expect(await page.data('onRefresherpullingTest')).toBe('refresherpulling:Success')
    }
    expect(await page.data('refresherrefreshTest')).toBe('refresherrefresh:Success')
    await page.waitFor(1000);
    expect(await page.data('onRefresherrestoreTest')).toBe('refresherrestore:Success')
  });

  // 仅App端支持手势下拉刷新
  if(!process.env.uniTestPlatformInfo.startsWith('web')){
    it('check_refresherabort', async () => {
      await program.swipe({
        startPoint: {x: 100,y: 500},
        endPoint: {x: 100,y: 630},
        duration: 1000
      })
      await page.waitFor(1500)
      expect(await page.data('onRefresherabortTest')).toBe('refresherabort:Success')
    });
  }

  it('check_refresher_snapshot', async () => {
    await page.setData({
      refresherTriggered: true
    })
    await page.waitFor(300);
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
  });
});
