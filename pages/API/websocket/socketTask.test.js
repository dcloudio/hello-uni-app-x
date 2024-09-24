const PAGE_PATH = '/pages/API/websocket/socketTask'

describe('ExtApi-WebSocket', () => {

  let page;
  let res;
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
    await page.callMethod('jest_connectSocket');
    await page.waitFor(1500);
    res = await page.data('jest_result');
  });

  it('Check ', async () => {
    expect(res).toBe(2);
  });
});
