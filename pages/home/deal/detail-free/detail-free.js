var data_base = require('../../../../fake-data/ask-data.js')

Page({

  data: {
    dealDetailFree:null
  },

  onLoad: function(options) {
    let dealId = options.dealId
    console.log(dealId)
    // TODO 根据dealId向服务器请求详细买卖数据，此处用假数据代替
    this.setData({
      dealDetailFree: data_base.dealDetailFree
    })

  },

  // 动态设置页面标题
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.dealDetailFree.title
    })
  }

})