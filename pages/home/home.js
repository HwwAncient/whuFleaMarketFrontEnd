var askData = require('../../fake-data/ask-data.js')

Page({

  data: {
    isChoiceShown:false,
    isCancelShown:false,
    isCategoryShown:true,
    isContentShown:true,
    tabActiveKey: "deal"
  },

  onLoad: function (options) {
    //this.data.askList = askData.askList;
    this.setData({
      askList: askData.askList
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
  }

  
})