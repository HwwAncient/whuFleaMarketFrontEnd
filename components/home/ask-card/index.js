Component({

  properties: {
    cardItem: Object
  },

  data: {
    university: "武汉大学",
    proxy: "代理点",
    free: "自由发布"
  },

  methods: {

    onButtonTap: function() {
      var dealId = this.properties.cardItem.id
      //利用dealId跳转到商品详情页面
      const detailProxy = "/pages/home/deal/detail-proxy/detail-proxy"
      const detailFree = "/pages/home/deal/detail-free/detail-free"
      wx.navigateTo({
        url: (this.properties.cardItem.mode == 1 ? detailProxy : detailFree) + "?dealId=" + dealId
      })

    }

  }

})