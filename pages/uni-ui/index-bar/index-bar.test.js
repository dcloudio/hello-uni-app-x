const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')

const PAGE_PATH = '/pages/uni-ui/index-bar/index-bar'

describe('index-bar', () => {
  if (isMP) {
    it('not support', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page

  beforeEach(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  async function setPageData(newData) {
    return await page.setData(newData)
  }

  it('index-bar state', async () => {
    expect(await page.data('useCustomStyle.value')).toBe(false)
    expect(await page.data('useCustomIndexs.value')).toBe(false)
    expect(await page.data('indexViewID.value')).toBe('')

    await setPageData({
      useCustomStyle: true,
      useCustomIndexs: true,
      indexViewID: 'idx-A'
    })

    expect(await page.data('useCustomStyle.value')).toBe(true)
    expect(await page.data('useCustomIndexs.value')).toBe(true)
    expect(await page.data('indexViewID.value')).toBe('idx-A')
    expect(await page.data('currentIndexs.value')).toContain('☆')
  })

  it('index-bar snapshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  })
})
