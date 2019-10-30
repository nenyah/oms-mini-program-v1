
import { getData } from '/service/home.js'
var app = getApp()

Page({

  data: {
    arr: {
      onItemTap: 'onGridItemTap',
      list: []
    },
  },

  onLoad() {
    console.log('首页加载成功！')
    this._getData()
  },
  onGridItemTap(e) {
    const curIndex = e.currentTarget.dataset.index
    const pageInfo = this.data.arr.list[curIndex]
    const { id, path } = pageInfo
    dd.navigateTo({
      url: `../${path}/index/index?id=${id}`,
    })

  },
  _getData() {
    getData()
      .then(res => {
        console.log('获取首页数据res', res)
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
