import { getOrder } from '/service/orderList.js'
import {
  ORDER,
  SHIP,
  DONE,
  CANCEL
} from '/common/const.js'
Page({
  data: {
    titles: ['已下单', '已发货', '已完成', '已取消'],
    orders: {
      [ORDER]: { page: 1, list: [] },
      [SHIP]: { page: 1, list: [] },
      [DONE]: { page: 1, list: [] },
      [CANCEL]: { page: 1, list: [] },
    },
    currentType: '0',
    topPosition: 0,
  
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
    this._getOrderData(ORDER)
    this._getOrderData(SHIP)
    this._getOrderData(DONE)
    this._getOrderData(CANCEL)
  },
  onTabClick(e) {
    // 1.根据当前的点击赋值最新的currentType
    let currentType = ''
    switch (e.index) {
      case 0:
        currentType = ORDER
        break
      case 1:
        currentType = SHIP
        break
      case 2:
        currentType = DONE
        break
      case 3:
        currentType = CANCEL
        break
    }
    this.setData({
      currentType: currentType
    })
  },
  _getOrderData(type) {
    // 1.获取数据对应的页码
    const page = this.data.orders[type].page
    // 2.请求数据
    getOrder(type, page).then(res => {
      // 1.取出数据
      const list = res.data.list
      // console.log('list', list)
      // 2.将数据临时获取
      const orders = this.data.orders;
      orders[type].list.push(...list)
      orders[type].page += 1;

      // 3.最新的goods设置到goods中
      this.setData({
        orders
      })
    })
  }
});
