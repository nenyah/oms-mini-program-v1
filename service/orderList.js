import request from './network.js'
import { OrderList } from '/config/api.js'

export function getData(pageNum) {
  let res = dd.getStorageSync({ key: "Authorization" });
  return request({
    url: OrderList+'?pageNum='+pageNum+'&pageSize=10',
    headers: {
      "Content-Type": "application/json",
      "Authorization":res.data,
    },
  })
} 