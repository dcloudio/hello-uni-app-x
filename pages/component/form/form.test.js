const PAGE_PATH = '/pages/component/form/form'

const DEFAULT_NICK_NAME = 'hello'
const DEFAULT_GENDER = '0'
const DEFAULT_AGE = 18
const DEFAULT_SWITCH = true

const CHANGE_NICK_NAME = 'hello'
const CHANGE_GENDER = '0'
const CHANGE_AGE = 50
const CHANGE_SWITCH = false

describe('form', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(500)
  })
  it('submit', async () => {
    await page.setData({
      nickname: CHANGE_NICK_NAME,
      age: CHANGE_AGE,
      switch: CHANGE_SWITCH
    })
    await page.waitFor(200)

    const btnSubmit = await page.$('.btn-l')
    await btnSubmit.tap()
    await page.waitFor(200)

    const {
      formData
    } = await page.data()

    expect(formData['nickname']).toBe(CHANGE_NICK_NAME)
    expect(formData['gender']).toBe(CHANGE_GENDER)
    expect(formData['loves'][0]).toBe('1')
    expect(formData['age']).toBe(CHANGE_AGE)
    expect(formData['switch']).toBe(CHANGE_SWITCH)
  })
  it('reset', async () => {
    await page.setData({
      nickname: CHANGE_NICK_NAME,
      age: CHANGE_AGE,
      switch: CHANGE_SWITCH
    })
    await page.waitFor(100)

    const btnReset = await page.$('.btn-r')
    await btnReset.tap()
    await page.waitFor(100)

    const {
      formData
    } = await page.data()

    // TODO
    // expect(formData['nickname']).toBe(DEFAULT_NICK_NAME)
    // expect(formData['gender']).toBe(undefined)
    // expect(formData['loves'][0]).toBe(undefined)
    // expect(formData['age']).toBe(undefined)
    // expect(formData['switch']).toBe(undefined)
  })
})
