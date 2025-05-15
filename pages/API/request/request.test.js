const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIOS = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isAppWebview = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

const PAGE_PATH = '/pages/API/request/request'
const methodMap = {
  "GET": "/api/http/method/get",
  "POST": "/api/http/method/post",
  "PUT": "/api/http/method/put",
  "DELETE": "/api/http/method/delete",
  "PATCH": "/api/http/method/patch",
  "OPTIONS": "/api/http/method/options",
  "HEAD": "/api/http/method/head"
}

async function request(page, method, header, data, url) {
  if (url == null) {
    url = methodMap[method]
  }
  await page.setData({
    url: url,
    method: method,
    data: data,
    header: header
  })
  res = await page.callMethod('jest_request')
  await page.waitFor(2000);
  res = await page.data('jest_result');
  expect(res).toBe(true)
}

describe('ExtApi-Request', () => {
  let page;
  let res;

  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view');
  });


  beforeEach(async () => {
    await page.setData({
      jest_result: false,
      data: null,
      header: null
    })
  });


  it('Check GET', async () => {
    await request(page, 'GET');
  });
  it('Check POST ContentType Json', async () => {
    await request(page, 'POST', {
      "Content-Type": "application/json"
    }, {
      "hello": "world"
    }, "/api/http/contentType/json");
  });
  it('Check POST ContentType Form', async () => {
    await request(page, 'POST', {
      "Content-Type": "application/x-www-form-urlencoded"
    }, "hello=world", "/api/http/contentType/xWwwFormUrlencoded");
  });
  it('Check PUT', async () => {
    await request(page, 'PUT');
  });
  it('Check DELETE', async () => {
    await request(page, 'DELETE');
  });
  // 鸿蒙平台暂不支持PATCH方法
  if(!isHarmony) {
    it('Check PATCH', async () => {
      await request(page, 'PATCH');
    });
  }
  if (process.env.uniTestPlatformInfo.indexOf('web') === -1) {
    it('Check OPTIONS', async () => {
      await request(page, 'OPTIONS');
    });
  }
  it('Check HEAD', async () => {
    await request(page, 'HEAD');
  });
  it('Request with timeout null', async () => {
    res = await page.callMethod('jest_timeout_null')
    await page.waitFor(2000);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  });
  it('Get Array', async () => {
    res = await page.callMethod('jest_get_array')
    await page.waitFor(2000);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  })

  let shouldTestCookie = false
  if (isAndroid && !isAppWebview) {
    let version = process.env.uniTestPlatformInfo
    version = parseInt(version.split(" ")[1])
    shouldTestCookie = version > 9
  }

  if (process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('ios') && !isAppWebview) {
    shouldTestCookie = true
  }

  if (!shouldTestCookie) {
    return
  }

  it('Check Set Cookie', async () => {
    res = await page.callMethod('jest_set_cookie')
    await page.waitFor(2000);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  });
  it('Check Delete Cookie', async () => {
    res = await page.callMethod('jest_delete_cookie')
    await page.waitFor(2000);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  });
  it('Check Set Cookie Expires', async () => {
    await page.callMethod('jest_set_cookie_expires')
    await page.waitFor(2000);
    res = await page.data('jest_result_data');
    console.log("request expires cookie data :", res);
    res = await page.data('jest_result');
    expect(res).toBe(true)
    await page.setData({
      jest_result: false,
      jest_result_data: "",
      data: null,
      header: null
    })
    await page.waitFor(5000);
    await page.callMethod('jest_cookie_request', false)
    await page.waitFor(2000);
    res = await page.data('jest_result_data');
    console.log("verify request data :", res);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  });
  it('Check Get With Data', async () => {
    res = await page.callMethod('jest_get_with_data')
    await page.waitFor(2000);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  })
  it('Check Get With Generics', async () => {
    res = await page.callMethod('jest_get_with_generics')
    await page.waitFor(2000);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  })

  // 15以下的模拟器所对应的xcode不能编译自定义插件，大于15是因为某台设备，会用xcode14.1跑15.5的设备
  let version = process.env.uniTestPlatformInfo
  let split = version.split(" ")
  version = parseInt(split[split.length - 1])
  if(!process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('ios') || version > 15) {
    it('Check Post In UTS Module', async () => {
      res = await page.callMethod('jest_uts_module_invoked')
      await page.waitFor(2000);
      res = await page.data('jest_result');
      expect(res).toBe(true)
    })
  }

  it('Check Respone Json String', async () => {
    res = await page.callMethod('jest_respone_json_string')
    await page.waitFor(2000);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  })

  if(process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('android')){
    it('Check Respone With String Generics', async () => {
      res = await page.callMethod('jest_respone_with_string_generics')
      await page.waitFor(2000);
      res = await page.data('jest_result');
      expect(res).toBe(true)
    })
  }

  if(process.env.uniTestPlatformInfo.toLocaleLowerCase().startsWith('android')){
    it('Check Respone string generics when status is 404', async () => {
      res = await page.callMethod('jest_respone_with_404_and_string_generics')
      await page.waitFor(2000);
      res = await page.data('jest_result');
      expect(res).toBe(true)
    })
  }

  if (isAndroid || isIOS) {
    it('send arraybuffer', async () => {
      res = await page.callMethod('sendArrayBuffer',true)
      await page.waitFor(5000);
      res = await page.data('res');
      expect(res).toEqual('请求结果 : 123,34,104,101,108,108,111,34,58,34,119,111,114,108,100,34,125')
    })
  }
});
