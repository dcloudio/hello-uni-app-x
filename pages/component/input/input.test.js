// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('component-native-input', () => {

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/input/input')
    await page.waitFor(3000);
  });

  // it("beforeAllTestScreenshot", async () => {
  //   const image = await program.screenshot({
  //     fullPage: true
  //   })
  //   expect(image).toMatchImageSnapshot()
  // })
  // 测试焦点及键盘弹起
  it('focus', async () => {
    const input = await page.$('#uni-input-focus');
    expect(await input.attribute('focus')).toBe("true")
    // expect(await page.data("inputFocusKeyBoardChangeValue")).toBe(true)
    await page.setData({
      focus: false,
    })
    expect(await input.attribute('focus')).toBe("false")
    // await page.waitFor(1000)
    // expect(await page.data("inputFocusKeyBoardChangeValue")).toBe(false)
    // await page.setData({
    //   focus: true,
    // })
    // expect(await input.attribute('focus')).toBe(true)
    // await page.waitFor(1000)
    // expect(await page.data("inputFocusKeyBoardChangeValue")).toBe(true)
    // await page.setData({
    //   focus: false,
    // })
    // expect(await input.attribute('focus')).toBe(false)
    // await page.waitFor(1000)
    // expect(await page.data("inputFocusKeyBoardChangeValue")).toBe(false)
    // await page.waitFor(1000)
  });

  // 测试修改value属性
  it("value", async () => {
    const input = await page.$('#uni-input-default');
    expect(await input.property('value')).toEqual("hello uni-app x")
  })

  //测试input的类型
  it("type", async () => {
    const text = await page.$('#uni-input-type-text');
    const number = await page.$('#uni-input-type-number');
    const digit = await page.$('#uni-input-type-digit');
    const tel = await page.$('#uni-input-type-tel');
    expect(await text.attribute('type')).toEqual("text")
    expect(await number.attribute('type')).toEqual("number")
    expect(await digit.attribute('type')).toEqual("digit")
    expect(await tel.attribute('type')).toEqual("tel")
  })

  //  测试密码属性
  // it("password", async () => {
  //   const input = await page.$('.uni-input-password');
  //   expect(await input.attribute('password')).toBe(true)
  //   await page.setData({
  //     inputPassword: false,
  //     inputPasswordValue: "inputPasswordValue"
  //   })
  //   expect(await input.attribute('password')).toBe(false)
  //   await page.waitFor(500)
  //   await page.setData({
  //     inputPassword: true
  //   })
  // })
  // 测试placeholder
  // it("placeholder", async () => {
  //   const placeholder1 = await page.$('.uni-input-placeholder1');
  //   expect(await placeholder1.attribute("placeholder-style")).toMatchObject({
  //     "color": "red"
  //   })
  //   expect(await placeholder1.attribute("placeholder")).toEqual("占位符文字颜色为红色")
  //   await page.setData({
  //     inputPlaceHolderStyle: "color:#CC00CC",
  //   })
  //   expect(await placeholder1.attribute("placeholder-style")).toMatchObject({
  //     "color": "#CC00CC"
  //   })

  //   await page.setData({
  //     inputPlaceHolderStyle: "color:#CC19CC;background-color:#00b1c0",
  //   })
  //   expect(await placeholder1.attribute("placeholder-style")).toMatchObject({
  //     "color": "#CC19CC",
  //     "backgroundColor": "#00b1c0"
  //   })

  //   await page.setData({
  //     inputPlaceHolderStyle: "color:#CC19CC;background-color:#00b1c0;text-align:center;font-size:44px;font-weight:900",
  //   })
  //   expect(await placeholder1.attribute("placeholder-style")).toEqual({
  //     "backgroundColor": "#00b1c0",
  //     "color": "#CC19CC",
  //     "fontSize": "44px",
  //     "fontWeight": "900",
  //     "textAlign": "center"
  //   })

  //   const placeholder2 = await page.$('.uni-input-placeholder2');
  //   expect(await placeholder2.attribute("placeholder-class")).toMatchObject({
  //     "backgroundColor": "#008000"
  //   })
  //   await page.setData({
  //     inputPlaceHolderClass: "uni-input-placeholder-class-ts",
  //   })
  //   expect(await placeholder2.attribute("placeholder-class")).toMatchObject({
  //     "backgroundColor": "#FFA500"
  //   })
  //   expect(await placeholder2.attribute("placeholder")).toEqual("占位符背景色为绿色")
  // })

  it("disable", async () => {
    const input = await page.$('#uni-input-disable');
    expect(await input.attribute("disabled")).toBe("true")
  })

  it("confirm-type", async () => {
    expect(await (await page.$('#uni-input-confirm-send')).attribute("confirmType")).toEqual("send")
    expect(await (await page.$('#uni-input-confirm-search')).attribute("confirmType")).toEqual("search")
    expect(await (await page.$('#uni-input-confirm-next')).attribute("confirmType")).toEqual("next")
    expect(await (await page.$('#uni-input-confirm-go')).attribute("confirmType")).toEqual("go")
    expect(await (await page.$('#uni-input-confirm-done')).attribute("confirmType")).toEqual("done")
  })

  // it("maxlength", async () => {
  //   const input = await page.$('.uni-input-maxlength');
  //   await page.setData({
  //     inputMaxLengthValue: "uni-input-maxlength"
  //   })
  //   await page.waitFor(500)
  // })

  it("cursor-color", async () => {
    await page.setData({
      cursor_color: "red",
    })
    await page.waitFor(500)
    expect(await (await page.$('#uni-input-cursor-color')).attribute("cursor-color")).toBe("red")
  })

  it("afterAllTestScreenshot", async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toMatchImageSnapshot()
  })
});
