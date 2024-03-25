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
    await page.waitFor(600);
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
  it('Check PATCH', async () => {
    await request(page, 'PATCH');
  });
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

  let shouldTestCookie = false
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let version = process.env.uniTestPlatformInfo
    version = parseInt(version.split(" ")[1])
    shouldTestCookie = version > 9
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
});
