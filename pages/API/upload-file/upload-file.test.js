const PAGE_PATH = '/pages/API/upload-file/upload-file'

describe('ExtApi-UploadFile', () => {

  let page;
  let res;
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
    await page.callMethod('jest_uploadFile');
    await page.waitFor(1000);
    res = await page.data('jest_result');
  });

  beforeEach(async () => {
    await page.setData({
      jest_result: false
    })
  });

  it('Check ', async () => {
    expect(res).toBe(true);
  });

  it('Check Set Cookie', async () => {
    res = await page.callMethod('jest_set_cookie')
    await page.waitFor(1000);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  });
  it('Check Delete Cookie', async () => {
    res = await page.callMethod('jest_delete_cookie')
    await page.waitFor(1000);
    res = await page.data('jest_result');
    expect(res).toBe(true)
  });
});
