import {
  HTTP
} from "../utils/http.js"

class UserModel extends HTTP {

  // 从服务器获取我的发布_deal
  getMyDealPublish() {
    return this.request({
      url: 'user/deal',
      data: {}
    })
  }
  // 从服务器获取我的发布_ask
  getMyAskPublish() {
    return this.request({
      url: 'user/purchase',
      data: {}
    })
  }

  // 从服务器获取我的订单
  getMyOrder() {
    // TODO
  }

  // 从服务器获取我的收藏
  getMyCollection() {
    return this.request({
      url: 'user/collect',
      data: {}
    })
  }

  // 从本地缓存获取我的收藏
  getMyCollection_local(callback) {
    wx.getStorageInfo({
      success(res) {
        console.log(res.keys)
        let keys = res.keys
        for (var key in keys) {

        }
        callback()
      }
    })
  }

}

export {
  UserModel
}