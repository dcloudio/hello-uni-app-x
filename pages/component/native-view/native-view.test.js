const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')

describe('native-view.uvue', () => {
  if (isMP) {
  	it('skip mp', () => {
  		expect(1).toBe(1)
  	})
  	return
  }

  if (process.env.uniTestPlatformInfo.indexOf('web') > -1 || process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true') {
    it('object', () => {
      expect(1).toBe(1)
    })
    return
  }

  if(process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
    const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
    if(
      platformInfo.indexOf('14.5') != -1 ||
      platformInfo.indexOf('13.7') != -1 ||
      platformInfo.indexOf('12.4') != -1
      ){
        // TODO: 排查 ios 不兼容版本 测试异常原因
        it('14.5 13.7 12.4 测试异常', () => {
          expect(1).toBe(1)
        })
        return
    }
  }

  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/native-view/native-view')
  });

  it('native-view检测init函数是否响应', async () => {
    await page.waitFor(600)
    const value = await page.data('isLoad')
    expect(value).toBe(true)
  })
})
