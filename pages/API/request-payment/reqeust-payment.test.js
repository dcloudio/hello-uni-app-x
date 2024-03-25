const PAGE_PATH =
  "/pages/API/request-payment/request-payment";

describe("payment", () => {
  if (process.env.uniTestPlatformInfo.indexOf('web') > -1) {
    it('web', () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600)
  });
  //支付失败700711
  it("errorcode700711", async () => {
    let orderInfo =
      "service=\"mobile.securitypay.pay\"&partner=\"2088801273866834\"&_input_charset=\"UTF-8\"&out_trade_no=\"20240229115452\"&subject=\"DCloud项目捐赠\"&payment_type=\"1\"&seller_id=\"payservice@dcloud.io\"&total_fee=\"0.01\"&body=\"DCloud致力于打造HTML5最好的移动开发工具，包括终端的Runtime、云端的服务和IDE，同时提供各项配套的开发者服务。\"&it_b_pay=\"1d\"&notify_url=\"http%3A%2F%2Fdemo.dcloud.net.cn%2Fpayment%2Falipay%2Fnotify.php\"&show_url=\"http%3A%2F%2Fwww.dcloud.io%2Fhelloh5%2F\"&sign=\"diZdkTX2iIP1oZh25UCGqx%2BpkViqAN8xdvMNSJF79aq0JiunX2mtr%2BbNlDsP0YL5x85KjULsqx%2Fq%2B5wij6eMoBVeJ%2BHhyjkwt0PYuwntroJ2Ho8bdUVEybBgOjy240NbCUtKmZzNRQAGsmLztKWzsg1srsQ8Se3Qi8KGDaOhqBs%3D\"&sign_type=\"RSA\"";
    await page.setData({
      orderinfo: orderInfo,
    })
    await page.callMethod('jest_pay')
    await page.waitFor(async () => {
      return await page.data('complete') === true;
    });
    expect((await page.data())['errorCode']).toEqual(700711)
  });
});
