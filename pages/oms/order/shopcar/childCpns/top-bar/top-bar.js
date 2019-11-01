Component({
  mixins: [],
  data: {},
  props: {
    isEdit: false,
    onClear: data => console.log(data),
    onEditFun: data => console.log(data),
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    clear(e) {
      console.log(e)
      this.props.onClear(e)
    },
    editFun(e) {
      console.log(e)
      this.props.onEditFun(e)
    },
  },
});
