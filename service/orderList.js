import request from './network.js'
import { OrderList } from '/config/api.js'

// export function getOrder(pageNum) {
//   let res = dd.getStorageSync({ key: "Authorization" });
//   return request({
//     url: OrderList+'?pageNum='+pageNum+'&pageSize=10',
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization":res.data,
//     },
//   })
// } 

export function getOrder(type, pageNum) {
  let res = dd.getStorageSync({ key: "Authorization" });
  return request({
    url: OrderList+'?fstatusflag='+type+'&pageNum='+pageNum+'&pageSize=10',
    headers: {
      "Content-Type": "application/json",
      "Authorization":res.data,
    },
  })
} 