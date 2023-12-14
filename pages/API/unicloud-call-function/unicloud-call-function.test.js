const PAGE_PATH = '/pages/API/unicloud-call-function/unicloud-call-function'

describe('unicloud-call-function', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
    await page.setData({
      isUniTest: true
    })
  })

  it('callFunction', async () => {
    await page.callMethod('callFunction')
    const {
      callFunctionResult,
      callFunctionError
    } = await page.data()
    console.error(callFunctionResult)
    console.error(callFunctionError)
    expect(callFunctionResult['showMessage']).toBe("Hello uniCloud function")
    expect(callFunctionResult['event']['num']).toBe(1)
    expect(callFunctionResult['event']['str']).toBe('ABC')
  })
})
