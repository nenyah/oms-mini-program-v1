/*
 * @Description: 
 * @Author: Steven
 * @Date: 2019-10-28 13:15:28
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-28 16:22:45
 */
import request from './network.js'
import {
  CartAdd,
  CartList,
  CartDelete,
  CartUpdate,
  CartClear
} from '/config/api.js'

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

// 购物车列表
export function getCartList(customerId, pks = '') {
  let res = dd.getStorageSync({ key: "Authorization" })
  return request({
    url: `${CartList}?pks=${pks}&customerId=${customerId}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
  })
}

// 删除购物车中商品
export function delItem(cartId) {
  let res = dd.getStorageSync({ key: "Authorization" })
  return request({
    url: `${CartDelete}?pks=${cartId}`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
  })
}

// 删除购物车中商品
export function updateItem(data) {
  let res = dd.getStorageSync({ key: "Authorization" })
  return request({
    url: CartUpdate,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
    data: JSON.stringify(data)
  })
} 

// 清空购物车
export function clearAll(customerId) {
  let res = dd.getStorageSync({ key: "Authorization" })
  return request({
    url: `${CartClear}?customerId=${customerId}`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
  })
} 