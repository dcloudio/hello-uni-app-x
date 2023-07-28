function getData(key = '') {
    return new Promise(async (resolve, reject) => {
        const data = await page.data()
        resolve(key ? data[key] : data)
    })
}

let page
beforeAll(async () => {
    page = await program.reLaunch('/pages/component/checkbox/checkbox')
    await page.waitFor(1000)
})

describe('Checkbox.uvue', () => {
    // it('change', async () => {
    //     const cb = await page.$('.cb')
    //     const cb1 = await page.$('.cb1')
    //     const cb2 = await page.$('.cb2')
    //     expect(await getData('value')).toEqual([])
    //     await cb1.tap()
    //     expect(await getData('value')).toEqual(["cb", "cb1"])
    //     await cb.tap()
    //     expect(await getData('value')).toEqual(["cb1"])
    //     await cb2.tap()
    //     expect(await getData('value')).toEqual(["cb1"])
    //     await cb1.tap()
    //     expect(await getData('value')).toEqual([])
    // })
    it('length', async () => {
        const checkboxGroupElements = await page.$$('.checkbox-group')
        expect(checkboxGroupElements.length).toBe(3)
        const checkboxElements = await page.$$('.checkbox')
        expect(checkboxElements.length).toBe(11)
    })
    // it('text', async () => {
    //     const cb = await page.$('.cb1')
    //     expect(await cb.text()).toEqual('未选中')
    //     await page.setData({
    //         text: 'not selected'
    //     })
    //     expect(await cb.text()).toEqual('not selected')
    // })
    // it('checked', async () => {
    //     const cb = await page.$('.cb')
    //     expect(await cb.property('checked')).toBe(true)
    //     await page.setData({
    //         checked: false
    //     })
    //     await page.waitFor(500)
    //     expect(await cb.property('checked')).toBe(false)
    // })
    // it('color', async () => {
    //     const cb = await page.$('.cb')
    //     expect(await cb.property('color')).toBe('#007aff')
    //     await page.setData({
    //         color: '#63acfc'
    //     })
    //     await page.waitFor(500)
    //     expect(await cb.property('color')).toBe('#63acfc')
    // })
    // it('disabled', async () => {
    //     const cb = await page.$('.cb2')
    //     expect(await cb.property('disabled')).toBe(true)
    //     await page.setData({
    //         disabled: false
    //     })
    //     await page.waitFor(500)
    //     expect(await cb.property('disabled')).toBe(false)
    // })
})