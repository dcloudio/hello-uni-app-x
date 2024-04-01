const PAGE_PATH = '/pages/API/get-file-system-manager/get-file-system-manager'


describe('ExtApi-FileManagerTest', () => {
  if (process.env.uniTestPlatformInfo.indexOf('web') > -1) {
    it('dummyTest', () => {
      expect(1).toBe(1)
    })
    return
  }
  let page;
  function getData(key = '') {
    return new Promise(async (resolve, reject) => {
      const data = await page.data()
      resolve(key ? data[key] : data)
    })
  }


  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor(600);
  });

  async function isDone() {
    let isDone = await page.waitFor(async () => {
      return await page.data('done')
    })
    await page.setData({done: false})
    return isDone
  }

  it('USER_DATA_PATH test', async () => {
    // 测试 USER_DATA_PATH
    let globalUserDataPath = await getData('globalUserDataPath')

    await page.setData({
      logAble:false,
      recursiveVal: true,
      copyToBasePath:globalUserDataPath,
      basePath: globalUserDataPath,
      rmDirFile:'a',
      readDir:'a',
      writeFile:'a/1.txt',
      readFile:'a/1.txt',
      unlinkFile:'a/1.txt',
      writeFileContent:'锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦'
    })

    // 先清除文件,需要清除全部可能存在的历史测试文件，避免运行失败
    const btnUnLinkFileButton = await page.$('#btn-clear-file')
    await btnUnLinkFileButton.tap()
    await isDone()


    // 清除文件夹
    const btnRmDirButton = await page.$('#btn-remove-dir')
    await btnRmDirButton.tap()
    await isDone()
    // 重新创建测试目录
    const btnMkdDirButton = await page.$('#btn-mkdir')
    await btnMkdDirButton.tap()
    await isDone()

    const btnReadDirButton = await page.$('#btn-read-dir')
    await btnReadDirButton.tap()
    await isDone()


    // 期望通过 recursive = true的 文件夹删除，得到一个空的 /a 目录
    let fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual('[]')
    let fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual('[]')

    // 先测试 recursive = false 文件夹创建，期望失败
    await page.setData({
      recursiveVal: false,
      mkdirFile:'a/b/c'
    })


    await btnMkdDirButton.tap()
    await isDone()


    let lastFailError = await getData('lastFailError')
    expect(lastFailError.errCode).toEqual(1300002)
    expect(lastFailError.errMsg).toEqual('no such file or directory:unifile://usr/a/b/c')
    let lastCompleteError = await getData('lastCompleteError')
    expect(lastCompleteError.errCode).toEqual(1300002)
    expect(lastCompleteError.errMsg).toEqual('no such file or directory:unifile://usr/a/b/c')


    // 测试 recursive = true 期望文件夹创建成功
    await page.setData({
      recursiveVal: true
    })
    await btnMkdDirButton.tap()
    await isDone()

    await btnReadDirButton.tap()
    await isDone()

    // 期望通过 recursive = true的 文件夹删除，得到一个空的 /a 目录
    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[\"b\"]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"b\"]")

    // 测试写入文件
    const btnWriteFileButton = await page.$('#btn-write-file')
    await btnWriteFileButton.tap()
    await isDone()
    // 检查目录列表数量
    await btnReadDirButton.tap()
    await isDone()
    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[\"b\",\"1.txt\"]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"b\",\"1.txt\"]")
    // 获取和对比 文件内容
    const btnReadFileButton = await page.$('#btn-read-file')
    await btnReadFileButton.tap()
    await isDone()
    let readFileRet = await getData('readFileRet')
    expect(readFileRet).toEqual("锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦")

    // 更换文件内容 获取和对比 文件md5和sha1
    await page.setData({
      writeFileContent: "If you were a teardrop;In my eye,For fear of losing you,I would never cry.And if the golden sun,Should cease to shine its light,Just one smile from you,Would make my whole world bright.",
      getFileInfoAlgorithm:"md5"
    })
    await btnWriteFileButton.tap()
    await isDone()

    await btnReadFileButton.tap()
    await isDone()
    readFileRet = await getData('readFileRet')
    expect(readFileRet).toEqual("If you were a teardrop;In my eye,For fear of losing you,I would never cry.And if the golden sun,Should cease to shine its light,Just one smile from you,Would make my whole world bright.")

    const btnGetFileInfoButton = await page.$('#btn-get-file-info')
    await btnGetFileInfoButton.tap()
    await isDone()

    let getFileInfoSize = await getData('getFileInfoSize')
    expect(getFileInfoSize).toEqual(185)
    let getFileInfoDigest = await getData('getFileInfoDigest')
    expect(getFileInfoDigest).toEqual("29ddd02ed3c38ccebb98884eda082cb1")
    // 切换为 sha1
    await page.setData({
      getFileInfoAlgorithm:"sha1"
    })

    await btnGetFileInfoButton.tap()
    await isDone()

    getFileInfoSize = await getData('getFileInfoSize')
    expect(getFileInfoSize).toEqual(185)
    getFileInfoDigest = await getData('getFileInfoDigest')
    expect(getFileInfoDigest).toEqual("ebef4e75783e0db499fc260d120e695005bead8a")

    // 测试 copyfile
    await page.setData({

      copyFromFile:"a/1.txt",
      copyToFile:"a/2.txt"
    })
    const btnCopyFileButton = await page.$('#btn-copy-file')
    await btnCopyFileButton.tap()
    await isDone()


    await btnReadDirButton.tap()
    await isDone()

    // 1.txt 2.txt 两个文件都存在
    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[\"b\",\"1.txt\",\"2.txt\"]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"b\",\"1.txt\",\"2.txt\"]")

    // 测试 rename
    await page.setData({
      renameFromFile:"a/2.txt",
      renameToFile:"a/3.txt"
    })

    const btnRenameFileButton = await page.$('#btn-rename-file')
    await btnRenameFileButton.tap()
    await isDone()

    await btnReadDirButton.tap()
    await isDone()

    // 1.txt 3.txt 两个文件都存在
    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[\"b\",\"1.txt\",\"3.txt\"]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"b\",\"1.txt\",\"3.txt\"]")

  });

  it('TEMP_PATH test', async () => {
    // 测试 TEMP_PATH
    let globalTempPath = await getData('globalTempPath')

    let version = process.env.uniTestPlatformInfo
    version = parseInt(version.split(" ")[1])
    let testDirName = "我们经历了一场兵慌马乱的战争.1@2#3$4%5^6&7*8(9)0+-qwertyuiopasdfghjklzxcvbnm;,"
    if(version < 6){
      // android 6 以下文件名不能包含特殊字符
      testDirName = "我们经历了一场兵慌马乱的战争"
    }

    await page.setData({
      logAble:false,
      recursiveVal: true,
      basePath: globalTempPath,
      copyToBasePath:globalTempPath,
      rmDirFile:'a',
      mkdirFile: 'a',
      unlinkFile:'a/'+ testDirName +'/中文路径/张三/name/中文文件.mock'
    })


    // 先清除文件,需要清除全部可能存在的历史测试文件，避免运行失败
    const btnUnLinkFileButton = await page.$('#btn-unlink-file')
    await btnUnLinkFileButton.tap()
    await isDone()


    // 清除文件夹
    const btnRmDirButton = await page.$('#btn-remove-dir')
    await btnRmDirButton.tap()
    await isDone()

    // 重新创建测试目录
    const btnMkdDirButton = await page.$('#btn-mkdir')
    await btnMkdDirButton.tap()
    await isDone()

    const btnReadDirButton = await page.$('#btn-read-dir')
    await btnReadDirButton.tap()
    await isDone()


    // 期望通过 recursive = true的 文件夹删除，得到一个空的 /a 目录
    let fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[]")
    let fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[]")

    // 测试 创建多层级文件目录
    await page.setData({
      recursiveVal: true,
      mkdirFile:'a/b/c/d/e/f/g/h/i/g/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z/中文路径/张三/test',
    })

    await btnMkdDirButton.tap()
    await isDone()

    await btnReadDirButton.tap()
    await isDone()

    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[\"b\"]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"b\"]")

    // 测试 创建包含中文特殊符号的目录
    await page.setData({
      recursiveVal: true,
      mkdirFile:'a/'+ testDirName + '/中文路径/张三/name',
    })
    await btnMkdDirButton.tap()
    await isDone()

    await btnReadDirButton.tap()
    await isDone()

    // 期望通过 recursive = true的 文件夹删除，得到一个空的 /a 目录
    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[\"b\",\"" + testDirName + "\"]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"b\",\"" + testDirName + "\"]")

    /**
     * 从资源文件中读取图片为base64，测试写入较大文件场景
     * 'static/test-image/logo.ico' 注意，依赖这个资源文件，不能删除
     */
    await page.setData({
      basePath: "",
      readFile:'static/test-image/logo.ico',
      readFileEncoding:'base64'
    })


    // 获取和对比 文件内容
    const btnReadFileButton = await page.$('#btn-read-file')
    await btnReadFileButton.tap()
    await isDone()
    let readFileRet = await getData('readFileRet')
    expect(readFileRet.length).toEqual(208544)
    let endStr = readFileRet.substring(readFileRet.length - 10)
    expect(endStr).toEqual("///////w==")

    await page.setData({
      basePath: globalTempPath,
      writeFile:'a/' + testDirName + '/中文路径/张三/name/中文文件.mock',
      writeFileContent:readFileRet
    })


    const btnWriteFileButton = await page.$('#btn-write-file')
    await btnWriteFileButton.tap()
    await isDone()

    // 获取文件列表，判断是否写入成功，同时置空base64内容 避免影响实时查看状态
    await page.setData({
      readDir:'a/' + testDirName + '/中文路径/张三/name',
      readFileRet:'',
      writeFileContent:''
    })

    // 检查目录列表数量
    await btnReadDirButton.tap()
    await isDone()
    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[\"中文文件.mock\"]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"中文文件.mock\"]")


    // 更换文件内容 获取和对比 文件md5和sha1
    await page.setData({
      getFileInfoFile:'a/' + testDirName + '/中文路径/张三/name/中文文件.mock',
      getFileInfoAlgorithm:"md5",
    })

    const btnGetFileInfoButton = await page.$('#btn-get-file-info')
    await btnGetFileInfoButton.tap()
    await isDone()

    let getFileInfoSize = await getData('getFileInfoSize')
    expect(getFileInfoSize).toEqual(208544)
    let getFileInfoDigest = await getData('getFileInfoDigest')
    expect(getFileInfoDigest).toEqual("486f75ea76625f8c103cac4bc9c49511")

    // 切换为 sha1
    await page.setData({
      getFileInfoAlgorithm:"sha1"
    })

    await btnGetFileInfoButton.tap()
    await isDone()

    getFileInfoSize = await getData('getFileInfoSize')
    expect(getFileInfoSize).toEqual(208544)
    getFileInfoDigest = await getData('getFileInfoDigest')
    expect(getFileInfoDigest).toEqual("1830169a16e7c860beff4a3b0975ba0b6f775f9e")

    // 测试不支持的摘要算法，期望返回错误
    await page.setData({
      getFileInfoAlgorithm:"sha256"
    })

    await btnGetFileInfoButton.tap()
    await isDone()

    let lastFailError = await getData('lastFailError')
    expect(lastFailError.errCode).toEqual(1300022)
    let lastCompleteError = await getData('lastCompleteError')
    expect(lastCompleteError.errCode).toEqual(1300022)


    // rename 到一个没有提前创建过的目录，期望返回错误
    await page.setData({
      renameFromFile:"a/" + testDirName + "/中文路径/张三/name/中文文件.mock",
      renameToFile:"a/没有提前创建的目录/3.txt"
    })

    const btnRenameFileButton = await page.$('#btn-rename-file')
    await btnRenameFileButton.tap()
    await isDone()

    lastFailError = await getData('lastFailError')
    expect(lastFailError.errCode).toEqual(1300002)
    lastCompleteError = await getData('lastCompleteError')
    expect(lastCompleteError.errCode).toEqual(1300002)

    // 非递归创建一级目录。期望成功
    await page.setData({
      recursiveVal: false,
      mkdirFile:'a/提前创建的目录',
    })

    await btnMkdDirButton.tap()
    await isDone()

    await page.setData({
      readDir:'a',
    })

    await btnReadDirButton.tap()
    await isDone()

    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[\"b\",\"" + testDirName + "\",\"提前创建的目录\"]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"b\",\"" + testDirName + "\",\"提前创建的目录\"]")


    await page.setData({

      copyFromFile:"a/" + testDirName + "/中文路径/张三/name/中文文件.mock",
      copyToFile:"a/提前创建的目录/4.txt"
    })

      const btnCopyFileButton = await page.$('#btn-copy-file')
      await btnCopyFileButton.tap()
      await isDone()

    await page.setData({
      readDir:'a/提前创建的目录',
    })

    await btnReadDirButton.tap()
    await isDone()

    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[\"4.txt\"]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"4.txt\"]")

    await page.setData({
      unlinkFile:'a/提前创建的目录/4.txt',
      rmDirFile:'a/提前创建的目录'
    })
    await btnUnLinkFileButton.tap()
    await isDone()

    await btnReadDirButton.tap()
    await isDone()

    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[]")

  });



  it('CROSS DIR test', async () => {
    /**
     * 跨越用户目录和代码资源目录
     */
    let globalRootPath = await getData('globalRootPath')
    await page.setData({
      recursiveVal: true,
      logAble:false,
      basePath: globalRootPath,
      readDir:'a',
      rmDirFile:'a',
      mkdirFile:'a',
      accessFile:'a/从代码目录拷贝的资源.png',
      unlinkFile:'a/从代码目录拷贝的资源.png'
    })


    // 先清除文件,需要清除全部可能存在的历史测试文件，避免运行失败
    const btnClearFileButton = await page.$('#btn-clear-file')
    await btnClearFileButton.tap()
    await isDone()


    // 清除文件夹
    const btnRmDirButton = await page.$('#btn-remove-dir')
    await btnRmDirButton.tap()
    await isDone()

    // 重新创建测试目录，期望通过 recursive = true的 文件夹删除，得到一个空的 /a 目录
    const btnMkdDirButton = await page.$('#btn-mkdir')
    await btnMkdDirButton.tap()
    await isDone()

    const btnReadDirButton = await page.$('#btn-read-dir')
    await btnReadDirButton.tap()
    await isDone()

    let fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual('[]')
    let fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual('[]')


    // 检查资源文件，此时不存在
    const btnAccessFileButton = await page.$('#btn-access-file')
    await btnAccessFileButton.tap()
    await isDone()

    let accessFileRet = await getData("accessFileRet")
    expect(accessFileRet).toEqual('')


    // 准备从资源目录拷贝png
    await page.setData({
      basePath: "",
      unlinkFile:'static/test-image/logo.ico',
      accessFile:'static/test-image/logo.ico',
    })
    // 检查资源文件，期望存在
    await btnAccessFileButton.tap()
    await isDone()

    accessFileRet = await getData("accessFileRet")
    expect(accessFileRet).toEqual('access:ok')

    // 尝试删除资源，期望失败
    const btnUnLinkFileButton = await page.$('#btn-unlink-file')
    await btnUnLinkFileButton.tap()
    await isDone()

    await btnAccessFileButton.tap()
    await isDone()

    accessFileRet = await getData("accessFileRet")
    expect(accessFileRet).toEqual('access:ok')
    // 复制资源到 root目录
    await page.setData({
      copyToBasePath:globalRootPath,
      copyFromFile:"static/test-image/logo.ico",
      copyToFile:"a/从代码目录拷贝的资源.png"
    })
    const btnCopyFileButton = await page.$('#btn-copy-file')
    await btnCopyFileButton.tap()
    await isDone()

    // 检查期望 root 目录中图片文件存在
    await page.setData({
      basePath:globalRootPath,
      unlinkFile:'a/从代码目录拷贝的资源.png',
      accessFile:'a/从代码目录拷贝的资源.png',
      rmDirFile:'a',
    })
    await btnAccessFileButton.tap()
    await isDone()

    accessFileRet = await getData("accessFileRet")
    expect(accessFileRet).toEqual('access:ok')

    await btnUnLinkFileButton.tap()
    await isDone()

    await btnAccessFileButton.tap()
    await isDone()

    accessFileRet = await getData("accessFileRet")
    expect(accessFileRet).toEqual('')

    // 从页面的按钮触发一次文件复制
    const btnCopyStaticFileButton = await page.$('#btn-copyStatic-file')
    await btnCopyStaticFileButton.tap()
    await isDone()

    await btnReadDirButton.tap()
    await isDone()

    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[\"mock.json\"]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"mock.json\"]")

    // 从页面的按钮触发一次文件清空
    await btnClearFileButton.tap()
    await isDone()

    await btnReadDirButton.tap()
    await isDone()

    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[]")

  });


  it('write and read', async () => {
    /**
     * 测试writefile readfile 各个参数是否符合预期
     */
    let globalTempPath = await getData('globalTempPath')
    await page.setData({
      recursiveVal: true,
      logAble:false,
      basePath: globalTempPath,
      readDir:'d',
      rmDirFile:'d',
      mkdirFile:'d',
      writeFileContent:"我爱北京天安门，天安门前太阳升",
      writeFileEncoding:"utf-8",
      readFileEncoding:"utf-8",
      unlinkFile:'d/write.bing',
      writeFile:'d/write.bing',
      readFile:'d/write.bing',
      getFileInfoFile:'d/write.bing',
      getFileInfoAlgorithm:"sha1"
    })

    // 先清除文件,需要清除全部可能存在的历史测试文件，避免运行失败
    const btnUnLinkFileButton = await page.$('#btn-unlink-file')
    await btnUnLinkFileButton.tap()
    await isDone()

    // 清除文件夹
    const btnRmDirButton = await page.$('#btn-remove-dir')
    await btnRmDirButton.tap()
    await isDone()

    // 重新创建测试目录，期望通过 recursive = true的 文件夹删除，得到一个空的 /a 目录
    const btnMkdDirButton = await page.$('#btn-mkdir')
    await btnMkdDirButton.tap()
    await isDone()

    const btnReadDirButton = await page.$('#btn-read-dir')
    await btnReadDirButton.tap()
    await isDone()

    let fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual('[]')
    let fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual('[]')

    // 先用utf-8 写入内容
    const btnWriteFileButton = await page.$('#btn-write-file')
    await btnWriteFileButton.tap()
    await isDone()

    const btnReadFileButton = await page.$('#btn-read-file')
    await btnReadFileButton.tap()
    await isDone()
    let readFileRet = await getData('readFileRet')
    expect(readFileRet).toEqual("我爱北京天安门，天安门前太阳升")

    const btnGetFileInfoButton = await page.$('#btn-get-file-info')
    await btnGetFileInfoButton.tap()
    await isDone()

    let getFileInfoSize = await getData('getFileInfoSize')
    expect(getFileInfoSize).toEqual(45)
    let getFileInfoDigest = await getData('getFileInfoDigest')
    expect(getFileInfoDigest).toEqual("2ae9c7672ff6c1e7c7e6a0bb4e74a6f06b39350b")

    // 尝试读取base64 信息
    await page.setData({
      readFileEncoding:"base64",
    })

    await btnReadFileButton.tap()
    await isDone()
    readFileRet = await getData('readFileRet')
    expect(readFileRet).toEqual("5oiR54ix5YyX5Lqs5aSp5a6J6Zeo77yM5aSp5a6J6Zeo5YmN5aSq6Ziz5Y2H")
    // 测试ascii，需要特别测试 ascii 写入非法字符的情况，因为微信的常量字符编码和android原生有差异。

    await page.setData({
      writeFileContent:"丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间",
      writeFileEncoding:"ascii",
      readFileEncoding:"base64",
    })

    await btnWriteFileButton.tap()
    await isDone()

    await btnGetFileInfoButton.tap()
    await isDone()

    getFileInfoSize = await getData('getFileInfoSize')
    expect(getFileInfoSize).toEqual(78)
    getFileInfoDigest = await getData('getFileInfoDigest')
    expect(getFileInfoDigest).toEqual("4ac7a65055628818341c2ad86ddc4205d8503801")

    await btnReadFileButton.tap()
    await isDone()
    readFileRet = await getData('readFileRet')
    expect(readFileRet).toEqual("GbAtywwibr7mDCeJDFxkxwx8AFAxAg4I4PYJH4pS7lIpAg3lKQqrGQzKFS9VdAIRMljOUrsMyFA8fImHDNgEDdzSAnceBAVxDFU8KLr0")

    // 尝试写入合法ascii
    await page.setData({
      writeFileContent:"hello jack.hello marry.",
      writeFileEncoding:"ascii",
      readFileEncoding:"ascii",
    })

    await btnWriteFileButton.tap()
    await isDone()

    await btnReadFileButton.tap()
    await isDone()
    readFileRet = await getData('readFileRet')
    expect(readFileRet).toEqual("hello jack.hello marry.")

    // 写入base64 获取 中文
    await page.setData({
      writeFileContent:"5LiZ6L6w5Lit56eL77yM5qyi6aWu6L6+5pem77yM5aSn6YaJ77yM5L2c5q2k56+H77yM5YW85oCA5a2Q55Sx44CC5piO5pyI5Yeg5pe25pyJ77yf5oqK6YWS6Zeu6Z2S5aSp44CC5LiN55+l5aSp5LiK5a6r6ZiZ77yM5LuK5aSV5piv5L2V5bm044CC5oiR5qyy5LmY6aOO5b2S5Y6777yM5Y+I5oGQ55C85qW8546J5a6H77yM6auY5aSE5LiN6IOc5a+S44CC6LW36Iie5byE5riF5b2x77yM5L2V5Ly85Zyo5Lq66Ze0",
      writeFileEncoding:"base64",
      readFileEncoding:"utf-8",
    })

    await btnWriteFileButton.tap()
    await isDone()

    await btnReadFileButton.tap()
    await isDone()
    readFileRet = await getData('readFileRet')
    expect(readFileRet).toEqual("丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间")

    await page.setData({
      readFileEncoding:"base64",
    })

    await btnReadFileButton.tap()
    await isDone()
    readFileRet = await getData('readFileRet')
    expect(readFileRet).toEqual("5LiZ6L6w5Lit56eL77yM5qyi6aWu6L6+5pem77yM5aSn6YaJ77yM5L2c5q2k56+H77yM5YW85oCA5a2Q55Sx44CC5piO5pyI5Yeg5pe25pyJ77yf5oqK6YWS6Zeu6Z2S5aSp44CC5LiN55+l5aSp5LiK5a6r6ZiZ77yM5LuK5aSV5piv5L2V5bm044CC5oiR5qyy5LmY6aOO5b2S5Y6777yM5Y+I5oGQ55C85qW8546J5a6H77yM6auY5aSE5LiN6IOc5a+S44CC6LW36Iie5byE5riF5b2x77yM5L2V5Ly85Zyo5Lq66Ze0")

  });

  it('stat and asset test', async () => {
    // 测试 USER_DATA_PATH //globalTempPath
    let globalRootPath = await getData('globalRootPath')

    await page.setData({
      recursiveVal: true,
      copyToBasePath:globalRootPath,
      basePath: globalRootPath,
      rmDirFile:'a',
      mkdirFile:'a',
      unlinkFile:'a/1.txt',
    })

    // 先清除文件,需要清除全部可能存在的历史测试文件，避免运行失败
    const btnUnLinkFileButton = await page.$('#btn-unlink-file')
    await btnUnLinkFileButton.tap()
    await isDone()

    await page.setData({
      unlinkFile:'a/2.txt',
    })
    await btnUnLinkFileButton.tap()
    await isDone()

    await page.setData({
      unlinkFile:'a/m/3.txt',
    })
    await btnUnLinkFileButton.tap()
    await isDone()

    // // 清除文件夹
    const btnRmDirButton = await page.$('#btn-remove-dir')
    await btnRmDirButton.tap()
    await isDone()
    // // 重新创建测试目录
    const btnMkdDirButton = await page.$('#btn-mkdir')
    await btnMkdDirButton.tap()
    await isDone()

    const btnReadDirButton = await page.$('#btn-read-dir')
    await btnReadDirButton.tap()
    await isDone()


    // 期望通过 recursive = true的 文件夹删除，得到一个空的 /a 目录
    let fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual('[]')
    let fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual('[]')

    // 写入一个文件
    await page.setData({
      writeFileContent: "锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦",
      writeFileEncoding:"utf-8",
      writeFile:'a/1.txt',
      recursiveVal:false,
      statFile:'a/1.txt',
    })

    let lastFailError = await getData('lastFailError')
    console.log(lastFailError)

    const btnWriteFileButton = await page.$('#btn-write-file')
    await btnWriteFileButton.tap()
    await isDone()

    const btnStatFileButton = await page.$('#btn-stat-file')
    await btnStatFileButton.tap()
    await isDone()

    // 读取单个文件信息
    let statsRet = await getData('statsRet')
    expect(statsRet.length).toEqual(1)
    expect(statsRet[0].path).toMatch(new RegExp('/storage/\\S+/Android/data/io.dcloud.uniappx/a/1.txt'))
    expect(statsRet[0].stats.size).toEqual(69)

    /**
     * 创建子目录和子目录文件，测试recursive参数
     */
    await page.setData({
      writeFileContent: "1234567890",
      writeFileEncoding:"ascii",
      writeFile:'a/2.txt',
      basePath: globalRootPath,
      recursiveVal:false,
      statFile:'a',
      mkdirFile:'a/m',
    })


    await btnWriteFileButton.tap()
    await isDone()

    // 创建子目录
    await btnMkdDirButton.tap()
    await isDone()

    // 复制一份文件到 /a/m/3.txt
    await page.setData({
      //  asset 只能正式版测试，这里只能模拟返回路径
      basePath:'',
      copyFromFile:'file:///android_asset/uni-uts/uni-prompt/toast_error.png',
      copyToFile:'a/m/3.txt',
    })
    const btnCopyFileButton = await page.$('#btn-copy-file')
    await btnCopyFileButton.tap()
    await isDone()


    await page.setData({
      basePath: globalRootPath,
      recursiveVal:true,
      statFile:'a',
    })

    await btnStatFileButton.tap()
    await isDone()

    // 读取全部文件信息
    statsRet = await getData('statsRet')
    console.log(statsRet)
    expect(statsRet.length).toEqual(5)
    expect(statsRet[0].path).toMatch(new RegExp('/storage/\\S+/Android/data/io.dcloud.uniappx/a'))
    expect(statsRet[0].stats.size).toEqual(0)

    expect(statsRet[2].path).toMatch(new RegExp('/storage/\\S+/Android/data/io.dcloud.uniappx/a/2.txt'))
    expect(statsRet[2].stats.size).toEqual(10)

    expect(statsRet[4].path).toMatch(new RegExp('/storage/\\S+/Android/data/io.dcloud.uniappx/a/m/3.txt'))
    expect(statsRet[4].stats.size).toEqual(5842)


    // 清理文件，避免影响其他测试用例
    await page.setData({
      unlinkFile:'a/1.txt',
    })
    await btnUnLinkFileButton.tap()
    await isDone()

    await page.setData({
      unlinkFile:'a/2.txt',
    })
    await btnUnLinkFileButton.tap()
    await isDone()

    await page.setData({
      unlinkFile:'a/m/3.txt',
      rmDirFile:'a',
      readDir:'a',
      recursiveVal:true,
    })
    await btnUnLinkFileButton.tap()
    await isDone()

    await btnRmDirButton.tap()
    await isDone()

    await btnReadDirButton.tap()
    await isDone()

    // 期望通过 recursive = true的 文件夹删除，得到一个空的 /a 目录
    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual('[]')
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual('[]')

  });

});
