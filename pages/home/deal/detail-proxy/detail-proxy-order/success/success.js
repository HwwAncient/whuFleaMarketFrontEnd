
Page({

  data: {
    proxyAddress:null
  },

  onLoad: function (options) {
    const proxyAddress = options.proxyAddress
    this.setData({
      proxyAddress
    })
  },

  onReturnTap:function(){
    wx.navigateBack({
      delta:3
    })
  },

  onUnlockTap:function(){
    wx.showToast({
      title: '抱歉，储物功能暂未开启',
      icon: 'none'
    })
  }

})