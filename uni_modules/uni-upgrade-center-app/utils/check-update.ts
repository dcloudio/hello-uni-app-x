import callCheckVersion, { UniUpgradeCenterResult } from "./call-check-version"
// #ifdef UNI-APP-X
import { ComponentPublicInstance } from 'vue'
// #endif

// 推荐再App.vue中使用
const PACKAGE_INFO_KEY = '__package_info__'
// #ifdef UNI-APP-X
export default function (component : ComponentPublicInstance | null = null) : Promise<UniUpgradeCenterResult> {
  // #endif
  // #ifndef UNI-APP-X
  export default function () : Promise<UniUpgradeCenterResult> {
    // #endif
    // #ifdef APP-PLUS
    return new Promise<UniUpgradeCenterResult>((resolve, reject) => {
      callCheckVersion().then(async (uniUpgradeCenterResult) => {
        // NOTE uni-app x 3.96 解构有问题
        const code = uniUpgradeCenterResult.code
        const message = uniUpgradeCenterResult.message
        const url = uniUpgradeCenterResult.url // 安装包下载地址
        // const is_silently = uniUpgradeCenterResult.is_silently // 是否静默更新
        // const platform = uniUpgradeCenterResult.platform // 安装包平台
        // const type = uniUpgradeCenterResult.type // 安装包类型

        // 此处逻辑仅为示例，可自行编写
        if (code > 0) {
          // 腾讯云和阿里云下载链接不同，需要处理一下，阿里云会原样返回
          const tcbRes = await uniCloud.getTempFileURL({ fileList: [url] });
          if (typeof tcbRes.fileList[0].tempFileURL !== 'undefined') uniUpgradeCenterResult.url = tcbRes.fileList[0].tempFileURL;

          /**
           * 提示升级一
           * 使用 uni.showModal
           */
          // return updateUseModal(uniUpgradeCenterResult)

          /**
           * 提示升级二
           * 官方适配的升级弹窗，可自行替换资源适配UI风格
           */
          // #ifndef UNI-APP-X
          uni.setStorageSync(PACKAGE_INFO_KEY, uniUpgradeCenterResult)
          uni.navigateTo({
            url: `/uni_modules/uni-upgrade-center-app/pages/upgrade-popup?local_storage_key=${PACKAGE_INFO_KEY}`,
            fail: (err) => {
              console.error('更新弹框跳转失败', err)
              uni.removeStorageSync(PACKAGE_INFO_KEY)
            }
          })
          // #endif
          // #ifdef UNI-APP-X
          component?.$callMethod('show', true, uniUpgradeCenterResult)
          // #endif

          return resolve(uniUpgradeCenterResult)
        } else if (code < 0) {
          // TODO 云函数报错处理
          console.error(message)
          return reject(uniUpgradeCenterResult)
        }
        return resolve(uniUpgradeCenterResult)
      }).catch((err) => {
        // TODO 云函数报错处理
        reject(err)
      })
    });
    // #endif
  }

  // #ifdef UNI-APP-X
  /**
   * 使用 uni.showModal 升级
   */
  function updateUseModal(packageInfo : UniUpgradeCenterResult) : void {
    const {
      title, // 标题
      contents, // 升级内容
      is_mandatory, // 是否强制更新
      url, // 安装包下载地址
    } = packageInfo;

    let confirmText = '立即下载更新'

    return uni.showModal({
      title,
      content: contents,
      showCancel: !is_mandatory,
      confirmText,
      success: res => {
        if (res.cancel) return;

        uni.showToast({
          title: '后台下载中……',
          duration: 1000
        });

        // wgt 和 安卓下载更新
        uni.downloadFile({
          url,
          success: res => {
            if (res.statusCode !== 200) {
              console.error('下载安装包失败');
              return;
            }
            // 下载好直接安装，下次启动生效
            uni.installApk({
              filePath: res.tempFilePath,
              success: () => {
                uni.showModal({
                  title: '安装成功请手动重启'
                });
              },
              fail: err => {
                uni.showModal({
                  title: '更新失败',
                  content: err.message,
                  showCancel: false
                });
              }
            });
          }
        });
      }
    });
  }
  // #endif

  // #ifndef UNI-APP-X
  /**
   * 使用 uni.showModal 升级
   */
  function updateUseModal(packageInfo : UniUpgradeCenterResult) : void {
    const {
      title, // 标题
      contents, // 升级内容
      is_mandatory, // 是否强制更新
      url, // 安装包下载地址
      platform, // 安装包平台
      type // 安装包类型
    } = packageInfo;

    let isWGT = type === 'wgt'
    let isiOS = !isWGT ? platform.includes('iOS') : false;
    let confirmText = isiOS ? '立即跳转更新' : '立即下载更新'

    return uni.showModal({
      title,
      content: contents,
      showCancel: !is_mandatory,
      confirmText,
      success: res => {
        if (res.cancel) return;

        // 安装包下载
        if (isiOS) {
          plus.runtime.openURL(url);
          return;
        }

        uni.showToast({
          title: '后台下载中……',
          duration: 1000
        });

        // wgt 和 安卓下载更新
        uni.downloadFile({
          url,
          success: res => {
            if (res.statusCode !== 200) {
              console.error('下载安装包失败');
              return;
            }
            // 下载好直接安装，下次启动生效
            plus.runtime.install(res.tempFilePath, {
              force: false
            }, () => {
              if (is_mandatory) {
                //更新完重启app
                plus.runtime.restart();
                return;
              }
              uni.showModal({
                title: '安装成功是否重启？',
                success: res => {
                  if (res.confirm) {
                    //更新完重启app
                    plus.runtime.restart();
                  }
                }
              });
            }, err => {
              uni.showModal({
                title: '更新失败',
                content: err
                  .message,
                showCancel: false
              });
            });
          }
        });
      }
    });
  }
// #endif
