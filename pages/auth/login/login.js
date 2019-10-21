var api = require('../../../config/api.js');

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

    dd.httpRequest({
      url: api.AuthLogin,
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        bange: this.data.username,
        password: this.data.password
      }),
      success: (res) => {
        console.log(res)
        if (res.data.code == 200) {
          this.setData({
            'loginErrorCount': 0
          });
          dd.setStorage({
            key: "Authorization",
            data: res.data.data.tokenHead + res.data.data.token,
            success() {
              dd.switchTab({
                url: '/pages/home/home'
              })
            }
          })
        } else {
          dd.showToast({
            type: 'fail',
            content: res.data.message,
          })
        }
      },
      fail:(res)=>{
        console.log("连接失败！")
        dd.showToast({
            type: 'fail',
            content: "网络连接失败，请重试！",
          })
      }

    })
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
  }
});
