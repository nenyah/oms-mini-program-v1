import {
  timeout
} from '/config/api.js'

function request(options) {
  dd.showLoading({
    title: '数据加载中ing',
  })

  return new Promise((resolve, reject) => {
    dd.httpRequest({
      url: options.url,
      timeout: timeout,
      method: options.method || 'GET',
      data: options.data || {},
      headers: options.headers,
      success: function(res) {
        resolve(res.data)
      },
      fail: function(err) {
        reject(err)
      },
      complete: res => {
        dd.hideLoading()
      }
    })
  })
}

export default request;