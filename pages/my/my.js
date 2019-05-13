import {
  UserModel
} from "../../models/user.js"

const userModel = new UserModel()

const myList = {
  0: "我的发布",
  1: "我的订单",
  2: "我的搜藏"
}

Page({

  data: {

  },

  onLoad: function(options) {
    // userModel.getMyCollection_local()
  },

  onGridTap: function(event) {

    let tapIndex = event.detail.index
    console.log(tapIndex)
    if (tapIndex == 0) {
      // 获取我的发布
      // TODO 向服务器请求数据

    } else if (tapIndex == 1) {
      // 获取我的订单
      // TODO 向服务器请求数据
      wx.showToast({
        title: '抱歉，获取订单功能暂未开发',
        icon: 'none'
      })
    } else {
      // 获取我的收藏
      // TODO 向服务器请求数据

    }
  }

})