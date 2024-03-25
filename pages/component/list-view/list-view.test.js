describe('component-native-list-view', () => {
  let page
  beforeAll(async () => {
    //打开list-view测试页
    page = await program.reLaunch('/pages/component/list-view/list-view')
    await page.waitFor(600)
  })

  //检测竖向可滚动区域
  it('check_scroll_height', async () => {
    await page.callMethod('change_scroll_y_boolean', true)
    await page.callMethod('change_scroll_x_boolean', false)
    await page.waitFor(600)
    const value = await page.callMethod('check_scroll_height')
    expect(value).toBe(true)
  })

  //检测竖向scrolltop属性赋值
  it('check_scroll_top', async () => {
    await page.callMethod('confirm_scroll_top_input', 600)
    await page.waitFor(600)
    const listElement = await page.$('#listview')
    const scrollTop = await listElement.attribute("scrollTop")
    console.log("check_scroll_top---"+scrollTop)
    expect(scrollTop-600).toBeGreaterThanOrEqual(0)
  })


  //检测横向scrollLeft属性赋值
  it('check_scroll_left', async () => {
    if(await page.data('scroll_x_boolean') === false) {
        await page.callMethod('change_scroll_x_boolean', true)
        await page.callMethod('change_scroll_y_boolean', false)
        await page.waitFor(600)
    }
    await page.callMethod('confirm_scroll_left_input', 600)
    await page.waitFor(600)
    const listElement = await page.$('#listview')
    const scrollLeft = await listElement.attribute("scrollLeft")
    console.log("check_scroll_left---"+scrollLeft)
    expect(scrollLeft-600).toBeGreaterThanOrEqual(0)
  })

  if (process.env.uniTestPlatformInfo.indexOf('web') > -1) {
    return
  }

  //检测横向可滚动区域
  it('check_scroll_width', async () => {
    if(await page.data('scroll_x_boolean') === false) {
        await page.callMethod('change_scroll_x_boolean', true)
        await page.callMethod('change_scroll_y_boolean', false)
        await page.waitFor(600)
    }
    await page.callMethod('change_scroll_y_boolean', false)
    await page.callMethod('change_scroll_x_boolean', true)
    await page.waitFor(600)
    const value = await page.callMethod('check_scroll_width')
    expect(value).toBe(true)
  })

  //检测下拉刷新
  it('check_refresher', async () => {
    if(await page.data('scroll_y_boolean') === false) {
        await page.callMethod('change_scroll_y_boolean', true)
        await page.callMethod('change_scroll_x_boolean', false)
        await page.waitFor(600)
    }
    await page.setData({
        refresher_enabled_boolean: true,
        refresher_triggered_boolean: true
    })
    await page.waitFor(2000)
    expect(await page.data('refresherrefresh')).toBe(true)
  })

  //检测竖向scroll_into_view属性赋值
  it('check_scroll_into_view_top', async () => {
    if(await page.data('scroll_y_boolean') === false) {
        await page.callMethod('change_scroll_y_boolean', true)
        await page.callMethod('change_scroll_x_boolean', false)
        await page.waitFor(600)
    }
    await page.callMethod('item_change_size_enum', 3)
    await page.waitFor(600)
    const listElement = await page.$('#listview')
    const scrollTop = await listElement.attribute("scrollTop")
    console.log("check_scroll_into_view_top--"+scrollTop)
    await page.callMethod('item_change_size_enum', 0)
    expect(scrollTop-690).toBeGreaterThanOrEqual(0)
  })

  //检测横向scroll_into_view属性赋值
  it('check_scroll_into_view_left', async () => {
    if(await page.data('scroll_x_boolean') === false) {
        await page.callMethod('change_scroll_x_boolean', true)
        await page.callMethod('change_scroll_y_boolean', false)
        await page.waitFor(600)
    }
    await page.callMethod('item_change_size_enum', 3)
    await page.waitFor(600)
    const listElement = await page.$('#listview')
    const scrollLeft = await listElement.attribute("scrollLeft")
    console.log("check_scroll_into_view_left--"+scrollLeft)
    await page.callMethod('item_change_size_enum', 0)
    expect(scrollLeft-1080).toBeGreaterThanOrEqual(0)
  })
})
