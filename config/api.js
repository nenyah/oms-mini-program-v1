const ApiRootUrl = 'http://192.168.0.174:8080/api/';

module.exports = {

  AuthLogin: ApiRootUrl + 'auth/login', //登录
  AuthLogout: ApiRootUrl + 'auth/logout', //登出
  
  Adminuserpermission: ApiRootUrl + 'admin/user/permission', //获取用户信息和授权

};