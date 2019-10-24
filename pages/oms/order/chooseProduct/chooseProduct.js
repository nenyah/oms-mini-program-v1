import {
  getProductCate,
  getProductBrand,
  getProduct
} from '/service/chooseProduct.js'
Page({

  data: {
    goods: {
      page: 1,
      list: [{
        "brand": "超人牌",
        "category": "医药",
        "code": "BA00001",
        "genericName": "人血蛋白",
        "id": "0",
        "name": "人血蛋白",
        "quantity": 9,
        "specs": "10g",
        "typeName": "string",
        "unit": "盒",
        "vapprovalNumber": "SS002135",
        "vmanuFacturer": "中药集团",
        "vorigin": "济南"
      }]
    },
    productCate: [],
  },
  onLoad() {
    this._getProductCate()
    this._getProduct({
      "pageNum": 0,
      "pageSize": 0,
      "pkAdmin": "string",
      "pkCustomer": "string",
      "productBrand": "string",
      "productClass": "string",
      "productName": "string",
      "productSpecs": "string"
    })
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
  _getProduct(params) {
    getProduct(params).then(res => {
      console.log(res)
    })
  }
});
