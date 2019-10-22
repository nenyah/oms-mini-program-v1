App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  globalData: {
    hasLogin: false,
    permissionData: [
      {
        "id": "2",
        "pid": "0",
        "description": "系统管理",
        "component": "Layout",
        "path": "/oms",
        "meta": {
          "title": "系统管理",
          "icon": "sysconfig"
        },
        "type": "0",
        "sort": 0,
        "name": "系统管理",
        "hidden": false,
        "children": [
          {
            "id": "3",
            "pid": "2",
            "description": "用户列表",
            "component": "/ums/user/index",
            "path": "/ums/user/index",
            "meta": {
              "title": "用户列表",
              "icon": "user"
            },
            "type": "1",
            "sort": 0,
            "name": "用户列表",
            "hidden": false,
            "children": [
              {
                "id": "12",
                "pid": "3",
                "description": "创建用户",
                "component": null,
                "path": "/oms",
                "meta": {
                  "title": "创建用户",
                  "icon": null
                },
                "type": "2",
                "sort": 0,
                "name": "创建用户",
                "hidden": false,
                "children": null
              },
              {
                "id": "13",
                "pid": "3",
                "description": "禁用用户",
                "component": null,
                "path": "/oms",
                "meta": {
                  "title": "禁用",
                  "icon": null
                },
                "type": "2",
                "sort": 0,
                "name": "禁用",
                "hidden": false,
                "children": null
              },
              {
                "id": "14",
                "pid": "3",
                "description": "启用用户",
                "component": null,
                "path": "/oms",
                "meta": {
                  "title": "启用",
                  "icon": null
                },
                "type": "2",
                "sort": 0,
                "name": "启用",
                "hidden": false,
                "children": null
              },
              {
                "id": "4",
                "pid": "3",
                "description": "角色分配",
                "component": null,
                "path": "/oms",
                "meta": {
                  "title": "角色分配",
                  "icon": null
                },
                "type": "2",
                "sort": 0,
                "name": "角色分配",
                "hidden": false,
                "children": null
              },
              {
                "id": "5",
                "pid": "3",
                "description": "权限分配",
                "component": null,
                "path": "/oms",
                "meta": {
                  "title": "权限分配",
                  "icon": null
                },
                "type": "2",
                "sort": 0,
                "name": "权限分配",
                "hidden": false,
                "children": null
              }
            ]
          },
          {
            "id": "6",
            "pid": "2",
            "description": "角色列表",
            "component": "/ums/role/index",
            "path": "/ums/role/index",
            "meta": {
              "title": "角色列表",
              "icon": "role"
            },
            "type": "1",
            "sort": 0,
            "name": "角色列表",
            "hidden": false,
            "children": [
              {
                "id": "15",
                "pid": "6",
                "description": "删除角色",
                "component": null,
                "path": "/oms",
                "meta": {
                  "title": "删除角色",
                  "icon": null
                },
                "type": "2",
                "sort": 0,
                "name": "删除角色",
                "hidden": false,
                "children": null
              },
              {
                "id": "7",
                "pid": "6",
                "description": "新增角色",
                "component": null,
                "path": "/oms",
                "meta": {
                  "title": "新增角色",
                  "icon": null
                },
                "type": "2",
                "sort": 0,
                "name": "新增角色",
                "hidden": false,
                "children": null
              },
              {
                "id": "8",
                "pid": "6",
                "description": "编辑角色",
                "component": null,
                "path": "/oms",
                "meta": {
                  "title": "编辑角色",
                  "icon": null
                },
                "type": "2",
                "sort": 0,
                "name": "编辑角色",
                "hidden": false,
                "children": null
              }
            ]
          },
          {
            "id": "9",
            "pid": "2",
            "description": "功能列表",
            "component": "/ums/permission/index",
            "path": "/ums/permission/index",
            "meta": {
              "title": "功能列表",
              "icon": "function"
            },
            "type": "1",
            "sort": 0,
            "name": "功能列表",
            "hidden": false,
            "children": [
              {
                "id": "10",
                "pid": "9",
                "description": "新增功能",
                "component": null,
                "path": "/oms",
                "meta": {
                  "title": "新增功能",
                  "icon": null
                },
                "type": "2",
                "sort": 0,
                "name": "新增功能",
                "hidden": false,
                "children": null
              },
              {
                "id": "11",
                "pid": "9",
                "description": "编辑功能",
                "component": null,
                "path": "/oms",
                "meta": {
                  "title": "编辑功能",
                  "icon": null
                },
                "type": "2",
                "sort": 0,
                "name": "编辑功能",
                "hidden": false,
                "children": null
              }
            ]
          },
          {
            "id": "HD1568006500468ATAPR",
            "pid": "2",
            "description": "定时任务",
            "component": "/sys/timetask/index",
            "path": "/sys/timetask/index",
            "meta": {
              "title": "定时任务",
              "icon": "time"
            },
            "type": "1",
            "sort": 0,
            "name": "定时任务",
            "hidden": false,
            "children": [
              {
                "id": "HD1568006500469ATAPR",
                "pid": "HD1568006500468ATAPR",
                "description": "定时任务操作",
                "component": null,
                "path": "/oms",
                "meta": {
                  "title": "定时任务操作",
                  "icon": null
                },
                "type": "2",
                "sort": 0,
                "name": "定时任务操作",
                "hidden": false,
                "children": null
              }
            ]
          }
        ]
      },
      {
        "id": "16",
        "pid": "0",
        "description": "订单管理",
        "component": "Layout",
        "path": "/oms/order",
        "meta": {
          "title": "订单管理",
          "icon": "oms"
        },
        "type": "0",
        "sort": 1,
        "name": "订单管理",
        "hidden": false,
        "children": [
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
      },
      {
        "id": "HD1567402342599FQNBR",
        "pid": "0",
        "description": "流向管理",
        "component": "Layout",
        "path": "/fms",
        "meta": {
          "title": "流向管理",
          "icon": "fms"
        },
        "type": "0",
        "sort": 3,
        "name": "流向管理",
        "hidden": false,
        "children": [
          {
            "id": "HD1567402423982PQKUB",
            "pid": "HD1567402342599FQNBR",
            "description": "流向查看",
            "component": "/fms/flow/index",
            "path": "/fms/flow/index",
            "meta": {
              "title": "流向查看",
              "icon": "fll"
            },
            "type": "1",
            "sort": 1,
            "name": "流向查看",
            "hidden": false,
            "children": null
          },
          {
            "id": "HD1571710364403TAMKW",
            "pid": "HD1567402342599FQNBR",
            "description": "流向库存",
            "component": "/fms/stock/index",
            "path": "/fms/stock/index",
            "meta": {
              "title": "流向库存",
              "icon": "f-stock"
            },
            "type": "1",
            "sort": 2,
            "name": "流向库存",
            "hidden": false,
            "children": null
          }
        ]
      },
      {
        "id": "HD1567476256526WTGZF",
        "pid": "0",
        "description": "公告管理",
        "component": "Layout",
        "path": "/nms",
        "meta": {
          "title": "公告管理",
          "icon": "nms"
        },
        "type": "0",
        "sort": 4,
        "name": "公告管理",
        "hidden": false,
        "children": [
          {
            "id": "HD1567476435952FDJYQ",
            "pid": "HD1567476256526WTGZF",
            "description": "公告发布",
            "component": "/nms/notice/editNotice",
            "path": "/nms/notice/editNotice",
            "meta": {
              "title": "公告发布",
              "icon": "notice_edit"
            },
            "type": "1",
            "sort": 1,
            "name": "公告发布",
            "hidden": false,
            "children": null
          },
          {
            "id": "HD1567476471636IRWZJ",
            "pid": "HD1567476256526WTGZF",
            "description": "公告列表",
            "component": "/nms/notice/index",
            "path": "/nms/notice/index",
            "meta": {
              "title": "公告列表",
              "icon": "notice_list"
            },
            "type": "1",
            "sort": 2,
            "name": "公告列表",
            "hidden": false,
            "children": null
          }
        ]
      }
    ]
  },
});
