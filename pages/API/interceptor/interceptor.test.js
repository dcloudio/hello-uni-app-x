const PAGE_PATH = '/pages/API/interceptor/interceptor'

describe('interceptor', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it('no Interceptor', async () => {
    const newPage = await program.navigateTo('./page1')
    await newPage.waitFor('text')
    const num = (await newPage.data()).page
    await program.navigateBack()
    expect(num).toBe(1)
  })

  it('addInterceptor', async () => {
    await page.callMethod('addInterceptor')
    const newPage = await program.navigateTo('./page1')
    await newPage.waitFor('text')
    const num = (await newPage.data()).page
    await program.navigateBack()
    expect(num).toBe(2)
  })

  it('removeInterceptor', async () => {
    await page.callMethod('removeInterceptor')
    const newPage = await program.navigateTo('./page1')
    await newPage.waitFor('text')
    const num = (await newPage.data()).page
    await program.navigateBack()
    expect(num).toBe(1)
  })
})