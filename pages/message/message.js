// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: [],
    flag: true
  },
  getColors(){
    if(this.data.flag){
      this.setData({
        flag: false
      })
    //开启loading效果
    wx.showLoading({
      title: '加载中',
    })
   
   wx.request({
     url: 'https://www.escook.cn/api/color',
     method: 'GET',
     success:({data:res}) =>{
       this.setData({
         //将新数据追加到数组中
         colorList: [...this.data.colorList,...res.data]
       })
     },
  //隐藏loading效果
     complete:() =>{
      wx.hideLoading({
        success: (res) => {},
      })
      this.setData({
        flag: true
      })
     }
   })
  }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   this.getColors()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getColors();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})