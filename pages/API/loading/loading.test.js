// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('API-loading', () => {

  let page;
  const isAndroid = process.env.UNI_OS_NAME === "android";

  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/loading/loading')

    await page.waitFor(200);

  });



  // it("onload-loading-test", async () => {
  //   if (isAndroid) {
  //     const res = await page.callMethod('jest_getWindowInfo')
  //     const windowHeight = res.windowHeight * res.pixelRatio;
  //     const windowWidth = res.windowWidth * res.pixelRatio;
  //     const image = await program.screenshot({
  //       adb: true,
  //       area: {
  //         x: 0,
  //         y: windowHeight / 2 + 120,
  //         height: windowHeight / 2,
  //         width:windowWidth
  //       },
  //     });
  //     expect(image).toMatchImageSnapshot();
  //   }else{
  //     const image = await program.screenshot({
  //       adb: true,
  //       fullPage: true
  //     });
  //     expect(image).toMatchImageSnapshot()
  //   }
  // })


});
