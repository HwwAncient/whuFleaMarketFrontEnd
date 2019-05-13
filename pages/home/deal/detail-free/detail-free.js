var data_base = require('../../../../fake-data/ask-data.js')

Page({

  data: {
    dealId:"",
    dealDetailFree: null,
    collectImgUrl: "/images/home/deal/detail/collect.png",
    chatImgUrl: "/images/home/deal/detail/chat.png",
    longitude: 0,
    latitude: 0,
    markers: [],
    university:"武汉大学",
    markerIconPath:"/images/home/deal/detail/location.jpg"
    // polyline: [{
    //   points: [{
    //     latitude: 30.53925933944048,
    //     longitude: 114.35536980628967,
    //   }, {
    //     latitude: 30.54365933944048,
    //     longitude: 114.35536980628967,
    //   }],
    //   color: "#FF0000DD",
    //   width: 4,
    //   dottedLine: false
    // }]
  },

  onLoad: function(options) {
    let dealId = options.dealId
    console.log(dealId)

    // map中标记目的位置的marker
    var marker = {
      iconPath: this.data.markerIconPath,
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 25,
      height: 25
    }

    // TODO 根据dealId向服务器请求详细买卖数据，此处用假数据dealDetailFree代替
    let latitude = data_base.dealDetailFree.address.latitude;
    let longitude = data_base.dealDetailFree.address.longitude;
    marker.latitude = latitude;
    marker.longitude = longitude;
    var markers = [marker]
    this.setData({
      dealId: dealId,
      dealDetailFree: data_base.dealDetailFree,
      longitude: longitude,
      latitude: latitude,
      markers:markers
    })

  },

  // 动态设置页面标题
  onReady: function() {
    wx.setNavigationBarTitle({
      title: this.data.dealDetailFree.title
    })
  },

  // 点击小程序地图组件上的目的地marker跳转到微信原生地图
  onMarkerTap(e) {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name: this.data.dealDetailFree.address.name,
      address: `${this.data.university} ${this.data.dealDetailFree.address.name}`
    })
  },

  // 点击联系她
  onChatTap() {
    // TODO 实现真正的聊天功能
    wx.navigateTo({
      url: `../../ask/chat/chat?headSrc=${this.data.dealDetailFree.owner.headSrc}`,
    })
  }

})