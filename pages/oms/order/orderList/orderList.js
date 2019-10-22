var api = require('/config/api.js')

Page({
  data: {
    pageNum: 1,
    pageSize: 10,
    totalPage: 5,
    total: 48,
    list: [],
    dispaly: true,

  },
  onLoad() {
    console.log('订单列表加载成功！')
    let res = dd.getStorageSync({ key: "Authorization" });
    console.log({
      Authorization: res.data,
    })
    var pageNum = this.data.pageNum
    var pageSize = this.data.pageSize
    dd.httpRequest({
      url: api.OrderList + '?pageNum=' + pageNum + '&pageSize=' + pageSize,
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": res.data,
      },
      success: (res) => {
        console.log("获取数据成功")
        console.log(res)
        this.setData({
          list: res.data.data.list
        })
      }
    })
  },
  onReachBottom(e) {
    // 页面被拉到底部
    console.log(e)
  },
});
