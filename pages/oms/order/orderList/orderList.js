import { getData } from '/service/orderList.js'
Page({
  data: {
    pageNum: 0,
    list: [],

  },
  onLoad() {
    console.log('订单列表加载成功！')

    this._getData()
  },
  onReachBottom() {
    // 页面被拉到底部
    console.log("页面滚动到底部")
    this._getData()
  },

  _getData() {
    const pageNum = this.data.pageNum + 1
    getData(pageNum)
      .then(res => {
        console.log(res)
        const newlist = res.data.list
        const oldlist = this.data.list
        oldlist.push(...newlist)
        this.setData({
          list: oldlist,
          pageNum: pageNum + 1
        })
      })
  }
});
