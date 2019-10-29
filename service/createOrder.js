/*
 * @Description: 
 * @Author: Steven
 * @Date: 2019-10-28 15:40:19
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-29 14:24:54
 */
import request from './network.js'
import {
    BillType,
    Income,
    Dept,
    Currency,
    Transport,
    AddressList,
    OrderCreate

} from '/config/api.js'

// 1. 获取订单类型

export function getOrderCate() {
    let res = dd.getStorageSync({ key: "Authorization" })
    return request({
        url: BillType,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": res.data,
        },
    })
}

// 2. 获取收款协议
export function getBillType() {
    let res = dd.getStorageSync({ key: "Authorization" })
    return request({
        url: Income,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": res.data,
        },
    })
}
// 3. 获取开票客户==客户名称
// 4. 获取业务员
// 5. 获取部门
export function getDept() {
    let res = dd.getStorageSync({ key: "Authorization" })
    return request({
        url: Dept,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": res.data,
        },
    })
}
// 6. 获取币种
export function getCurrency() {
    let res = dd.getStorageSync({ key: "Authorization" })
    return request({
        url: Currency,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": res.data,
        },
    })
}
// 7. 获取运输方式
export function getTransport() {
    let res = dd.getStorageSync({ key: "Authorization" })
    return request({
        url: Transport,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": res.data,
        },
    })
}
// 9. 获取商品信息
// 10. 获取地址信息
export function getAdress(customerId) {
    let res = dd.getStorageSync({ key: "Authorization" })
    return request({
        url: `${AddressList}?customerId=${customerId}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": res.data,
        },
    })
}
// 生成订单
export function createOrder(data) {
    let res = dd.getStorageSync({ key: "Authorization" })
    return request({
        url: OrderCreate,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": res.data,
        },
        data: JSON.stringify(data)
    })
}
