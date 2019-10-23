const ApiRootUrl = 'http://www2.huadongbio.com:8093/api/'

module.exports = {

  AuthLogin: ApiRootUrl + 'auth/login', //登录
  AuthLogout: ApiRootUrl + 'auth/logout', //登出

  Adminuserpermission: ApiRootUrl + 'admin/user/permission', //获取用户信息和授权
  Userinfo: ApiRootUrl + 'admin/info', //获取用户信息和授权

  OrderList: ApiRootUrl + 'order/list', // 分页获取订单列表



  timeout: 5000, // 超时

};