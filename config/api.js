const ApiRootUrl = 'http://www2.huadongbio.com:8093/api/'

module.exports = {

  AuthLogin: ApiRootUrl + 'auth/login', //登录
  AuthLogout: ApiRootUrl + 'auth/logout', //登出

  Adminuserpermission: ApiRootUrl + 'admin/user/permission', //获取用户信息和授权
  Userinfo: ApiRootUrl + 'admin/info', //获取用户信息和授权

  OrderList: ApiRootUrl + 'order/list', // 分页获取订单列表

  ProductList: ApiRootUrl + 'product/list', // 分页获取商品列表
  ProductCateList: ApiRootUrl + 'product/category/list', // 获取分类列表
  ProductBrandList: ApiRootUrl + 'product/brand/list', // 获取品牌列表
  ProductCustomerList: ApiRootUrl + 'product/customer/list', // 获取客户列表

  CartAdd: ApiRootUrl + 'cart/add', // 加入购物车
  CartList: ApiRootUrl + 'cart/list', // 获取购物车列表
  CartDelete: ApiRootUrl + 'cart/delete', // 删除购物车中商品
  CartUpdate: ApiRootUrl + 'cart/update/quantity', //更新购物车中某个商品数量

  timeout: 5000, // 超时

};