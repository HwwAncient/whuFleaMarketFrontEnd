import {
  LikeModel
} from "../../models/like.js"

const likeModel = new LikeModel()

Component({

  properties: {
    likeId: String,
    category:String
  },

  data: {
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png',
    like: null
  },

  ready: function() {
   
   
    if (this.properties.likeId != ""){
      console.log(this.properties.likeId)
      let initLikeStatus = likeModel.getLikeStatus(this.properties.likeId, this.properties.category)
      this.setData({
        like: initLikeStatus
      })
    }

  },

  methods: {

    onLike: function(event) {
      console.log(this.properties.likeId)
      let newLikeStatus = likeModel.updateLikeStatus(this.properties.likeId, this.properties.category)
      this.setData({
        like: newLikeStatus
      })
    }

  }

})