const PAGE_PATH = '/pages/API/download-file/download-file'

describe('ExtApi-DownloadFile', () => {

  let page;
  let res;
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
    await page.callMethod('jest_downloadFile');
    await page.waitFor(1000);
    res = await page.data('jest_result');
  });

  it('Check ', async () => {
    expect(res).toBe(true);
  });
});
