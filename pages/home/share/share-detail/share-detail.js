// pages/home/share/share-detail/share-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
      let shareItem = JSON.parse(options.shareItem)
      console.log(shareItem)

    this.setData({
      shareItem
    });
  },

  sureTap:function(){

    wx.showToast({
      title: '申请成功！',
      icon: 'success',
      duration: 2000
    })
  }
})