// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('template-list-news', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/template/list-news/list-news');
    await page.waitFor(3000);
  });

  it('screenshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toMatchImageSnapshot()
  });
});
