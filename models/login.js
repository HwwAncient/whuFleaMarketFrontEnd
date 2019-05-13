import {
  config
} from "../config.js"
import {
  HTTP
} from "../utils/http.js"

class LoginModel extends HTTP {

  // 用户登录提供后台openid
  login(){
    this.opWithOpenid((openid)=>{
      // TODO 请求服务器告知openid用户登录，后台将openid存入session
      console.log(openid + " 用户已登录")
    })
  }

  // 用户登录获取code
  register() {

    return new Promise((resolve, reject) => {
        wx.login({
          success: (res) => {
            if (res.code) {
              resolve(res.code)

            } else {
              reject()
            }
          }
        })

      })
      .then(res => {
        return this.decrypt(res)
      })



  }

  // 用于对code进行解密，获取用户openid
  decrypt(code) {
    return this.request({
      url: `?appid=${config.appId}&secret=${config.appSecret}&js_code=${code}&grant_type=authorization_code`
    })
  }

  // 获取用户信息，需要授权
  getUserInfo() {

    const promise = new Promise((resolve, reject) => {
      wx.getUserInfo({
        withCredentials:false,
        success: res => resolve(res),
        fail:res=>reject(res)
      })
    })
    return promise


  }

  // 用于需要使用openid的操作
  opWithOpenid(callback) {

    let openid = wx.getStorageSync("openid")
    if (!openid) {

      return new Promise((resolve, reject) => {
        wx.login({
          success: (res) => {
            if (res.code) {
              resolve(res.code)

            } else {
              reject()
            }
          }
        })

      })
        .then(res => {
          return this.decrypt(res)
        })
        .then(res=>{
          wx.setStorageSync("openid", res.openid)
          callback(res.openid)
        })
    }
    else callback(openid)
  }

}

export {
  LoginModel
}