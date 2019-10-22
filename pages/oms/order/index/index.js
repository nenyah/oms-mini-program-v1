var app = getApp()
Page({
  data: {
    pageName: 'component/index',
    pageInfo: {
      pageId: 0,
    },
    hidden: true,
    curIndex: 0,
    arr: {
      onItemTap: 'onGridItemTap',
      list: []

    }
  },
  onLoad() {
    var orderFuncList = app.globalData['permissionData'][1]['children'].map(el => {
      el.meta.icon = '/assets/images/order/index/' + el.meta.icon + '.png'
      return el
    })
    console.log(orderFuncList)
    this.setData({
      'arr.list': orderFuncList
    })

  },
  onGridItemTap(e) {
    console.log(e)
    const curIndex = e.currentTarget.dataset.index
    const pageInfo = this.data.arr.list[curIndex]
    const { path } = pageInfo
    const page = path.split("/").pop()
    dd.navigateTo({
      url: `/pages/oms/order/${page}/${page}`,
    })

  },
});
