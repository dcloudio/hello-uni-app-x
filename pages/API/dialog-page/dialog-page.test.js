jest.setTimeout(20000)

const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')
const isAndroid = platformInfo.startsWith('android')
const FIRST_PAGE_PATH = '/pages/API/dialog-page/dialog-page'
const NEXT_PAGE_PATH = '/pages/API/dialog-page/next-page'

describe('dialog page', () => {
  if (process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true') {
		it('skip app-webview', () => {
			expect(1).toBe(1)
		})
		return
	}

  let page;
  let initLifeCycleNum;
  let lifecycleNum;
  beforeAll(async () => {
    page = await program.reLaunch(FIRST_PAGE_PATH)
    await page.waitFor('view');
    initLifeCycleNum = await page.callMethod('getLifeCycleNum');
    await page.callMethod('setLifeCycleNum', 0)
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifecycleNum).toBe(0)
  });

  it('open dialog1', async () => {
    await page.callMethod('openDialog1');
    // 无法通过获取 dom 元素来判断是否打开了 dialogPage
    await page.waitFor(1000)
    if (isWeb) {
      await page.waitFor(2000)
    }
    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image).toSaveImageSnapshot();
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    // 不应触发父页面的生命周期,应该触发:
    // 1. openDialogPage success & complete callback
    // 2. dialog page 生命周期
    expect(lifecycleNum).toBe(7)
    await page.callMethod('setLifeCycleNum', 0)
  });

  it('closeDialogPage', async () => {
    await page.callMethod('closeDialog');
    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image).toSaveImageSnapshot();
    // closeDialogPage success & complete callback 应被触发
    // dialogPage onUnload 应被触发
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifecycleNum).toBe(-3)
    await page.callMethod('setLifeCycleNum', 0)
  })

  it('openDialog with wrong path', async () => {
    await page.callMethod('openDialog1WrongPath')
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifecycleNum).toBe(-3)
    await page.callMethod('setLifeCycleNum', 0)
  })

  it('navigateTo nextPage & open Dialog', async () => {
    await page.callMethod('goNextPageOpenDialog1')
    await page.waitFor(2000)
    if (isWeb) {
      await page.waitFor(3000)
    }
    page = await program.currentPage()
    expect(page.path).toBe(NEXT_PAGE_PATH.substring(1))
    await page.waitFor(1000)
    if (isWeb) {
      await page.waitFor(2000)
    }
    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image).toSaveImageSnapshot();
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifecycleNum).toBe(-4)
    await page.callMethod('setLifeCycleNum', 0)
  })

  it('dialog1 navigateBack', async () => {
    await program.navigateBack()
    page = await program.currentPage()
    // dialogPage onBackPress 返回 true, 应可以拦截 navigateBack
    expect(page.path).toBe(NEXT_PAGE_PATH.substring(1))
    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image).toSaveImageSnapshot();
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    // onBackPress 生命周期应该被触发
    expect(lifecycleNum).toBe(1)
    await page.callMethod('setLifeCycleNum', 0)
  })

  it('open dialog2', async () => {
    await page.callMethod('openDialog2')
    await page.waitFor(1000)
    if (isWeb) {
      await page.waitFor(2000)
    }
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    // 应触发前一个 dialogPage 的 onHide
    expect(lifecycleNum).toBe(4)
    await page.callMethod('setLifeCycleNum', 0)
  })

  it('closeDialogPage', async () => {
    await page.callMethod('closeDialog')
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    // 应触发 success & complete 回调
    // 应触发 dialogPage 的 unload，下层的 dialogPage 会先 show 再 unload
    expect(lifecycleNum).toBe(-7)

    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image).toSaveImageSnapshot();
    await page.callMethod('setLifeCycleNum', 0)
  })

  it('open multiple dialog page', async () => {
    await page.callMethod('openDialog1')
    await page.waitFor(1000)
    if (isWeb) {
      await page.waitFor(2000)
    }
    const image1 = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image1).toSaveImageSnapshot();
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifecycleNum).toBe(4)

    await page.callMethod('openDialog2')
    await page.waitFor(1000)
    if (isWeb) {
      await page.waitFor(2000)
    }
    const image2 = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image2).toSaveImageSnapshot();
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifecycleNum).toBe(8)
    await page.callMethod('setLifeCycleNum', 0)
  })

  it('openDialogPage to home page', async () => {
    await page.callMethod('openDialogPage1ToHomePage')
    await page.waitFor(1000)
    if (isWeb) {
      await page.waitFor(2000)
    }
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifecycleNum).toBe(4)
    await page.callMethod('setLifeCycleNum', 0)
  })

  it('dialog2 navigateBack', async () => {
    await program.navigateBack()
    page = await program.currentPage()
    // dialogPage onBackPress 返回 true, 应可以拦截 navigateBack
    expect(page.path).toBe(FIRST_PAGE_PATH.substring(1))
    const image = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image).toSaveImageSnapshot();
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    // onBackPress 生命周期应该被触发
    expect(lifecycleNum).toBe(2)
    await page.callMethod('setLifeCycleNum', 0)
  })

  it('close specified dialogPage', async () => {
    await page.callMethod('openDialog2')
    await page.waitFor(1000)
    if (isWeb) {
      await page.waitFor(2000)
    }
    const image1 = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image1).toSaveImageSnapshot();
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifecycleNum).toBe(4)

    await page.callMethod('openDialog1')
    await page.waitFor(1000)
    if (isWeb) {
      await page.waitFor(2000)
    }
    const image2 = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image2).toSaveImageSnapshot();
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifecycleNum).toBe(10)

    await page.callMethod('closeSpecifiedDialog', 0)
    const image3 = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image3).toSaveImageSnapshot();
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifecycleNum).toBe(7)

    await page.callMethod('closeSpecifiedDialog', 1)
    const image4 = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image4).toSaveImageSnapshot();
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifecycleNum).toBe(5)

    await page.callMethod('closeSpecifiedDialog', 0)
    const image5 = await program.screenshot({
      deviceShot: true,
      area: {
        x: 0,
        y: 200,
      }
    });
    expect(image5).toSaveImageSnapshot();
    lifecycleNum = await page.callMethod('getLifeCycleNum')
    expect(lifecycleNum).toBe(2)
  })


  it('input-hold-keyboard in dialog', async () => {
    await page.callMethod('jest_OpenDialog1')
    await page.waitFor(2000);
    await page.callMethod('jest_getTapPoint')
    const point_x = await page.data('jest_click_x');
    const point_y = await page.data('jest_click_y');
    if (isAndroid){
      await program.adbCommand("input tap" + " " + point_x + " " + point_y)
      console.log("input tap" + " " + point_x + " " + point_y);
    } else {
      await program.tap({x: point_x, y: point_y})
    }

    await page.waitFor(1000);
    const image = await program.screenshot({
        deviceShot: true,
        area: {
          x: 0,
          y: 200,
        }
    })
    expect(image).toSaveImageSnapshot()
    await page.waitFor(2000);
    await page.callMethod('jest_CloseDialog1')
  })

  afterAll(async () => {
    await page.callMethod('setLifeCycleNum', initLifeCycleNum)
  });
});
