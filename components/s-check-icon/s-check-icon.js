/*
 * @Description: 
 * @Author: Steven
 * @Date: 2019-10-28 10:18:22
 * @LastEditors: Steven
 * @LastEditTime: 2019-10-28 10:19:46
 */
// components/w-check-icon/w-check-icon.js
Component({
  props: {
    isChecked: false,
    oncheck: (data) => console.log(data)
  },
  data: {
  },
  externalClasses: ["icon"],
  methods: {
    CheckClick(e) {
      console.log(e)
      // 1.查找到对应的商品
      const goods = app.globalData.cartList.find(item => item.iid == this.properties.goods.iid)
      // goods.checked = !goods.checked

      // 2.获取当前商品的index
      const index = e.currentTarget.dataset.index;
      this.props.oncheck(index)
      // 3.回调
      // console.log(index)
      // app.changeGoodsState(index, goods)
    }
  }
})
