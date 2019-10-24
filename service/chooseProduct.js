import request from './network.js'
import {
  ProductList,
  ProductCateList,
  ProductBrandList
} from '/config/api.js'

export function getProduct(params) {
  let res = dd.getStorageSync({ key: "Authorization" });
  return request({
    url: ProductList,
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
    data:JSON.stringify(params)
  })
}
// 获取产品分类
export function getProductCate() {
  let res = dd.getStorageSync({ key: "Authorization" });
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
  let res = dd.getStorageSync({ key: "Authorization" });
  return request({
    url: ProductBrandList,
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
  })
} 