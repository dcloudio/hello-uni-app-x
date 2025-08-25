const PAGE_PATH = '/pages/API/create-worker/create-worker'
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()

const isIOS = platformInfo.startsWith('ios')
const isMP = platformInfo.startsWith('mp')
const isWeb = platformInfo.startsWith('web')
const isAndroid = platformInfo.startsWith('android')
const isHarmony = platformInfo.startsWith('harmony')

describe('Api-createWorker', () => {
  if(isMP || isWeb || isHarmony) {
    it('skip', async () => {
      expect(1).toBe(1)
    })
    return
  }

  let page;
  let res;
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
    await page.callMethod('test_resetInputValue');
    await page.waitFor(1500);
    await page.callMethod('create');
    await page.waitFor(500);
    await page.callMethod('sendMessage');
    await page.waitFor(500);
    res = await page.data('taskResult');
  });

  it('workerTask ', async () => {
    expect(res).toBe('2');
  });
});
