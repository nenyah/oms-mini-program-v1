/*
 * @Description: 
 * @Author: Steven
 * @Date: 2019-10-30 09:55:15
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-30 09:57:21
 */
import request from './network.js'
import {
    OrderDetail
} from '/config/api.js'

// 获取产品
export function getOrderDetail(params) {
    let res = dd.getStorageSync({ key: "Authorization" })
    return request({
        url: `${OrderDetail}${params}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": res.data,
        },

    })
}
