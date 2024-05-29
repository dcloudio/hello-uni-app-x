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
    page = await program.reLaunch('/pages/API/map/map')
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
    console.log('regionRes', regionRes);
    const {southwest,northeast} = regionRes;
    const southwestExp ={ latitude: 39.88334279187766, longitude: 116.31050146728515 }
    const northeastExp ={ latitude: 40.0149408585477, longitude: 116.56799353271484 }
    // 在Safari中返回的经纬度
    // southwest: { latitude: 39.64483423532459, longitude: 115.88249286914063 },
    // northeast: { latitude: 40.17153735946949, longitude: 116.91246113085938 },
    if(!process.env.uniTestPlatformInfo.includes('Safari')){
      expect(southwest.latitude).toBeCloseTo(southwestExp.latitude, 3);
      expect(southwest.longitude).toBeCloseTo(southwestExp.longitude, 3);
      expect(northeast.latitude).toBeCloseTo(northeastExp.latitude, 3);
      expect(northeast.longitude).toBeCloseTo(northeastExp.longitude, 3);
    }else{
      expect(southwest.longitude).not.toBeFalsy();
      expect(southwest.latitude).not.toBeFalsy();
      expect(northeastExp.longitude).not.toBeFalsy();
      expect(northeastExp.latitude).not.toBeFalsy();
    }
  });
});
