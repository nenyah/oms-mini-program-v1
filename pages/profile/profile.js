import { getUserinfo } from '/service/profile.js'
Page({
  data: {
   user: {
        "id": "1",
        "username": "系统管理员",
        "password": "$2a$10$VNUQqWDttmgGDVezt/muVep/3ghTdNNbEQrjhEs76rk9G5QsKbEEG",
        "nickName": "系统管理员",
        "userType": "0",
        "email": null,
        "createTime": "2018-09-29 13:55:30",
        "loginTime": "2018-09-29 13:55:39",
        "status": "1",
        "modifier": null,
        "modifieTime": null,
        "pkOrg": null,
        "pkGroup": null,
        "icon": "http://www.huadongbio.com/Public/Home/images/inedx_tb2.png",
        "bange": "admin",
        "pkCustomer": null,
        "phone": null,
        "firstLogin": "0",
        "roleName": null
      }
  },
  onLoad() {
    this._getUserinfo()
  },
  _getUserinfo(){
    getUserinfo().then(res=>{
      console.log(res)
      this.setData({
        user:res.data.user
      })
    })
  }
});
