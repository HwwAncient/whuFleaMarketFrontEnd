import { LoginModel } from "models/login.js"
const loginModel = new LoginModel()
App({
  
  onLaunch(options) {

    // TODO 用户退出小程序时清理本地openid的缓存，以便不同用户登录使用openid key-value
    // 检查用户是否已经在后台注册，若未注册则注册，已注册则不采取动作
    let openid = wx.getStorageSync("openid")
    if(!openid){
      loginModel.login()
        .then(res => {
          wx.setStorageSync("openid", res.openid)
          //TODO 向后台POST注册用户
          wx.showToast({
            title: '第一次登录，注册成功',
            icon:"none"
          })
        })
    }
    

    // 获取用户信息UserInfo
    // loginModel.getUserInfo()
    // .then(res=>{
    //   console.log(res)
    // })

    // 使用opneid进行操作
    // loginModel.opWithOpenid(openid=>{
    //   console.log(openid)
    // })
 

  }

})