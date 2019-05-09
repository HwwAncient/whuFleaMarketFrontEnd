class LikeModel {

  updateLikeStatus(id, category) {
    let status = this.getLikeStatus(id, category);
    wx.setStorageSync(`${category}-like-${id}`, !status)
    return !status;
  }

  getLikeStatus(id, category) {
    let status = wx.getStorageSync(`${category}-like-${id}`)
    if (!status) {
      wx.setStorageSync(`${category}-like-${id}`, false)
      return false
    } else {
      return status
    }
  }

}

export {
  LikeModel
}