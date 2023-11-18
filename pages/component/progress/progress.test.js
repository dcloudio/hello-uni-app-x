function getData(key = '') {
    return new Promise(async (resolve, reject) => {
        const data = await page.data()
        resolve(key ? data[key] : data)
    })
}

let page
beforeAll(async () => {
    page = await program.reLaunch('/pages/component/progress/progress')
    await page.waitFor(1000)
})

describe('Progress.uvue', () => {
    it('percent', async () => {
        const p = await page.$('.p')
        const p1 = await page.$('.p1')
        const p2 = await page.$('.p2')
        const p3 = await page.$('.p3')
        await page.callMethod('setProgress')
        await page.waitFor(1000)
        expect(await p.property('percent')).toEqual(20)
        expect(await p1.property('percent')).toEqual(40)
        expect(await p2.property('percent')).toEqual(60)
        expect(await p3.property('percent')).toEqual(80)
        expect(await getData('curPercent')).toEqual(20)
        await page.callMethod('clearProgress')
        await page.waitFor(1000)
        expect(await p.property('percent')).toEqual(0)
        expect(await p1.property('percent')).toEqual(0)
        expect(await p2.property('percent')).toEqual(0)
        expect(await p3.property('percent')).toEqual(0)
        expect(await getData('curPercent')).toEqual(0)
    })
    it('length', async () => {
        const elements = await page.$$('.progress')
        expect(elements.length).toBe(4)
    })
    it('show-info', async () => {
        const el = await page.$('.p')
        expect(await el.property('show-info')).toEqual(true)
        await page.setData({
            showInfo: false
        })
        expect(await el.property('show-info')).toEqual(false)
    })
    it('border-radius', async () => {
        const el = await page.$('.p')
        expect(await el.property('border-radius')).toEqual(0)
        await page.setData({
            borderRadius: 5
        })
        expect(await el.property('border-radius')).toEqual(5)
    })
    it('font-size', async () => {
        const el = await page.$('.p')
        expect(await el.property('font-size')).toEqual(16)
        await page.setData({
            fontSize: 18
        })
        expect(await el.property('font-size')).toEqual(18)
    })
    it('stroke-width', async () => {
        const el = await page.$('.p')
        expect(await el.property('stroke-width')).toEqual(3)
        await page.setData({
            strokeWidth: 6
        })
        expect(await el.property('stroke-width')).toEqual(6)
    })
    it('backgroundColor', async () => {
        const el = await page.$('.p')
        expect(await el.property('background-color')).toEqual('#EBEBEB')
        await page.setData({
            backgroundColor: "#007aff"
        })
        expect(await el.property('background-color')).toEqual('#007aff')
    })
})
