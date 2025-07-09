const PAGE_PATH = '/pages/component/view/view'

// 此用例仅用于模拟点击关闭iOS弹窗逻辑，无实际意义
describe('view-test', () => {
  const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
  const isAndroid = platformInfo.startsWith('android')
  const isMP = platformInfo.startsWith('mp')
  const isWeb = platformInfo.startsWith('web')
  const isHarmony = platformInfo.startsWith('harmony')

  if (isAndroid || isWeb || isMP) {
    it('other platform', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(1000);
  })


  it('itemclick-event', async () => {
    // 关闭弹窗 iPhone Pro 机型
    await program.tap({
      x: 220,
      y: 516,
      duration: 100
    })

    // 关闭弹窗 iPhone ProMax 机型
    await program.tap({
      x: 220,
      y: 546,
      duration: 100
    })

    // 关闭弹窗 iPhone mini 机型
    await program.tap({
      x: 186,
      y: 463,
      duration: 100
    })
    expect(1).toBe(1)
  })

  if (isHarmony) {
    it('hover-class', async () => {
      await page.setData({
        hover_class: true,
        stay_time: 1000 * 10
      })
      await page.waitFor(100)

      await program.tap({ x: 150, y: 325, duration: 2000 })

      // const systemInfo = await program.systemInfo()
      // const devicePixelRatio = systemInfo.devicePixelRatio
      // const positionX = systemInfo.screenWidth / 2
      // const positionY = systemInfo.screenWidth
      // await program.tap({
      //   x: positionX,
      //   y: positionY,
      //   duration: 5000
      // })

      // 通过检查样式来判断 hover-class 是否生效
      const viewChild1 = await page.$('#view-child1')
      expect(await viewChild1.style('background-color')).toBe('#179b16')
    })
  }
})
