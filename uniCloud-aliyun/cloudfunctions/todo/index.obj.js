// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
  async add(title, content) {
    console.log(title, content)
    return {
      showMessage: `Todo added, title: ${title}, content: ${content}`
    }
  },
  async randomFail() {
    const random = Math.random()
    console.log(random);
    if (random > 0.5) {
      return {
        errCode: 'RANDOM_FAIL',
        errMsg: 'todo.randomFail failed'
      }
    } else {
      return {
        errCode: 0,
        errMsg: '',
        showMessage: 'todo.randomFail successed'
      }
    }
  },
  async fail() {
    return {
      errCode: 'TEST_ERROR_CODE',
      errMsg: 'todo.fail failed',
    }
  },
  async success() {
    return {
      errCode: 0,
      errMsg: '',
      showMessage: 'todo.success successed'
    }
  }
}
