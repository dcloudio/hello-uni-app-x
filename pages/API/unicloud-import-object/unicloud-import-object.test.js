const PAGE_PATH = '/pages/API/unicloud-import-object/unicloud-import-object'

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
    await page.callMethod('fail')
    await page.callMethod('success')
    await page.waitFor(3000)
    
    const {
      todoTitle,
      todoContent,
      returnTodoTitle,
      returnTodoContent,
      failErrCode,
      successErrCode,
    } = await page.data()
    
    expect(returnTodoTitle).toBe(todoTitle)
    expect(returnTodoContent).toBe(todoContent)
    expect(failErrCode).toBe('TEST_ERROR_CODE')
    expect(successErrCode).toBe(0)
    
  })
});