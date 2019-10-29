
import request from './network.js'
import { Userinfo } from '/config/api.js'

export function getUserinfo() {
  let res = dd.getStorageSync({ key: "Authorization" })
  return request({
    url: Userinfo,
    headers: {
      "Content-Type": "application/json",
      "Authorization":res.data,
    },
  })
} 

