// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
  async add(title, content) {
    console.log(title, content)
    return {
      title,
      content,
      showMessage: `Todo added, title: ${title}, content: ${content}`
    }
  },
  async randomFail() {
    const random = Math.random()
    console.log(random);
    if (random > 0.5) {
      return {
        errCode: 'RANDOM_FAIL',
        errMsg: '[预期内的报错]执行失败请重试'
      }
    } else {
      return {
        errCode: 0,
        errMsg: '',
        showMessage: '执行成功'
      }
    }
  },
  async fail() {
    return {
      errCode: 'TEST_ERROR_CODE',
      errMsg: '[预期内的报错]执行失败',
    }
  },
  async failWithNumberErrCode() {
    return {
      errCode: -1,
      errMsg: '[预期内的报错]执行失败',
    }
  },
  async success() {
    return {
      errCode: 0,
      errMsg: '',
      showMessage: '执行成功'
    }
  }
}
