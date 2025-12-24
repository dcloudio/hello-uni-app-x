const PAGE_PATH = '/pages/component/text/issues22636'

describe('text-dynamic-lineHeight-letterSpacing', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isHarmony = platformInfo.startsWith('harmony')

  if (!isHarmony) {
    it('other platform', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500);
  })

  it('text-dynamic-lineHeight', async () => {
    let h1 = await page.callMethod('getLineHeight')
    await page.callMethod('plusLineHeight')
    await page.callMethod('plusLineHeight')
    let h2 = await page.callMethod('getLineHeight')

    expect(h2).toBeGreaterThan(h1)
  })

  it('text-dynamic-letterSpacing', async () => {
    let h1 = await page.callMethod('getLetterSpacing')
    await page.callMethod('plusLetterSpacing')
    await page.callMethod('plusLetterSpacing')
    let h2 = await page.callMethod('getLetterSpacing')

    expect(h2).toBeGreaterThan(h1)
  })

  it('text-dynamic-lineHeight-letterSpacing-snapshot', async () => {
    const image = await program.screenshot();
    expect(image).toSaveImageSnapshot();
  })
})
