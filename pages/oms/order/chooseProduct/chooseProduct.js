import {
  getProductCate,
  getProductBrand,
  getProduct,
  getProductCustomerList,
  addCart,
  getCartList
} from '/service/chooseProduct.js'

import { getUserinfo } from '/service/profile.js'

var app = getApp()

Page({

  data: {
    goods: {
      page: 1,
      totalPage: 99,
      list: []
    },
    productCate: [],
    customers: [],
    arrIndex: 0,
    totalProductCate: 0,

  },
  onLoad() {
    this._getProductCate()
    this._getProductCustomer()
  },
  onUnload() {
    // 页面被关闭
    console.log("页面被关闭")
    this.data.goods.list=[]
  },
  _getProductCate() {
    getProductCate().then(res => {
      console.log(res.data[0].children)
      const productCate = res.data[0].children.map(el => el.label)
      this.setData({
        productCate
      })
    })
  },
  _getProduct() {
    const pageNum = this.data.goods.page
    const customerId = this.data.customers[this.data.arrIndex].pkCustomer
    const totalPage = this.data.goods.totalPage
    if (pageNum < totalPage + 1) {
      getProduct({
        pageNum: pageNum,
        pkCustomer: customerId
      }).then(res => {
        console.log(res)
        // 1.取出数据
        const list = res.data.list
        // console.log('list', list)
        // 2.将数据临时获取
        const goods = this.data.goods;
        goods.list.push(...list)
        goods.page += 1
        goods.totalPage = res.data.totalPage
        this.setData({
          goods
        })
      })
    } else {
      this.setData({
        bottomline: !this.data.bottomline
      })
    }


  },
  _getProductCustomer() {
    getProductCustomerList().then(res => {
      console.log(res)
      this.setData({
        customers: res.data
      })
    })
  },
  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    })
    this._getProduct()
    this._getCartList()
    app.globalData.customerId = this.data.customers[e.detail.value].pkCustomer
  },
  onReachBottom() {
    // 页面被拉到底部
    this._getProduct()
  },
  addCart(e) {
    // console.log('加入购物车', e)
    // var params = 
    var { brand, id, name, specs, quantity } = e.currentTarget.dataset.item
    // console.log(brand, id, name, specs, quantity)
    const customerId = this.data.customers[0].pkCustomer
    var params = {
      pkAdmin: customerId,
      pkProduct: id,
      productBrand: brand || '',
      productName: name,
      quantity: quantity,
      sp1: specs
    }
    console.log(params)
    addCart(params).then(res => {
      console.log(res)
      dd.showToast({
        type: 'success',
        content: '添加购物车成功',
        duration: 3000,
      })
      this._getCartList()
    })
  },
  _getCartList() {
    const customerId = this.data.customers[0].pkCustomer
    getCartList(customerId).then(res => {
      console.log(res)
      this.setData({
        totalProductCate: res.data.total,
      })
    })
  },
});
