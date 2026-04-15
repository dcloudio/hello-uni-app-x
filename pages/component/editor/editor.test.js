jest.setTimeout(30000);
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isIos = platformInfo.startsWith('ios')
const isDom2 = process.env.UNI_APP_X_DOM2 === 'true'
const isHarmony = platformInfo.startsWith('harmony')
const isWeb = platformInfo.startsWith('web')

describe('editor.uvue', () => {
  if (!isIos || (isDom2 && isHarmony)) {
    it('app', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  let editor

  async function waitForData(path, matcher, timeout = 3000) {
    const start = Date.now()
    await page.waitFor(async () => {
      const value = await page.data(path)
      return matcher(value) || (Date.now() - start > timeout)
    })
  }

  async function updateData(partial) {
    await page.setData({
      data: partial
    })
  }

  async function ensureToolbarVisible() {
    if (isWeb) {
      return
    }
    await editor.tap()
    await waitForData('data.toolbarVisible', value => value === true, 4000)
  }

  async function openSheet(methodName, sheetName, titleText, subtitleText) {
    await ensureToolbarVisible()
    await page.callMethod(methodName)
    await waitForData('data.activeSheet', value => value === sheetName, 2000)
    await page.waitFor(300)
    const title = await page.$('.toolbar-panel-title')
    const subtitle = await page.$('.toolbar-panel-subtitle')
    expect(await title.text()).toBe(titleText)
    expect(await subtitle.text()).toBe(subtitleText)
  }

  async function closeSheet() {
    await page.callMethod('closeSheets')
    await waitForData('data.activeSheet', value => value === '', 2000)
  }

  async function waitForFlag(path, timeout = 3000) {
    await waitForData(path, value => value === true, timeout)
    expect(await page.data(path)).toBe(true)
  }

  async function setBlur() {
    await updateData({
      blurTest: false
    })
    await page.callMethod('blur')
    await waitForFlag('data.blurTest', 2000)
  }

  async function setEditorContents(ops) {
    await page.callMethod('setContents', ops)
    await page.waitFor(500)
  }

  async function getDelta() {
    await updateData({
      getContentDeltaTest: null
    })
    await page.callMethod('getCon')
    await waitForData('data.getContentDeltaTest', value => value != null, 3000)
    return await page.data('data.getContentDeltaTest')
  }

  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/editor/editor')
    await page.waitFor('view')
    await page.waitFor(isWeb ? 3000 : 6000)
    editor = await page.$('#editor')
    await updateData({
      autoTest: true
    })
    await ensureToolbarVisible()
  })

  it('editor-wrapper', async () => {
    expect(await page.data('data.activeSheet')).toBe('')
    expect(await page.data('data.formats')).toEqual({
      bold: false,
      italic: false,
      underline: false,
      strike: false,
      header: 0,
      list: '',
      align: '',
      textIndent: '',
      marginLeft: '',
      marginRight: '',
      lineHeight: '',
      letterSpacing: '',
      fontFamily: '',
      fontSize: '',
      color: '',
      backgroundColor: ''
    })
    if (isWeb) {
      expect(await editor.attribute('placeholder')).toBe('请输入正文内容...')
    }
    expect(await program.screenshot()).toSaveImageSnapshot()
  })

  it('editor-toolbar', async () => {
    await openSheet('openMoreSheet', 'more', '更多操作', '插入与编辑快捷操作')
    await openSheet('openTitleSheet', 'title', '设置标题', '当前为正文')
    await openSheet('openStyleSheet', 'style', '设置字格式', '当前未设置字格式')
    await openSheet('openAlignSheet', 'align', '对齐方式', '当前为默认对齐')
    await closeSheet()
  })

  it('editor-screenshot', async () => {
    await openSheet('openStyleSheet', 'style', '设置字格式', '当前未设置字格式')
    expect(await program.screenshot()).toSaveImageSnapshot()
    await closeSheet()
  })

  it('clear', async () => {
    await setEditorContents([
      { insert: '清空前的内容' },
      { insert: '\n' }
    ])
    await updateData({
      clearTest: false
    })
    await page.callMethod('clear')
    await waitForFlag('data.clearTest', 2000)
    const delta = await getDelta()
    const ops = Array.isArray(delta.ops) ? delta.ops : []
    expect(ops.length <= 1).toBe(true)
    if (ops.length === 1) {
      expect(ops[0].insert).toBe('\n')
    }
  })

  it('undo-redo', async () => {
    await setEditorContents([
      { insert: '撤销重做验证' },
      { insert: '\n' }
    ])
    await updateData({
      undoTest: false,
      redoTest: false
    })
    await page.callMethod('insertDivider')
    await page.waitFor(500)
    await page.callMethod('undo')
    await waitForFlag('data.undoTest', 2000)
    await page.callMethod('redo')
    await waitForFlag('data.redoTest', 2000)
  })

  it('insertImage', async () => {
    await updateData({
      insertImageTest: false
    })
    await page.callMethod('insertImage', 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app.png')
    await waitForFlag('data.insertImageTest', 5000)
    const delta = await getDelta()
    const ops = Array.isArray(delta.ops) ? delta.ops : []
    const imageOp = ops.find(item => item.insert && typeof item.insert === 'object' && item.insert.image)
    expect(Boolean(imageOp)).toBe(true)
  })

  it('insertImage-screenshot', async () => {
    await setBlur()
    const waitTime = process.env.uniTestPlatformInfo.includes('firefox') ? 5000 : 2000
    await page.waitFor(waitTime)
    expect(await program.screenshot()).toSaveImageSnapshot()
  })

  it('removeFormat', async () => {
    await setEditorContents([
      {
        insert: '设置字体样式',
        attributes: {
          bold: true,
          color: '#3553ff'
        }
      },
      { insert: '\n' }
    ])
    await updateData({
      removeFormatTest: false
    })
    await page.callMethod('removeFormat')
    await waitForFlag('data.removeFormatTest', 2000)
  })
})
