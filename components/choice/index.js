Component({

  properties: {

  },

  data: {

  },

  methods: {
    onListTap:function(event){
      var categoryId = event.target.dataset.categoryid
      this.triggerEvent('choiceListTap', {
        categoryId: categoryId
      }, {})
    }
    
  }

})
