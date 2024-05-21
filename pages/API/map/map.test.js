const PAGE_PATH = '/pages/API/map/map'
let page;
describe('web-map', () => {
  console.log("uniTestPlatformInfo",process.env.uniTestPlatformInfo)
  if (!process.env.uniTestPlatformInfo.startsWith('web')) {
    it('app', () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view');
    // 等待地图加载完成
    await page.waitFor(4000);
    await page.setData({autoTest:true})
  });

  it('Check MapMethods', async () => {
    const mapMethods = ['changeScale', 'addMarkers', 'addPolyline', 'addPolygons', 'addCircles',
      'includePoint', 'handleTranslateMarker'
    ]
    for (var i = 0; i < mapMethods.length; i++) {
      await page.callMethod(mapMethods[i])
      if (mapMethods[i] == 'handleTranslateMarker') {
        await page.waitFor(2000);
      } else {
        await page.waitFor(500);
      }
      expect(await program.screenshot()).toSaveImageSnapshot();
      await page.waitFor(500);
    }
  });
  it('handleGetCenterLocation', async () => {
    await page.callMethod('handleGetCenterLocation')
    await page.waitFor(500);
    const centerLocationRes = await page.data('getCenterLocationTest')
    expect(centerLocationRes.latitude).not.toBeNull();
    expect(centerLocationRes.longitude).not.toBeNull();
  });
  it('handleGetRegion', async () => {
    await page.callMethod('handleGetRegion')
    await page.waitFor(500);
    const regionRes = await page.data('getRegionTest')
    const getRegionExpected = {
      southwest: { latitude: 39.88334279187766, longitude: 116.31050146728515 },
      northeast: { latitude: 40.0149408585477, longitude: 116.56799353271484 },
      errMsg: 'getRegion:ok'
    }
    expect(regionRes).toEqual(expect.objectContaining(getRegionExpected));
  });
});
