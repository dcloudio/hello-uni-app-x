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

  it('Check ', async () => {
    expect(res).toBe(true);
  });
});
