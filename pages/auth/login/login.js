import {
  login
} from '/service/login.js'

Page({
  data: {
    username: '',
    password: '',
    code: '',
    loginErrorCount: 0
  },
  onLoad() { },
  // 登录
  startLogin() {
    if (this.data.password.length < 1 || this.data.username.length < 1) {
      dd.showToast({
        type: 'fail',
        content: '请输入用户名和密码',
      });
      return false;
    }
    var bange = this.data.username
    var password = this.data.password
    this._login(bange, password)
  },
  bindUsernameInput(e) {
    this.setData({
      username: e.detail.value
    });
  },
  bindPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },

  // 清除输入
  clearInput(e) {
    switch (e.currentTarget.id) {
      case 'clear-username':
        this.setData({
          username: ''
        });
        break;
      case 'clear-password':
        this.setData({
          password: ''
        });
        break;
      case 'clear-code':
        this.setData({
          code: ''
        });
        break;
    }
  },
  _login(bange, password) {
    login(bange, password)
      .then(res => {
        if (res.code == 200) {
          this.setData({
            'loginErrorCount': 0
          });
          dd.setStorage({
            key: "Authorization",
            data: res.data.tokenHead + res.data.token,
            success: () => {
              dd.switchTab({
                url: '/pages/home/home'
              })
            }
          })
        } else {
          dd.showToast({
            type: 'fail',
            content: res.message,
          })
        }
      })
      .catch(err => {
        console.log("连接失败！")
        dd.showToast({
          type: 'fail',
          content: "网络连接失败，请重试！",
        })
      })
  }
});
