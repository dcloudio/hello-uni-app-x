const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isAndroid || isIos

let page;
describe('web-cover-view', () => {
  if (isHarmony) {
    it('not support', () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/cover-view/cover-view')
    await page.waitFor('view');
    await page.waitFor('cover-view');
    if(isApp){
    // app 端 cover-image 会被转换为 image
      await page.waitFor('image');
    }else{
      await page.waitFor('cover-image');
      await page.waitFor('map');
    }
    // 等待地图加载完成
    const waitTime = process.env.uniTestPlatformInfo.includes('firefox') ? 5000:3000
    await page.waitFor(waitTime)
  });

  it('screenshot', async () => {
    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image).toSaveImageSnapshot();
  });
});
