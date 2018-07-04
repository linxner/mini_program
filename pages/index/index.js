const newest = require("../../utils/api.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    api: [],
    hot: [],
    episode: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    wx.request({
      url: 'http://120.76.205.241:8000/movie/douban?catid=%E7%94%B5%E5%BD%B1&get_all_actor=1&sort=T&detail_awards=1&apikey=eftGXFi8mzKdoA4EKMhWu7IjthNeIuRUrerH7c57ZzC29oufLpfexmNcV4Hzx2DW',
      success(res) {
        wx.setStorageSync('hot', res.data.data)
      },
      complete() {
        wx.request({
          url: 'http://120.76.205.241:8000/movie/douban?catid=%E7%94%B5%E8%A7%86%E5%89%A7&sort=T&get_all_actor=1&detail_awards=1&apikey=eftGXFi8mzKdoA4EKMhWu7IjthNeIuRUrerH7c57ZzC29oufLpfexmNcV4Hzx2DW',
          success(res) {
            wx.setStorageSync("episode", res.data.data)
          }
        })
      }
    })
    const hot = wx.getStorageSync('hot')
    const episode = wx.getStorageSync('episode')
    this.setData({
      api: newest.api,
      hot: hot,
      episode: episode
    })
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