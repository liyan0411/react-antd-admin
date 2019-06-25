export default {
  menus: [
    // 菜单相关路由
    {
      key: '/app/home',
      title: '首页',
      icon: 'home',
      meta: {}, //校验相关字段
      component: 'Home'
    },
    {
      key: '/app/userManage',
      title: '用户管理',
      icon: 'user',
      meta: {
        requireAuth: true
      },
      component: 'UserManage'
    },
    {
      key: '/app/cssanimate',
      title: '动画',
      icon: 'radar-chart',
      meta: {
        requireAuth: true
      },
      component: 'CSSAnimate'
    },
    {
      key: '/app/auth',
      title: '权限管理',
      icon: 'rocket',
      subs: [
        {
          key: '/app/role',
          title: '角色管理',
          meta: {},
          component: 'Role'
        },
        {
          key: '/app/menumanage',
          title: '菜单管理',
          meta: {},
          component: 'MenuManage'
        }
      ]
    }
  ],
  // 非菜单相关路由
  others: [
    {
      key: '/app/roleDetail',
      title: '详情页',
      meta: {},
      component: 'RoleDetail'
    }
  ]
}
