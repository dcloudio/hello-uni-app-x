const PAGE_PATH = '/pages/API/create-worker/create-worker'
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()

const isIOS = platformInfo.startsWith('ios')
const isMP = platformInfo.startsWith('mp')
const isWeb = platformInfo.startsWith('web')
const isAndroid = platformInfo.startsWith('android')
const isHarmony = platformInfo.startsWith('harmony')

describe('Api-createWorker', () => {
  // 鸿蒙由于自动化测试生成安装包功能缺失 worker 文件拷贝，暂时跳过相关测试
  if(isIOS || isHarmony) {
    it('skip Api-createWorker', async () => {
      expect(1).toBe(1)
    })
    return
  }

  let page;
  let res;
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500);
  });

  it('workerTask ', async () => {
    await page.callMethod('test_resetInputValue');
    await page.waitFor(500);
    await page.callMethod('create');
    await page.waitFor(500);
    await page.callMethod('onWorkerMsg');
    await page.callMethod('sendMessage');
    await page.waitFor(async () => {
      const taskResult = await page.data('taskResult')
      return taskResult.length > 0
    });
    expect(await page.data('taskResult')).toBe('2');
  });
});
