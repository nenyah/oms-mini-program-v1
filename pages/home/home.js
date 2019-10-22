
var api = require('/config/api.js')
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
      list: [
        {
          icon: '/assets/images/home/order.png',
          title: '订单管理',
          page: 'order',

        },
        {
          icon: '/assets/images/home/process.png',
          title: '流向管理',
          page: 'process',

        },
        {
          icon: '/assets/images/home/order.png',
          title: '订单管理',
          page: 'order',

        }
      ]
    },
    // data: [],
  },

  onLoad() {
    console.log('首页加载成功！')
    let res = dd.getStorageSync({ key: "Authorization" });
    console.log({
      Authorization: res.data,
    })
    dd.httpRequest({
      url:api.Adminuserpermission,
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization":res.data,
      },
      success: (res) => {
        console.log(res)
        app.globalData['permissionData'] = res.data.data
        let data = res.data.data.map((el)=>{
          let obj = {}
          // console.log(obj)
          Object.assign(obj,el)
          console.log(obj)
          obj['meta']['icon']= '/assets/images/home/'+obj.meta.icon+'.png'
          return obj
        })
        console.log(data)
        
        this.setData({
          'arr.list':data
        })
      }
    })
  },
  onGridItemTap(e) {
    console.log(e)
    const curIndex = e.currentTarget.dataset.index
    const pageInfo = this.data.arr.list[curIndex]
    console.log(pageInfo)
    const { path } = pageInfo
    console.log(path)
    dd.navigateTo({
      url: `../${path}/index/index`,
    })

  },
});
