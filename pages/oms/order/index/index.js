Page({
  data: {
    pageName: 'component/index',
    pageInfo: {
      pageId: 0,
    },
    hidden: true,
    curIndex: 0,
    arr: {
      onItemTap: 'onGridItemTap',
      list: [
        {
          "id": "17",
          "pid": "16",
          "description": "订单列表",
          "component": "/oms/order/orderList",
          "path": "/oms/order/orderList",
          "meta": {
            "title": "订单列表",
            "icon": "order"
          },
          "type": "1",
          "sort": 1,
          "name": "订单列表",
          "hidden": false,
          "children": null
        },
        {
          "id": "18",
          "pid": "16",
          "description": "选购商品",
          "component": "/oms/order/chooseProduct",
          "path": "/oms/order/chooseProduct",
          "meta": {
            "title": "选购商品",
            "icon": "chooseProduce"
          },
          "type": "1",
          "sort": 0,
          "name": "选购商品",
          "hidden": false,
          "children": null
        },
        {
          "id": "19",
          "pid": "16",
          "description": "购物车",
          "component": "/oms/order/shopcar",
          "path": "/oms/order/shopcar",
          "meta": {
            "title": "购物车",
            "icon": "shopCar"
          },
          "type": "1",
          "sort": 0,
          "name": "购物车",
          "hidden": true,
          "children": null
        },
        {
          "id": "20",
          "pid": "16",
          "description": "订单详情",
          "component": "/oms/order/orderDetail",
          "path": "/oms/order/orderDetail",
          "meta": {
            "title": "订单详情",
            "icon": "orderDetail"
          },
          "type": "1",
          "sort": 0,
          "name": "订单详情",
          "hidden": true,
          "children": null
        },
        {
          "id": "21",
          "pid": "16",
          "description": "创建订单",
          "component": "/oms/order/createOrder",
          "path": "/oms/order/createOrder",
          "meta": {
            "title": "创建订单",
            "icon": "createOrder"
          },
          "type": "1",
          "sort": 0,
          "name": "创建订单",
          "hidden": true,
          "children": null
        },
        {
          "id": "22",
          "pid": "16",
          "description": "订单修改",
          "component": "/oms/order/orderUpdate",
          "path": "/oms/order/orderUpdate",
          "meta": {
            "title": "订单修改",
            "icon": "modifyOrder"
          },
          "type": "1",
          "sort": 0,
          "name": "订单修改",
          "hidden": true,
          "children": null
        }
      ]

    }
  },
  onLoad() { },
});
