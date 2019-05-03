class LikeModel {

  updateLikeStatus(id) {
    let status = this.getLikeStatus(id);
    wx.setStorageSync(`${id}-like`, !status)
    return !status;
  }

  getLikeStatus(id) {
    let status = wx.getStorageSync(`${id}-like`)
    if (!status) {
      wx.setStorageSync(`${id}-like`, false)
      return false
    } else {
      return status
    }
  }

}

export {
  LikeModel
}