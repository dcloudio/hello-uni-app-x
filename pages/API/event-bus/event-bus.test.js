const PAGE_PATH = '/pages/API/event-bus/event-bus'

describe('event-bus', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it('on', async () => {
    await page.callMethod('clear')
    await page.callMethod('on')
    await page.callMethod('emit')
    const l1 = (await page.data()).log.length
    expect(l1).toBe(1)
    await page.callMethod('clear')
    await page.callMethod('emit')
    const l2 = (await page.data()).log.length
    expect(l2).toBe(1)
    await page.callMethod('clear')
    await page.callMethod('on')
    await page.callMethod('emit')
    const l3 = (await page.data()).log.length
    expect(l3).toBe(2)
    await page.callMethod('clear')
    await page.callMethod('off')
    await page.callMethod('emit')
    const l4 = (await page.data()).log.length
    expect(l4).toBe(1)
    await page.callMethod('clear')
    await page.callMethod('off')
    await page.callMethod('emit')
    const l5 = (await page.data()).log.length
    expect(l5).toBe(0)
  })

  it('once', async () => {
    await page.callMethod('clear')
    await page.callMethod('once')
    await page.callMethod('emit')
    const l1 = (await page.data()).log.length
    expect(l1).toBe(1)
    await page.callMethod('clear')
    await page.callMethod('emit')
    const l2 = (await page.data()).log.length
    expect(l2).toBe(0)
    await page.callMethod('clear')
    await page.callMethod('once')
    await page.callMethod('off')
    await page.callMethod('emit')
    const l3 = (await page.data()).log.length
    expect(l3).toBe(0)
  })
})
