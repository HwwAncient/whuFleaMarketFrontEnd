var data_base = require('../../../../fake-data/ask-data.js')

Page({

  data: {
    dealDetailProxy: null
  },

  onLoad: function (options) {
    let dealId = options.dealId
    console.log(dealId)
    // TODO 根据dealId向服务器请求详细买卖数据，此处用假数据代替
    this.setData({
      dealDetailProxy: data_base.dealDetailProxy
    })

  }

})