/*
 * @Description: 
 * @Author: Steven
 * @Date: 2019-10-28 14:49:57
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-28 16:29:25
 */
import utils from '/utils/utils.js'
import {
  getOrderCate,
  getBillType,
  getDept,
  getCurrency,
  getTransport,
  getAdress

} from '/service/createOrder.js'
import { getCartList } from '/service/shopcar.js'

var app = getApp()

Page({
  data: {
    orderCate:[],
    billType: [],
    list: [],

  },
  onLoad(option) {
    // option传来pkCart
    console.log(option)
    this._getOrderCate()
    this._getBillType()
    this._getCustomer()
    this._getUserInfo()
    this._getDept()
    this._getCurrency()
    this._getTransport()
    this._getProduct(option)
    this._getAddress()
  },
  // 1. 获取订单类型
  _getOrderCate() {
    getOrderCate().then(res => {
      console.log(res)
      this.setData({

      })
    })
  },
  // 2. 获取收款协议
  _getBillType() {
    getBillType().then(res => {
      console.log(res)
      this.setData({})
    })
  },

  // 3. 获取开票客户==客户名称
  _getCustomer() {

  },
  // 4. 获取业务员
  _getUserInfo() {

  },
  // 5. 获取部门
  _getDept() {
    getDept().then(res => {
      console.log(res)
    })
  },
  // 6. 获取币种
  _getCurrency() {
    getCurrency().then(res => {
      console.log(res)
    })
  },
  // 7. 获取运输方式
  _getTransport() {
    getTransport().then(res => {
      console.log(res)
    })
  },
  // 9. 获取商品信息
  _getProduct(option) {
    let customerId = app.globalData.customerId
    let pks = option.pks
    console.log(customerId, pks)
    getCartList(customerId, pks).then(res => {
      console.log(res)
      this.setData({
        list: res.data.list
      })
    })
  },
  // 10. 获取地址信息
  _getAddress() {
    getAdress().then(res => {
      console.log(res)
    })
  },

  choose_order_cate() {
    dd.showActionSheet({
      items: this.data.items,
      success: (res) => {
        console.log(res)
        this.setData({
          order_cate: this.data.items[res.index]
        })
      },
    })
  },

  _setDate(date_cate) {
    let today = utils.formatDate(new Date(), '-')
    dd.datePicker({
      format: 'yyyy-MM-dd',
      currentDate: today,
      success: (res) => {
        this.setData({
          [date_cate]: res.date,
        })
      },
    })
  },
  choose_date(event) {
    let date_cate = event.currentTarget.dataset.dateCate
    this._setDate(date_cate)
  },
});
