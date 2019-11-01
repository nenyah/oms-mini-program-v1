/*
 * @Description: 购物车
 * @Author: Steven
 * @Date: 2019-09-26 10:10:23
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-29 16:13:49
 */
import {
  getCartList,
  delItem,
  updateItem,
  clearAll
} from '/service/shopcar.js'

const app = getApp()

Page({
  data: {
    total: false, //是否全选
    counter: 0,
    data: {
      pageNum: 1,
      pageSize: 11,
      totalPage: 1,
      total: 11,
      list: []
    },
    isEdit: false,
    index: 0,
  },
  onLoad() {
    this._getCartList()
    this._checkCount()
  },
  totalFun() { //全选
    this.data.total = !this.data.total
    let counter = this.data.counter
    this.data.data.list.forEach((v, k) => {
      if (this.data.total) {
        v.select = true
        counter++
      } else {
        v.select = false
      }
    })
    if (!this.data.total) {
      counter = 0
    }
    this.setData({
      'data.list': this.data.data.list,
      total: this.data.total,
      counter
    })

  },
  labelFun(e) {//单选
    let index = e
    const goods = this.data.data.list[index]
    goods.select = !goods.select
    let counter = this.data.counter
    if (goods.select) {
      counter++
    } else {
      counter--
    }

    this.setData({
      [`data.list[${index}]`]: goods,
      counter
    })
  },
  editFun() { //编辑
    this.setData({
      isEdit: !this.data.isEdit
    })

    if (!this.data.isEdit) {
      console.log(this.data.list)
      this._getCartList()
    }
  },

  delFun() { //选中删除
    if (this.data.counter > 0) {
      let list = []
      this.data.data.list.forEach((v, k) => {
        if (v.select) {
          this._delItem(v.pkCart)
        }
      })
      this._getCartList()
    }
  },

  closeFun() {
    if (this.data.counter > 0) {
      let list = []
      let listTotal = []
      this.data.data.list.forEach((v, k) => {
        if (v.select) {
          list.push(v)
        } else {
          listTotal.push(v)
        }
      })
      let params = list.map(v => v.pkCart).join(',')
      dd.navigateTo({
        url: `/pages/oms/order/createOrder/createOrder?pks=${params}`
      })
    }
  },
  
  // 更新数量
  onUpdateNum(e) {
    const { handle, index } = e
    console.log(e)
    let num = this.data.data.list[index].quantity
    if (handle) {
      num++
    } else {
      num > 1 ? num-- : 1
    }
    // 重新渲染
    const quantity = `data.list[${index}].quantity`
    this.setData({
      [quantity]: num
    })
    // 更新数据库
    let data = {
      pkCart: this.data.data.list[index].pkCart,
      quantity: num
    }
    this._updateItem(data)
  },
  // 一键清空
  clear() {
    const customerId = app.globalData.customerId
    clearAll(customerId).then(res => {
      console.log(res)
      this._getCartList()
    })
  },

  _getCartList() {
    const customerId = app.globalData.customerId
    getCartList(customerId).then(res => {
      res.data.list.forEach((v, k) => {
        if (this.data.total) {
          v.select = true
        } else {
          v.select = false
        }
      })
      this.setData({
        data: res.data,
      })
    })
  },
  _delItem(pkCart) {
    delItem(pkCart).then(res => {
      console.log(res)
    })
  },
  _updateItem(data) {
    updateItem(data).then(res => {
      console.log(res)
    })
  },
  _checkCount() {
    const num = this.data.data.list.length
    console.log(num)
  },
});
