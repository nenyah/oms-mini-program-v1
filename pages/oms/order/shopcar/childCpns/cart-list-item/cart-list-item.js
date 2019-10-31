/*
 * @Description: 
 * @Author: Steven
 * @Date: 2019-10-28 10:28:31
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-28 10:39:57
 */

const app = getApp()

Component({
  props: {
    goods: {
      type: Object,
      value: {}
    },
    index: {
      type: Number
    },
    onCheck: (data) => console.log(data),
    onUpdateNum:(data)=>console.log(data)
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
    checkClick(e) {
      console.log(e)
      // 1.查找到对应的商品
      const goods = app.globalData.cartList.find(item => item.iid == this.properties.goods.iid)
      // goods.checked = !goods.checked

      // 2.获取当前商品的index
      const index = e.currentTarget.dataset.index;
      this.props.onCheck(index)
      // 3.回调
      // console.log(index)
      // app.changeGoodsState(index, goods)
    },
    updateNum(e) {
      // console.log(e)
      const data = e.currentTarget.dataset
      this.props.onUpdateNum(data)
    },
  }
})
