const PAGE_PATH =
  "/pages/API/request-payment/request-payment";

describe("payment", () => {
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600)
  });
  //支付失败700711
  it("errorcode700711", async () => {
    let orderInfo =
      "service=\"111";
    await page.setData({
      orderinfo: orderInfo,
    })
    await page.callMethod('pay')
    await page.waitFor(6000);
    expect((await page.data())['errorCode']).toEqual(700711)
  });
  //重复支付
  it("errorcode700712", async () => {
    let orderInfo:
      "service=\"mobile.securitypay.pay\"&partner=\"2088801273866834\"&_input_charset=\"UTF-8\"&out_trade_no=\"20240226180607\"&subject=\"DCloud项目捐赠\"&payment_type=\"1\"&seller_id=\"payservice@dcloud.io\"&total_fee=\"0.01\"&body=\"DCloud致力于打造HTML5最好的移动开发工具，包括终端的Runtime、云端的服务和IDE，同时提供各项配套的开发者服务。\"&it_b_pay=\"1d\"&notify_url=\"http%3A%2F%2Fdemo.dcloud.net.cn%2Fpayment%2Falipay%2Fnotify.php\"&show_url=\"http%3A%2F%2Fwww.dcloud.io%2Fhelloh5%2F\"&sign=\"iYxQ8EmMdezAWPMGIFXifBoEkotH0Fg%2BLbNNgAP%2F%2BJquO0rLgoxgF8b%2Fo5lhUIQT7MkDf2JacmHvrUAZqQAuL%2BaPG%2BCOUu7hMu7zlZt3k7%2F1sUv9HFxP%2FhCFssfpZXhpTGEkttF6CmF7YQueCtxsAYBqBpQsVwGb2Pxi01ylko0%3D\"&sign_type=\"RSA\"",

      await page.setData({
        orderinfo: orderInfo,
      })
    await page.callMethod('pay')
    await page.waitFor(6000);
    expect((await page.data())['errorCode']).toEqual(700712)
  });
});
