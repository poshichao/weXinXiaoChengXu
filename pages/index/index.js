Page({
  data: {
    imgUrls: [
      '../images/test1.jpg',
      '../images/test2.jpg',
      // '../images/test3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    recommends: [{
      message: '【热点互评】这次，武汉大学彻底怒了！你怎么看',
    }, {
        message: '【经典新作】正在等你来……',
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