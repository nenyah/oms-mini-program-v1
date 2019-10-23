import request from './network.js'
import { Adminuserpermission } from '/config/api.js'

export function getData(options) {
  return request({
    url: Adminuserpermission,
    headers: {
      "Content-Type": "application/json",
      "Authorization": options.authorization,
    },
  })
} 