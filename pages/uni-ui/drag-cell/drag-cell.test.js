const PAGE_PATH = '/pages/uni-ui/drag-cell/drag-cell'

describe('drag-cell', () => {
  let page

  beforeEach(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  async function setPageData(newData) {
    return await page.setData(newData)
  }

  it('drag-cell model value', async () => {
    expect(await page.data('tagList.value')).toEqual(['标签1', '标签2', '标签3', '标签4'])
    expect((await page.data('gridList3.value')).length).toBe(9)
    expect((await page.data('deleteList.value')).length).toBe(5)
    expect(await page.data('handleList.value')).toEqual(['微信支付', '支付宝', 'Apple Pay'])

    await setPageData({
      tagList: ['新标签1', '新标签2'],
      deleteList: ['A', 'B', 'C'],
      imageList: ['https://example.com/a.png'],
      handleList: ['卡1', '卡2']
    })

    expect(await page.data('tagList.value')).toEqual(['新标签1', '新标签2'])
    expect(await page.data('deleteList.value')).toEqual(['A', 'B', 'C'])
    expect(await page.data('imageList.value')).toEqual(['https://example.com/a.png'])
    expect(await page.data('handleList.value')).toEqual(['卡1', '卡2'])
  })

  it('drag-cell snapshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  })
})
