// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
jest.setTimeout(30000);
describe('editor.uvue', () => {
  if (!process.env.uniTestPlatformInfo.includes('web')) {
    it('app', () => {
      expect(1).toBe(1)
    })
    return
  }
  let page, editor, options = [];
  beforeAll(async () => {
    page = await program.reLaunch("/pages/component/editor/editor");
    await page.waitFor('view');
    editor = await page.$('#editor');
    await page.waitFor(3000);
    await page.setData({
      autoTest: true
    })
  });

  async function setBlur() {
    const start = Date.now();
    await page.callMethod('blur')
    await page.waitFor(async () => {
      return await page.data('blurTest') === true || (Date.now() - start > 2000)
    })
  }

  it('editor-wrapper', async () => {
    expect(await editor.attribute("placeholder")).toBe("开始输入...")
    expect(await editor.attribute("read-only")).toBe("false")
    expect(await program.screenshot()).toSaveImageSnapshot();
  });

  it('editor-toolbar', async () => {
    const iconfontsEl = await page.$$('.iconfont');
    for (var i = 0; i < iconfontsEl.length - 7; i++) {
      await iconfontsEl[i].tap()
      // await page.waitFor(500)
      const getFormats = await page.data('formats')
      const name = await iconfontsEl[i].attribute('data-name')
      options.push({
        insert: '文本内容' + name,
        attributes: getFormats
      })
      await page.callMethod('setContents', options)
      await page.setData({
        formats: {}
      })
      await iconfontsEl[i].tap()
    }
  });

  it('editor-screenshot', async () => {
    await setBlur()
    await page.waitFor(500);
    expect(await program.screenshot()).toSaveImageSnapshot();
  })

  it('clear', async () => {
    await page.callMethod('clear')
    expect(await editor.attribute("placeholder")).toBe("开始输入...")
  })

  it('undo-redo', async () => {
    await page.callMethod('insertDivider')
    await page.waitFor(500)
    await page.callMethod('undo')
    await page.waitFor(500)
    expect(await page.data('undoTest')).toBe(true)
    await page.callMethod('redo')
    expect(await page.data('redoTest')).toBe(true)
  })

  it('insertImage', async () => {
    await page.waitFor(500)
    await page.callMethod('insertImage', 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app.png')
    const start1 = Date.now();
    await page.waitFor(async () => {
      return await page.data('insertImageTest') === true || (Date.now() - start1 > 2000)
    })
  })

  it('insertImage-screenshot', async () => {
    await setBlur()
    const waitTime = process.env.uniTestPlatformInfo.includes('firefox') ? 5000 : 2000
    await page.waitFor(waitTime)
    expect(await program.screenshot()).toSaveImageSnapshot();
  })

  it('removeFormat', async () => {
    const bgcolorEl = await page.$('.icon-fontbgcolor');
    await bgcolorEl.tap()
    await page.waitFor(500)
    const getFormats = await page.data('formats')
    await page.callMethod('setContents', [{
      insert: '设置字体样式bgcolor',
      attributes: getFormats
    }])
    await page.waitFor(500)
    await page.callMethod('removeFormat')
    expect(await page.data('removeFormatTest')).toBe(true)
    expect(await page.data('formats')).toEqual({})
  })

});
