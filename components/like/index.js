import {
  LikeModel
} from "../../models/like.js"

const likeModel = new LikeModel()

Component({

  properties: {
    dealId: String,
    category:String
  },

  data: {
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png',
    like: null
  },

  ready: function() {
   
    console.log(this.properties.dealId)
    let initLikeStatus = likeModel.getLikeStatus(this.properties.dealId, this.properties.category)
    this.setData({
      like: initLikeStatus
    })
    console.log(this.properties.dealId)
  },

  methods: {

    onLike: function(event) {
      console.log(this.properties.dealId)
      let newLikeStatus = likeModel.updateLikeStatus(this.properties.dealId, this.properties.category)
      this.setData({
        like: newLikeStatus
      })
    }

  }

})