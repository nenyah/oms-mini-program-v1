
import { getData } from '/service/home.js'
var app = getApp()

Page({

  data: {
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
    this._getData()
  },
  onGridItemTap(e) {
    // console.log('event', e)
    const curIndex = e.currentTarget.dataset.index
    const pageInfo = this.data.arr.list[curIndex]
    // console.log(pageInfo)
    const { id, path } = pageInfo
    // console.log(path)
    dd.navigateTo({
      url: `../${path}/index/index?id=${id}`,
    })

  },
  _getData() {
    getData()
      .then(res => {
        // console.log('res', res)
        app.globalData['permissionData'] = res.data
        let data = res.data.map((el) => {
          let obj = {}
          Object.assign(obj, el)
          obj['meta']['icon'] = '/assets/images/home/' + obj.meta.icon + '.png'
          return obj
        })

        this.setData({
          'arr.list': data
        })
      })
  }

});
