/*
 * @Description: 
 * @Author: Steven
 * @Date: 2019-10-28 10:28:31
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-28 10:39:29
 */
// pages/cart/childCpns/bottom-bar/bottom-bar.js
Component({
  /**
   * 组件的属性列表
   */
  props: {
    total: 0,
    isEdit: false,
    counter:0,
    onSelectAll:(data)=>console.log(data),
    onOrder:(data)=>console.log(data),
    onDel:(data)=>console.log(data),
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectAll(e) {
      console.log(e)
      this.props.onSelectAll(e)
    },
    order(e) {
      console.log(e)
      this.props.onOrder(e)
    },
    del(e) {
      console.log(e)
      this.props.onDel(e)
    }

  }
})
