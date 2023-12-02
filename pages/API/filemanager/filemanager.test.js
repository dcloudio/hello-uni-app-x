const PAGE_PATH = '/pages/API/filemanager/filemanager'


describe('ExtApi-FileManagerTest', () => {

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
      recursiveVal: true,
      copyToBasePath:globalUserDataPath,
      basePath: globalUserDataPath,
      rmDirFile:'a',
      unlinkFile:'a/1.txt'
    })

    // 先清除文件,需要清除全部可能存在的历史测试文件，避免运行失败
    const btnUnLinkFileButton = await page.$('.btn-unlink-file')
    await btnUnLinkFileButton.tap()
    await isDone()

    await page.setData({
      unlinkFile:'a/2.txt'
    })
    await btnUnLinkFileButton.tap()
    await isDone()

    await page.setData({
      unlinkFile:'a/3.txt'
    })
    await btnUnLinkFileButton.tap()
    await isDone()

    // 清除文件夹
    const btnRmDirButton = await page.$('.btn-remove-dir')
    await btnRmDirButton.tap()
    await isDone()
    // 重新创建测试目录
    const btnMkdDirButton = await page.$('.btn-mkdir')
    await btnMkdDirButton.tap()
    await isDone()

    const btnReadDirButton = await page.$('.btn-read-dir')
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
    const btnWriteFileButton = await page.$('.btn-write-file')
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
    const btnReadFileButton = await page.$('.btn-read-file')
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

    const btnGetFileInfoButton = await page.$('.btn-get-file-info')
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
    const btnCopyFileButton = await page.$('.btn-copy-file')
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

    const btnRenameFileButton = await page.$('.btn-rename-file')
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
    await page.setData({
      recursiveVal: true,
      basePath: globalTempPath,
      copyToBasePath:globalTempPath,
      rmDirFile:'a',
      unlinkFile:'a/我们经历了一场兵慌马乱的战争.1@2#3$4%5^6&7*8(9)0+-qwertyuiopasdfghjklzxcvbnm;,/中文路径/张三/name/中文文件.mock'
    })


    // 先清除文件,需要清除全部可能存在的历史测试文件，避免运行失败
    const btnUnLinkFileButton = await page.$('.btn-unlink-file')
    await btnUnLinkFileButton.tap()
    await isDone()

    await page.setData({
      unlinkFile:'a/提前创建的目录/4.txt'
    })
    await btnUnLinkFileButton.tap()
    await isDone()


    // 清除文件夹
    const btnRmDirButton = await page.$('.btn-remove-dir')
    await btnRmDirButton.tap()
    await isDone()

    // 重新创建测试目录
    const btnMkdDirButton = await page.$('.btn-mkdir')
    await btnMkdDirButton.tap()
    await isDone()

    const btnReadDirButton = await page.$('.btn-read-dir')
    await btnReadDirButton.tap()
    await isDone()


    // 期望通过 recursive = true的 文件夹删除，得到一个空的 /a 目录
    let fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[\"b\"]")
    let fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"b\"]")

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
      mkdirFile:'a/我们经历了一场兵慌马乱的战争.1@2#3$4%5^6&7*8(9)0+-qwertyuiopasdfghjklzxcvbnm;,/中文路径/张三/name',
    })
    await btnMkdDirButton.tap()
    await isDone()

    await btnReadDirButton.tap()
    await isDone()

    // 期望通过 recursive = true的 文件夹删除，得到一个空的 /a 目录
    fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual("[\"b\",\"我们经历了一场兵慌马乱的战争.1@2#3$4%5^6&7*8(9)0+-qwertyuiopasdfghjklzxcvbnm;,\"]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"b\",\"我们经历了一场兵慌马乱的战争.1@2#3$4%5^6&7*8(9)0+-qwertyuiopasdfghjklzxcvbnm;,\"]")

    /**
     * 从资源文件中读取图片为base64，测试写入较大文件场景
     * 'static/list-mock/safe.png' 注意，依赖这个资源文件，不能删除
     */
    let globalAppResourcePath = await getData('globalAppResourcePath')
    await page.setData({

      basePath: globalAppResourcePath,
      readFile:'static/list-mock/safe.png',
      readFileFlag:'base64'
    })


    // 获取和对比 文件内容
    const btnReadFileButton = await page.$('.btn-read-file')
    await btnReadFileButton.tap()
    await isDone()
    let readFileRet = await getData('readFileRet')

    expect(readFileRet.length).toEqual(426128)
    let endStr = readFileRet.substring(readFileRet.length - 10)
    expect(endStr).toEqual("lFTkSuQmCC")

    await page.setData({
      basePath: globalTempPath,
      writeFile:'a/我们经历了一场兵慌马乱的战争.1@2#3$4%5^6&7*8(9)0+-qwertyuiopasdfghjklzxcvbnm;,/中文路径/张三/name/中文文件.mock',
      writeFileContent:readFileRet
    })


    const btnWriteFileButton = await page.$('.btn-write-file')
    await btnWriteFileButton.tap()
    await isDone()

    // 获取文件列表，判断是否写入成功，同时置空base64内容 避免影响实时查看状态
    await page.setData({
      readDir:'a/我们经历了一场兵慌马乱的战争.1@2#3$4%5^6&7*8(9)0+-qwertyuiopasdfghjklzxcvbnm;,/中文路径/张三/name',
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
      getFileInfoFile:'a/我们经历了一场兵慌马乱的战争.1@2#3$4%5^6&7*8(9)0+-qwertyuiopasdfghjklzxcvbnm;,/中文路径/张三/name/中文文件.mock',
      getFileInfoAlgorithm:"md5",
    })

    const btnGetFileInfoButton = await page.$('.btn-get-file-info')
    await btnGetFileInfoButton.tap()
    await isDone()

    let getFileInfoSize = await getData('getFileInfoSize')
    expect(getFileInfoSize).toEqual(426128)
    let getFileInfoDigest = await getData('getFileInfoDigest')
    expect(getFileInfoDigest).toEqual("795fd5a20b4f0a63504330e9132dcd30")

    // 切换为 sha1
    await page.setData({
      getFileInfoAlgorithm:"sha1"
    })

    await btnGetFileInfoButton.tap()
    await isDone()

    getFileInfoSize = await getData('getFileInfoSize')
    expect(getFileInfoSize).toEqual(426128)
    getFileInfoDigest = await getData('getFileInfoDigest')
    expect(getFileInfoDigest).toEqual("74877928eddd0351bd8b3b1c677b56f25db682fc")

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
      renameFromFile:"a/我们经历了一场兵慌马乱的战争.1@2#3$4%5^6&7*8(9)0+-qwertyuiopasdfghjklzxcvbnm;,/中文路径/张三/name/中文文件.mock",
      renameToFile:"a/没有提前创建的目录/3.txt"
    })

    const btnRenameFileButton = await page.$('.btn-rename-file')
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
    expect(JSON.stringify(fileListComplete)).toEqual("[\"b\",\"我们经历了一场兵慌马乱的战争.1@2#3$4%5^6&7*8(9)0+-qwertyuiopasdfghjklzxcvbnm;,\",\"提前创建的目录\"]")
    fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual("[\"b\",\"我们经历了一场兵慌马乱的战争.1@2#3$4%5^6&7*8(9)0+-qwertyuiopasdfghjklzxcvbnm;,\",\"提前创建的目录\"]")


    await page.setData({

      copyFromFile:"a/我们经历了一场兵慌马乱的战争.1@2#3$4%5^6&7*8(9)0+-qwertyuiopasdfghjklzxcvbnm;,/中文路径/张三/name/中文文件.mock",
      copyToFile:"a/提前创建的目录/4.txt"
    })

      const btnCopyFileButton = await page.$('.btn-copy-file')
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
      unlinkFile:'a/提前创建的目录/4.txt'
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
      basePath: globalRootPath,
      readDir:'a',
      rmDirFile:'a',
      mkdirFile:'a',
      accessFile:'a/从代码目录拷贝的资源.png',
      unlinkFile:'a/从代码目录拷贝的资源.png'
    })


    // 先清除文件,需要清除全部可能存在的历史测试文件，避免运行失败
    const btnUnLinkFileButton = await page.$('.btn-unlink-file')
    await btnUnLinkFileButton.tap()
    await isDone()


    // 清除文件夹
    const btnRmDirButton = await page.$('.btn-remove-dir')
    await btnRmDirButton.tap()
    await isDone()

    // 重新创建测试目录，期望通过 recursive = true的 文件夹删除，得到一个空的 /a 目录
    const btnMkdDirButton = await page.$('.btn-mkdir')
    await btnMkdDirButton.tap()
    await isDone()

    const btnReadDirButton = await page.$('.btn-read-dir')
    await btnReadDirButton.tap()
    await isDone()

    let fileListComplete = await getData('fileListComplete')
    expect(JSON.stringify(fileListComplete)).toEqual('[]')
    let fileListSuccess = await getData('fileListSuccess')
    expect(JSON.stringify(fileListSuccess)).toEqual('[]')


    // 检查资源文件，此时不存在
    const btnAccessFileButton = await page.$('.btn-access-file')
    await btnAccessFileButton.tap()
    await isDone()

    let accessFileRet = await getData("accessFileRet")
    expect(accessFileRet).toEqual('')


    // 准备从资源目录拷贝png
    let globalAppResourcePath = await getData('globalAppResourcePath')
    await page.setData({
      basePath: globalAppResourcePath,
      unlinkFile:'static/list-mock/safe.png',
      accessFile:'static/list-mock/safe.png',
    })
    // 检查资源文件，期望存在
    await btnAccessFileButton.tap()
    await isDone()

    accessFileRet = await getData("accessFileRet")
    expect(accessFileRet).toEqual('access:ok')

    // 尝试删除资源，期望失败
    await btnUnLinkFileButton.tap()
    await isDone()

    await btnAccessFileButton.tap()
    await isDone()

    accessFileRet = await getData("accessFileRet")
    expect(accessFileRet).toEqual('access:ok')
    // 复制资源到 root目录
    await page.setData({
      copyToBasePath:globalRootPath,
      copyFromFile:"static/list-mock/safe.png",
      copyToFile:"a/从代码目录拷贝的资源.png"
    })
    const btnCopyFileButton = await page.$('.btn-copy-file')
    await btnCopyFileButton.tap()
    await isDone()

    // 检查期望 root 目录中图片文件存在
    await page.setData({
      basePath:globalRootPath,
      unlinkFile:'a/从代码目录拷贝的资源.png',
      accessFile:'a/从代码目录拷贝的资源.png',
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

  });



});
