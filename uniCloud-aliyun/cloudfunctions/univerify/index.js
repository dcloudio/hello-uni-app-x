'use strict';
exports.main = async function(event) {
  const res = await uniCloud.getPhoneNumber({
    appid: '__UNI__3584C99', // 替换成自己开通一键登录的应用的DCloud appid
    provider: 'univerify',
    access_token: event.access_token,
    openid: event.openid
  })
  // 执行入库等操作，正常情况下不要把完整手机号返回给前端
  return {
    code: 0,
    message: '获取手机号成功',
    res: res
  }
}
