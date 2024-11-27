const PAGE_PATH = '/pages/API/unicloud/unicloud/cloud-object'

describe('unicloud-import-object', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
    await page.setData({
      isUniTest: true
    })
  })
  it('importObject', async () => {
    await page.callMethod('addTodo')
    await page.callMethod('addTodoWithGeneric')
    await page.callMethod('fail')
    await page.callMethod('failWithNumberErrCode')
    await page.callMethod('success')

    const {
      todoTitle,
      todoContent,
      returnTodoTitle,
      returnTodoContent,
      genericDemoReturnTodoTitle,
      genericDemoReturnTodoContent,
      failErrCode,
      failErrSubject,
      failErrDetailTips,
      failNumberErrCode,
      successErrCode,
    } = await page.data()

    expect(returnTodoTitle).toBe(todoTitle)
    expect(returnTodoContent).toBe(todoContent)
    expect(genericDemoReturnTodoTitle).toBe(todoTitle)
    expect(genericDemoReturnTodoContent).toBe(todoContent)
    expect(failErrCode).toBe('TEST_ERROR_CODE')
    expect(failErrSubject).toBe('fail')
    expect(failErrDetailTips).toBe('DO_NOT_TRY_AGAIN')
    expect(failNumberErrCode).toBe(-1)
    expect(successErrCode).toBe(0)

  })
});
