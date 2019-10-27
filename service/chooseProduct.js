import request from './network.js'
import {
  ProductList,
  ProductCateList,
  ProductBrandList,
  ProductCustomerList,
  CartAdd,
  CartList
} from '/config/api.js'

// 获取产品
export function getProduct(params) {
  let data = {
    pageSize: 10,
  }
  Object.assign(data, params)
  let res = dd.getStorageSync({ key: "Authorization" })
  return request({
    url: ProductList,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
    data: JSON.stringify(data)
  })
}
// 获取产品分类
export function getProductCate() {
  let res = dd.getStorageSync({ key: "Authorization" })
  return request({
    url: ProductCateList,
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
  })
}
// 获取产品品牌
export function getProductBrand() {
  let res = dd.getStorageSync({ key: "Authorization" })
  return request({
    url: ProductBrandList,
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
  })
} 

// 获取客户ID
export function getProductCustomerList() {
  let res = dd.getStorageSync({ key: "Authorization" })
  return request({
    url: `${ProductCustomerList}?flag=true`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
  })
} 

// 添加购物车
export function addCart(params) {
  let res = dd.getStorageSync({ key: "Authorization" })
  return request({
    url: CartAdd,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
    data: JSON.stringify(params)
  })
} 

// 购物车
export function getCartList(customerId) {
  let res = dd.getStorageSync({ key: "Authorization" })
  return request({
    url: `${CartList}?pks=&customerId=${customerId}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
  })
} 