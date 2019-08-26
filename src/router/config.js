export default {
  menus: [
    // 菜单相关路由
    {
      key: '/root/home',
      title: '首页',
      icon: 'home',
      meta: {}, //校验相关字段
      component: 'Home'
    },
    {
      key: '/root/table',
      title: '表格',
      icon: 'user',
      meta: {
        // requireAuth: true,
        path: ['表格']
      },
      component: 'Tables'
    },
    {
      key: '/root/cssanimate',
      title: '动画',
      icon: 'radar-chart',
      meta: {
        // requireAuth: true,
        path: ['动画']
      },
      component: 'CSSAnimate'
    },
    {
      key: '/root/auth',
      title: '权限管理',
      icon: 'database',
      children: [
        {
          key: '/root/role',
          title: '角色管理',
          meta: {},
          component: 'Role'
        },
        {
          key: '/root/menumanage',
          title: '菜单管理',
          meta: {},
          component: 'MenuManage'
        }
      ]
    },
    {
      key: '/root/ui',
      title: 'UI',
      icon: 'project',
      children: [
        {
          key: '/root/gallery',
          title: '画廊',
          meta: {},
          component: 'Gallery'
        }
      ]
    }
  ],
  // 非菜单相关路由
  others: [
    {
      key: '/root/roleDetail',
      title: '详情页',
      meta: {},
      component: 'RoleDetail'
    }
  ]
}
