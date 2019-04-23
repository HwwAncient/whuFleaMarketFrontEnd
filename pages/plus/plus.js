// pages/plus/plus.js
Page({

  data: {

  },

  onLoad: function (options) {

  },

  onTapPublish:function(event){
    wx.navigateTo({
      url: 'publish/publish',
    })
  },

  onTapAsk: function (event) {
    wx.navigateTo({
      url: 'ask/ask',
    })
  },

  onTapStore: function (event) {
    
    // TODO 暂不开发储物功能
    // wx.navigateTo({
    //   url: 'store/store',
    // })

    wx.showToast({
      title: '抱歉，储物功能暂未开发',
      icon:"none"
    })
  }
  
})