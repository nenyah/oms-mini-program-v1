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
    console.log('app.globalData',app.globalData)
    var orderFuncList = app.globalData['permissionData'].filter(el=>el.id==='16')[0]['children'].map(el => {
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
      success:'',
      fail:(res)=>{
        console.log("功能正在开发中！")
      }
    })

  },
});
