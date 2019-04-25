Component({

  properties: {
    cardItem:Object

  },

  data: {

  },

  methods: {

    onButtonTap:function(){
      var dealId = this.properties.cardItem.id
      console.log(dealId)
      // TODO 利用dealId跳转到商品详情页面
    }

  }
  
})
