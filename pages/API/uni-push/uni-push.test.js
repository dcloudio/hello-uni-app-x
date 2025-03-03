jest.setTimeout(30000);
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')
describe('test uni-push', () => {
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/uni-push/uni-push')
    await page.waitFor('view');
    await page.callMethod('updateAutoTest', true)
    const autoTest = await page.data('autoTest')
    console.log("autoTest", autoTest._value)
  });
  // 获取cid | getPushClientId：值
  it('getPushClientId', async () => {
    await page.callMethod('handleGetClientId')
    await page.waitFor(2000);
    const jestResult = await page.data('jestResult')
    console.log('- 获取cid-', jestResult)
    expect(jestResult.clientId.length).toBe(32);
  });

  if(isWeb || isMP){
    // app端需要自定义基座
    // 发送通知消息 | sendPushMessage：成功提示
    it('sendPushMessage', async () => {
      await page.callMethod('handleSendPushMessage')
      await page.waitFor(1000);
      console.log('-发送通知消息：成功提示-', await page.data('jestResult'))
      expect(await page.data('jestResult.sendPushMessageRes')).toBe(0);
    });
  }

  // 注册回调 | onPushMessage：成功
  it('onPushMessage', async () => {
    await page.callMethod('handleOnPushMessage')
    await page.waitFor(1000);
    console.log('注册回调：注册成功',await page.data('isRegister.state'))
    expect(await page.data('isRegister.state')).toBe(true);
  });

  if(isWeb || isMP){
    // 发送通知消息 | sendPushMessage：回调信息
    it('sendPushMessage', async () => {
      await page.callMethod('handleSendPushMessage')
      await page.waitFor(1000);
      console.log('-发送通知消息：回调信息-', await page.data('jestResult'))
      expect(await page.data('jestResult.onPushMessageType')).toBe("receive");
      const info = await page.data('jestResult.onPushMessageCallbackInfo')
      // 使用 JSON.parse 将字符串转换回对象
      const objCopy = JSON.parse(info);
      console.log("objCopy", objCopy);
      expect(objCopy).toEqual({
        "unipush_version": "2.0",
        "payload": {
          "data": "测试推送数据"
        },
        "title": "测试推送标题",
        "content": "测试推送内容"
      })
    });
  }

  // 注销回调 | offPushMessage：注销成功
  it('offPushMessage', async () => {
    await page.callMethod('handleOffPushMessage')
    await page.waitFor(1000);
    console.log('-注销回调：注销成功-',await page.data('isRegister.state'))
    expect(await page.data('isRegister.state')).toBe(false);
  });

  if(isWeb || isMP){
    // 发送通知消息 | sendPushMessage：成功提示
    it('sendPushMessage', async () => {
      await page.callMethod('handleSendPushMessage')
      await page.waitFor(300);
      console.log('-发送通知消息：成功提示-',await page.data('jestResult.sendPushMessageRes'))
      expect(await page.data('jestResult.sendPushMessageRes')).toBe(0);
    });
  }

});
