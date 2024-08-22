let page;
describe('web-map', () => {
  if (!process.env.uniTestPlatformInfo.startsWith('web')) {
    it('app', () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/map/map')
    await page.waitFor('view');
    await page.waitFor('map');
    // 等待地图加载完成
    const waitTime = process.env.uniTestPlatformInfo.includes('firefox') ? 5000:4000
    await page.waitFor(waitTime)
    await page.callMethod('updateAutoTest',true)
  });

  it('Check MapMethods', async () => {
    const mapMethods = ['addControls', 'addMarkers', 'addMarkersLabel','addPolyline', 'addPolygons', 'addCircles','includePoint']
    for (var i = 0; i < mapMethods.length; i++) {
      await page.callMethod(mapMethods[i])
      await page.waitFor(500);
      expect(await program.screenshot()).toSaveImageSnapshot({customSnapshotIdentifier() {
        return 'map-' + mapMethods[i]
      }});
      await page.waitFor(500);
    }
  });

  it('handleGetCenterLocation', async () => {
    await page.callMethod('handleGetCenterLocation')
    await page.waitFor(500);
    const centerLocationRes = await page.data('jestResult')
    expect(centerLocationRes.centerPoints.latitude).not.toBeNull();
    expect(centerLocationRes.centerPoints.longitude).not.toBeNull();
  });

  it('handleGetRegion', async () => {
    await page.callMethod('handleGetRegion')
    await page.waitFor(500);
    const regionRes = await page.data('jestResult')
    const {southwest,northeast} = regionRes;
    expect(southwest.latitude).not.toBeFalsy();
    expect(southwest.longitude).not.toBeFalsy();
    expect(northeast.latitude).not.toBeFalsy();
    expect(northeast.longitude).not.toBeFalsy();
  });

  it('handleTranslateMarker', async () => {
    await page.callMethod('handleTranslateMarker')
    await page.waitFor(2000);
    expect(await program.screenshot()).toSaveImageSnapshot({customSnapshotIdentifier() {
        return 'map-handleTranslateMarker'
      }});
    const translateMarkerRes = await page.data('jestResult')
    expect(translateMarkerRes.animationEnd).toBeTruthy();
    expect(translateMarkerRes.translateMarkerMsg).toBe('translateMarker:ok');
  });

  it('handleMoveToLocation', async () => {
    await page.callMethod('handleMoveToLocation')
    await page.waitFor(500);
    const moveToLocationRes = await page.data('jestResult')
    expect(moveToLocationRes.moveToLocationMsg).toBe("moveToLocation:ok");
  });

  it('handleGetScale', async () => {
    await page.callMethod('handleGetScale')
    await page.waitFor(500);
    const scaleRes = await page.data('jestResult')
    expect(scaleRes.scale).toBeGreaterThanOrEqual(5);
    expect(scaleRes.scale).toBeLessThanOrEqual(18);
    console.log("jestResult",await page.data())
  });

});
