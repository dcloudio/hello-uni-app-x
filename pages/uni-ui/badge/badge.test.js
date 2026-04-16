const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isMP = platformInfo.startsWith('mp')

const PAGE_PATH = '/pages/uni-ui/badge/badge'

describe('badge', () => {
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

  it('badge dynamic text value', async () => {
    expect(await page.data('dynamicBadgeText.value')).toBe('0')

    await setPageData({
      dynamicBadgeText: '8'
    })
    expect(await page.data('dynamicBadgeText.value')).toBe('8')

    await setPageData({
      dynamicBadgeText: ''
    })
    expect(await page.data('dynamicBadgeText.value')).toBe('')
  })

  it('badge snapshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  })
})
