// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('component-native-textarea', () => {

  let page;
  let textarea;
  beforeAll(async () => {
    page = await program.reLaunch("/pages/component/textarea/textarea");
    await page.waitFor(3000);
    textarea = await page.$('.uni-textarea');
    await page.waitFor(1000);
  });

  it('focus', async () => {
    expect(await textarea.attribute("focus")).toBe("true")
    await page.setData({
      focus_boolean: false,
    })
    await page.waitFor(500)
    expect(await textarea.attribute("focus")).toBe("false")
  });
  /* it("auto-height", async () => {
    await page.setData({
      auto_height_boolean: true
    })
    await page.waitFor(500)
    // 原始高度
    var {
      width,
      height
    } = await textarea.size()
    expect(height).toBeGreaterThanOrEqual(150)
    await page.waitFor(500)
    // 只有一行的高度
    await page.setData({
      maxlength: 3,
    })
    await page.waitFor(500)
    await page.setData({
      default_value: "第一行\n第二行\n第三行",
    })
    await page.waitFor(500)
    var {
      width,
      height
    } = await textarea.size()
    expect(height).toBeLessThanOrEqual(50)

    // 四行的高度
    await page.setData({
      maxlength: -1,
    })
    await page.waitFor(500)
    await page.setData({
      default_value: "第一行\n第二行\n第三行\n第四行",
    })
    await page.waitFor(500)
    var {
      width,
      height
    } = await textarea.size()
    expect(height).toBeLessThanOrEqual(150)
  }) */
  it("cursor-color", async () => {
    await page.setData({
      cursor_color: "transparent",
    })
    await page.waitFor(500)
    expect(await textarea.attribute("cursor-color")).toBe("transparent")
  })

  it("inputmode", async () => {
    const inputmodeEnum = await page.data("inputmode_enum")
    for (var i = 0; i < inputmodeEnum.length; i++) {
      var x = inputmodeEnum[i]
      console.log(x['value'], x['name'])
      var selected = x['value'] - 1
      if(i == inputmodeEnum.length - 1){
        selected = i
      }
      await page.callMethod("radio_change_inputmode_enum", selected);
      await page.waitFor(500)
      expect(await textarea.attribute("inputmode")).toEqual(x['name'])
      await page.waitFor(500)
    }
  })
});
