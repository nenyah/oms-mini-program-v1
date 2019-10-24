import request from './network.js'
import { Adminuserpermission } from '/config/api.js'

export function getData() {
  let res = dd.getStorageSync({ key: "Authorization" })
  return request({
    url: Adminuserpermission,
    headers: {
      "Content-Type": "application/json",
      "Authorization": res.data,
    },
  })
} 