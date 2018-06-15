Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginShow: false,
    failed: false
  },
  primary: function() {
    this.setData({
      loginShow: true
    })
  },
  confirm() {
    this.setData({
      loginShow: false
    })
    wx.getUserInfo({
      success(e) {
        console.log(e)
      }
    })
  },
  login() {
    wx.navigateTo({
      url: '../sign/sign',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  refuse() {
    this.setData({
      failed: true
    })
    setTimeout(() => {
      this.setData({
        loginShow: false,
        failed: false
      })
    }, 2000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})