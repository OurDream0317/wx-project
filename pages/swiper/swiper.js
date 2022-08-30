Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: '/pages/swiper/swiper'
    }
  },

  data: {
    background: ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    circular: false
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  changeCircular(){
    this.setData({
      circular: !this.data.circular
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
})