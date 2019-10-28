/*
 * @Description: 
 * @Author: Steven
 * @Date: 2019-09-26 10:10:23
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-09 16:09:42
 */
import {
  getCartList,
  delItem,
  updateItem
} from '/service/shopcar.js'

var app = getApp()

Page({
  data: {
    total: false, //是否全选
    counter: 0,
    data: {
      pageNum: 1,
      pageSize: 11,
      totalPage: 1,
      total: 11,
      list: [
        {
          "pkCart": "HD1571991976385ZKMZR",
          "pkAdmin": "1001C110000000000DFO",
          "pkProduct": "1001C9100000000055KS",
          "quantity": 1,
          "productCode": null,
          "productName": "人血白蛋白",
          "productBrand": null,
          "productBarcode": null,
          "batch": null,
          "createTime": "2019-10-25 16:26:16",
          "modifyTime": null,
          "productAttr": null,
          "sp1": "20% 5g/25ml",
          "sp2": null,
          "sp3": null,
          "def1": null,
          "select": false
        }, {
          "pkCart": "HD1569589055245ACZLP",
          "pkAdmin": "1001C110000000000DFO",
          "pkProduct": "1001C110000000005T9I",
          "quantity": 2,
          "productCode": null,
          "productName": "报关费",
          "productBrand": null,
          "productBarcode": null,
          "batch": null,
          "createTime": "2019-09-27 20:57:35",
          "modifyTime": "2019-10-25 16:00:40",
          "productAttr": null,
          "sp1": null,
          "sp2": null,
          "sp3": null,
          "def1": null,
          "select": false
        }]
    },
    isEdit: false,
    index: 0,
  },

  totalFun(e) { //全选

    this.data.total = !this.data.total
    var counter = this.data.counter
    this.data.data.list.map((v, k) => {
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
    var index = e.currentTarget.dataset.index
    const goods = this.data.data.list[index]
    goods.select = !goods.select
    var counter = this.data.counter
    if (goods.select) {
      counter++
    } else {
      counter--
    }
    console.log(counter)
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
  plusFun(event) { //增加商品数量
    // console.log(event)
    // console.log(this.data.data.list)
    var pkCart = event.target.dataset.item.pkCart
    var num = ''
    this.data.data.list.map((v, k) => {
      if (v.pkCart == pkCart) {
        this.data.data.list[k].quantity++
        num = this.data.data.list[k].quantity
      }
    })

    this.setData({
      'data.list': this.data.data.list
    })
    // #1 获取数据的pkcart和数量

    var data = {
      pkCart: pkCart,
      quantity: num
    }
    this._updateItem(data)


  },
  reduceFun(event) { //减少商品数量
    console.log(event)
    var pkCart = event.target.dataset.item.pkCart
    var num = ''
    this.data.data.list.map((v, k) => {
      if (v.pkCart == event.target.dataset.item.pkCart) {
        if (this.data.data.list[k].quantity > 1) {
          this.data.data.list[k].quantity--
          num = this.data.data.list[k].quantity
        }
      }
    })

    this.setData({
      'data.list': this.data.data.list
    })
    var data = {
      pkCart: pkCart,
      quantity: num
    }
    this._updateItem(data)
  },
  delItemFun(event) { //删除单商品
    console.log(event)
    let pkCart = event.target.dataset.item.pkCart
    this._delItem(pkCart)
    this._getCartList()

  },
  delFun() { //选中删除
    let list = []

    this.data.data.list.map((v, k) => {
      if (v.select) {
        this._delItem(v.pkCart)
      }
    })

    this._getCartList()



  },
  closeFun() {
    let list = []
    let listTotal = []
    this.data.data.list.map((v, k) => {
      if (v.select) {
        list.push(v)
      } else {
        listTotal.push(v)
      }
    })
    dd.navigateTo({
      url: '/pages/oms/order/createOrder/createOrder'
    })


  },
  onLoad() {
    this._getCartList()
    this._checkCount()
  },
  onShow: function() {

  },
  _getCartList() {
    const customerId = app.globalData.customerId
    getCartList(customerId).then(res => {
      console.log(res)
      res.data.list.map((v, k) => {
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
  }
});
