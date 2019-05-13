import {
  categoryItems,
  modeItems
} from "../../../config.js"

Page({


  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    address: null,
    latitude: '',
    longitude: '',
    askCategory: null,
    askMode: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onChangeCategory: function () {
    wx.showActionSheet({
      itemList: categoryItems,
      success: (res) => {
        console.log(res.tapIndex)
        this.setData({
          askCategory: categoryItems[res.tapIndex]
        })
      }
    })
  },

  onChangeMode: function () {
    wx.showActionSheet({
      itemList: modeItems,
      success: (res) => {
        console.log(res.tapIndex)
        this.setData({
          askMode: modeItems[res.tapIndex]
        })
      }
    })
  },


  getLocation: function () {
    var _this = this;
    wx.chooseLocation({
      success: function (res) {
        var name = res.name
        var address = res.address
        var latitude = res.latitude
        var longitude = res.longitude
        _this.setData({
          name: name,
          address: address,
          latitude: latitude,
          longitude: longitude
        })
      }
    })
  }

})