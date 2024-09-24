const PAGE_PATH = '/pages/API/unicloud/unicloud/database'
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isSafari = platformInfo.indexOf('safari') > -1

describe('unicloud-database', () => {
  if (isSafari) {
    it('web safari 暂时规避', () => {
      expect(1).toBe(1)
    })
    return
  }
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
    await page.setData({
      isUniTest: true
    })
  })
  it('databaseBasic', async () => {
    await page.callMethod('dbRemove')
    await page.callMethod('dbAdd')
    await page.callMethod('dbBatchAdd')
    await page.callMethod('dbGet')
    await page.callMethod('dbGetWithCommand')
    await page.callMethod('dbUpdate')
    await page.callMethod('dbRemove')
    await page.callMethod('dbMultiSend')

    const {
      addId,
      batchAddIds,
      batchAddinserted,
      updateUpdated,
      getData,
      getWithCommandData,
      removeDeleted,
      multiSendSuccessCount,
    } = await page.data()

    expect(addId !== '').toBe(true)
    expect(batchAddIds.length).toBe(2)
    expect(batchAddinserted).toBe(2)
    expect(getData.length).toBe(2)
    expect(getWithCommandData.length).toBe(1)
    expect(updateUpdated).toBe(3)
    expect(removeDeleted).toBe(3)
    expect(multiSendSuccessCount).toBe(2)

  })

  it('databaseLookup', async () => {
    await page.callMethod('dbLookupInit')
    await page.callMethod('dbLookup')

    const {
      lookupData
    } = await page.data()
    expect(lookupData.length).toBe(2)
    expect(lookupData[0]['foreign_id'].length).toBe(1)
    expect(lookupData[1]['foreign_id'].length).toBe(1)
  })
});
