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

// function request(options) {
//   dd.showLoading({
//     title: '数据加载中ing',
//   })

//   return new Promise((resolve, reject) => {
//     dd.httpRequest({
//       url: options.url,
//       timeout: timeout,
//       method: options.method || 'GET',
//       data: options.data || {},
//       headers: options.headers,
//       success: (res) => {
//         console.log("network success")
//         console.log(res)
//         if (res.status == 200) {
//           if (res.code == 401) {
//             // 检查是否登录,没有登录跳转到登录页
//             // dd.navigateTo({
//             //   url: 'pages/auth/login/login'
//             // })
//           }
//           else {
//             resolve(res.data)
//           }

//         }

//       },
//       fail: function(err) {
//         reject(err)
//       },
//       complete: res => {
//         dd.hideLoading()
//       }
//     })
//   })
// }
