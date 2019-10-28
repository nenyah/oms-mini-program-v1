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
import { getProductCustomerList } from '/service/chooseProduct.js'
import { getUserinfo } from '/service/profile.js'

var app = getApp()

Page({
  data: {
    orderCate: [],
    billType: [],
    list: [],
    client: '',
    saler:'',
    dept:'',
    currency:[],
    channel:[],
    transport:[],
    address:[],
    defaltIndex:0,

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
        orderCate: res.data
      })
    })
  },
  // 2. 获取收款协议
  _getBillType() {
    getBillType().then(res => {
      console.log(res)
      this.setData({
        billType: res.data
      })
    })
  },

  // 3. 获取开票客户==客户名称
  _getCustomer() {
    let customerId = app.globalData.customerId
    getProductCustomerList().then(res => {
      console.log(res)
      this.setData({
        client: res.data[0].name
      })
    })
  },
  // 4. 获取业务员
  _getUserInfo() {
    getUserinfo().then(res=>{
      console.log(res)
      this.setData({
        saler:res.data.user.username
      })
    })
  },
  // 5. 获取部门
  _getDept() {
    getDept().then(res => {
      console.log(res)
      this.setData({
        dept:res.data.name
      })
    })
  },
  // 6. 获取币种
  _getCurrency() {
    getCurrency().then(res => {
      console.log(res)
      this.setData({
        currency:res.data
      })
    })
  },
  // 7. 获取运输方式
  _getTransport() {
    getTransport().then(res => {
      console.log(res)
      this.setData({
        transport:res.data
      })
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
    const customerId = app.globalData.customerId
    getAdress(customerId).then(res => {
      console.log(res)
      this.setData({
        address:res.data.list
      })
    })
  },

  choose_order_cate() {
    dd.showActionSheet({
      items: this.data.orderCate,
      success: (res) => {
        console.log(res)
        this.setData({
          orderCate: this.data.orderCate[res.index]
        })
      },
    })
  },
  choose_bill_type() {
    dd.showActionSheet({
      items: this.data.billType,
      success: (res) => {
        console.log(res)
        this.setData({
          billType: this.data.billType[res.index]
        })
      },
    })
  },
  choose_currency() {
    dd.showActionSheet({
      items: this.data.currency.map(el=>el.name),
      success: (res) => {
        console.log(res)
        this.setData({
          currency: this.data.currency[res.index]
        })
      },
    })
  },
  choose_channel() {
    dd.showActionSheet({
      items: this.data.channel,
      success: (res) => {
        console.log(res)
        this.setData({
          channel: this.data.channel[res.index]
        })
      },
    })
  },
  choose_transport() {
    dd.showActionSheet({
      items: this.data.transport,
      success: (res) => {
        console.log(res)
        this.setData({
          transport: this.data.transport[res.index]
        })
      },
    })
  },
  choose_address() {
    dd.showActionSheet({
      items: this.data.address,
      success: (res) => {
        console.log(res)
        this.setData({
          address: this.data.address[res.index]
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
