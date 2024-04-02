describe('toSaveSnapshot & toSaveImageSnapshot template', () => {
  beforeAll(async () => {
    let page = await program.reLaunch('/pages/tabBar/component');
    await page.waitFor(1000);
  })

  it('test toSaveSnapshot 1', async () => {
    const text1 = 'test-toSaveSnapshot-1-1-' + Date.now()
    expect(text1).toSaveSnapshot()
    const text2 = 'test-toSaveSnapshot-1-2-' + Date.now()
    expect(text2).toSaveSnapshot()
  })

  it('test toSaveSnapshot 2', async () => {
    const text1 = 'test-toSaveSnapshot-2-1-' + Date.now()
    expect(text1).toSaveSnapshot({
      customSnapshotsDir: `./customDir/__file_snapshots__`,
      fileName: 'test-toSaveSnapshot-2-1.txt'
    })
    const text2 = 'test-toSaveSnapshot-2-2-' + Date.now()
    expect(text2).toSaveSnapshot({
      customSnapshotsDir: './customDir/__file_snapshots__'
    })

    const text3 = 'test-toSaveSnapshot-2-3-' + Date.now()
    expect(text3).toSaveSnapshot({
      fileName: 'test-toSaveSnapshot-2-3.json'
    })
  })

  it('test toSaveImageSnapshot 1', async () => {
    const img1 = await program.screenshot({fullPage: true});
    expect(img1).toSaveImageSnapshot()

    const img2 = await program.screenshot({fullPage: true});
    expect(img2).toSaveImageSnapshot()
  })

  it('test toSaveImageSnapshot 2', async () => {
    const img1 = await program.screenshot({fullPage: true});
    expect(img1).toSaveImageSnapshot({
      customSnapshotsDir: './customDir/__image_snapshots__',
      customSnapshotIdentifier() {
        return 'test-toSaveImageSnapshot-2-1';
      },
    })

    const img2 = await program.screenshot({fullPage: true});
    expect(img2).toSaveImageSnapshot({
      customSnapshotsDir: './customDir/__image_snapshots__',
    })

    const img3 = await program.screenshot({fullPage: true});
    expect(img3).toSaveImageSnapshot({
      customSnapshotIdentifier() {
        return 'test-toSaveImageSnapshot-2-3';
      },
    })
  })
});
