import lifecycle from '/utils/lifecycle';

Page({
  ...lifecycle,

  data: {

    pageName: 'component/index',
    pageInfo: {
      pageId: 0,
    },
    hidden: true,
    curIndex: 0,
    arr: {
      onItemTap: 'onGridItemTap',
      onChildItemTap: 'onChildItemTap',
      list: [
        {
          icon: '/image/view.png',
          title: '视图容器',
          entitle: 'View',
      
        }
      ]
    }
  },

  onLoad() { },
});
