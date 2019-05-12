import {
  proxyItems
} from "../../../../../config.js"

Page({

  data: {
    consigneeInfo: null,
    dealDetailProxy: null,
    proxyAddress: null
  },

  onLoad: function(options) {
    const dealDetailProxy = JSON.parse(options.dealDetailProxy);
    this.setData({
      dealDetailProxy
    })
    console.log(dealDetailProxy)
  },

  onChooseAddress: function() {
    wx.chooseAddress({
      success: (res) => {
        console.log(res)
        this.setData({
          consigneeInfo: res
        })
      }
    })

  },

  onChangeProxy: function() {
    wx.showActionSheet({
      itemList: proxyItems,
      success: (res) => {
        console.log(res.tapIndex)
        this.setData({
          proxyAddress: proxyItems[res.tapIndex]
        })
      }
    })
  },

  onPayTap: function() {

    // TODO 开启支付功能
    wx.navigateTo({
      url: `success/success?proxyAddress=${this.data.proxyAddress||this.data.dealDetailProxy.address.name}`,
    })
    // wx.navigateBack({
    //   delta: 2,
    //   success: res => {
    //     wx.showToast({
    //       icon: "none",
    //       title: '支付'
    //     })
    //   }
    // })
  }

})