import lifecycle from '/utils/lifecycle';
import animModal from '/utils/items';

Page({
  ...lifecycle,
  ...animModal.animOp,
  data: {
    ...animModal.data,
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
          subs: [
            {
              title: '基础视图',
              entitle: 'View',
              page: 'view',
            },
            {
              title: '滚动视图',
              entitle: 'ScrollView',
              page: 'scroll-view',
            },
            {
              title: '滑动视图',
              entitle: 'Swiper',
              page: 'swiper',
            },
          ],
        }
      ]
    }
  },

  onLoad() { },
});
