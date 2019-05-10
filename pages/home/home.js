var data_base = require('../../fake-data/ask-data.js')

Page({

  data: {
    isChoiceShown:false,
    isCancelShown:false,
    isCategoryShown:true,
    isContentShown:true,
    tabActiveKey: "deal",
    askList:[],
    dealList:[],
    shareList:[]
  },

  onLoad: function (options) {

    this.setData({
      askList: data_base.askList,
      dealList: data_base.dealList,
      shareList: data_base.shareList
    });
    
  },

  onCategoryTap:function(){
    this.setData({
      isChoiceShown:!this.data.isChoiceShown,
      isContentShown:!this.data.isContentShown
    })
  },

  onChoiceListTap:function(event){
    let categoryId = event.detail.categoryId
    this.setData({
      isContentShown: !this.data.isContentShown,
      isChoiceShown: !this.data.isChoiceShown
    })
    wx.navigateTo({
      url: `home-category/home-category?categoryId=${categoryId}`,
      success:()=>{
        
      }
    })


  },

  onSearchConfirm:function(event){
    let input = event.detail.detail.value
    console.log(input)
    this.setData({
      isContentShown:false
    })
  },

  onSearchFocus:function(event){
    this.setData({
      isCancelShown: true,
      isCategoryShown: false,
      isContentShown: false,
      isChoiceShown: false
    })
  },

  onSearchCancel:function(event){
    this.setData({
      isCancelShown: false,
      isCategoryShown: true,
      isContentShown: true
    })
  },

  onTabChange:function(event){
    let currentActiveKey = event.detail.activeKey
    console.log(currentActiveKey)
    this.setData({
      tabActiveKey:currentActiveKey
    })
    console.log(this.data.tabActiveKey)
  },

  useTap: function (event) {
    console.log(event)
    var shareItem = JSON.stringify(event.currentTarget.dataset.shareItem)
    wx.navigateTo({
      url: 'share/share-detail/share-detail' + "?shareItem=" + shareItem,
    })
  },

  linkTap: function(event) {
    var askItem = JSON.stringify(event.currentTarget.dataset.askItem)
    wx.navigateTo({
      url: 'ask/chat/chat' + "?askItem=" + askItem,
    })
  }
  
})