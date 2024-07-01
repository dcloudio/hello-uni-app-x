// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('/pages/CSS/transform/rotate.uvue', () => {
	let page;
	beforeAll(async () => {
	  page = await program.reLaunch('/pages/CSS/transform/rotate')
	  await page.waitFor(1000);
	});

  it("snap rotate", async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  })
});
