Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    recommends: [{
      message: '123',
    }, {
      message: '456',
    }],
    array: [{
      message: [{
        app: '热点互评',
        url: '../images/tools_lecihuodong.png',
      }, {
          app: '课堂助手',
          url: '../images/tools_lecihuodong.png',
      }, {
          app: '好文推荐',
          url: '../images/tools_lecihuodong.png',
      }, {
          app: '辩论大厅',
          url: '../images/tools_lecihuodong.png',
      }]
    }, {
      message: [{
        app: '公开课堂',
        url: '../images/tools_lecihuodong.png',
      }, {
          app: '始创发表',
          url: '../images/tools_lecihuodong.png',
      }, {
          app: '帮扶平台',
          url: '../images/tools_lecihuodong.png',
      }, {
          app: '敬请期待',
          url: '../images/tools_lecihuodong.png',
      }]
    }
    ]
  },

  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  tagChoose: function (options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    console.log(id)
    //设置当前样式
    that.setData({
      'currentItem': id
    })
  }
})