Component({
  mixins: [],
  data: {
    counter: 0
  },
  props: {
// 外界方法接口，写不写都没关系，只要组件内部方法有把数据传出，可以写默认方法，外界不用传入。
// 
    onCounterPlusOne: (data) => console.log(data), 
    // onNewAdd:()=>{
    //   console.log("is it ture!")
    // },
    extra: 'default extra',
    myname:'defalt myname',
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    plusOne(e) {
      console.log(e)
      const counter = this.data.counter + 1
      // 1. 为了渲染
      this.setData({
        counter
      })
      // 2. 传递数据给外界
      this.props.onCounterPlusOne(counter)
    },
  },
});
