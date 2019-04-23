import { LoginModel } from "../../models/login.js"
const loginModel = new LoginModel()

Page({


  data: {
    
  },

  onLoad: function (options) {
    loginModel.opWithOpenid(openid => {
      console.log(openid)
    })
  },


  
})