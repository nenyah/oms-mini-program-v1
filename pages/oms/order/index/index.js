var app = getApp()
Page({
  data: {
    arr: {
      onItemTap: 'onGridItemTap',
      list: []

    }
  },
  onLoad(query) {
    console.log("订单功能首页加载成功")

    let orderFuncList = app.globalData['permissionData']
      .filter(el => el.id == query.id)[0]['children']
      .filter(el => !el.hidden)
      .map(el => {
        let obj = {}
        Object.assign(obj, el)
        if(!el.meta.icon.includes('assets')){
          obj['meta']['icon'] = '/assets/images/order/index/' + el.meta.icon + '.png'   
        }  
        return obj      
      })


    this.setData({
      'arr.list': orderFuncList
    })

  },
  onGridItemTap(e) {
    const curIndex = e.currentTarget.dataset.index
    const pageInfo = this.data.arr.list[curIndex]
    const { path } = pageInfo
    const page = path.split("/").pop()
    dd.navigateTo({
      url: `/pages/oms/order/${page}/${page}`,
    })

  },
});
