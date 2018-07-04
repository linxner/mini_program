const api = require('../../utils/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: [],
    comment: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var detail = wx.getStorageSync('hot')
    this.setData({
      detail: detail[2]
    })
    // var that = this
    // wx.request({
    //   url: `http://120.76.205.241:8000/movie/douban?sort=T&get_all_actor=1&detail_awards=1&id=${options.id}&apikey=eftGXFi8mzKdoA4EKMhWu7IjthNeIuRUrerH7c57ZzC29oufLpfexmNcV4Hzx2DW`,
    //   success(res) {
    //     that.setData({
    //       detail: res.data.data[0]
    //     })
    //   }
    // })
    // wx.request({
    //   url: `http://120.76.205.241:8000/comment/douban?id=${options.id}&parent=movie&apikey=eftGXFi8mzKdoA4EKMhWu7IjthNeIuRUrerH7c57ZzC29oufLpfexmNcV4Hzx2DW`,
    //   success(res) {
    //     that.setData({
    //       comment: res.data.data
    //     })
    //   }
    // })
    // const hot = wx.getStorageSync('hot')
    // const episode = wx.getStorageSync('episode')
    // if (options.name === 'api') {
    //   wx.setNavigationBarTitle({
    //     title: `${api.api[options.index].name}`,
    //   })
    //   this.setData({
    //     detail: api.api[options.index]
    //   })
    // } else if (options.name === 'hot') {
    //   wx.setNavigationBarTitle({
    //     title: `${hot[options.index].title}`,
    //   })
    //   this.setData({
    //     detail: hot[options.index]
    //   })
    // } else {
    //   wx.setNavigationBarTitle({
    //     title: `${episode[options.index].title}`,
    //   })
    //   this.setData({
    //     detail: episode[options.index]
    //   })
    // }
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