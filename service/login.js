import request from './network.js'
import { AuthLogin } from '/config/api.js'

export function login(bange, password) {
  return request({
    url: AuthLogin,
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({
      bange,
      password
    }),
  })
} 