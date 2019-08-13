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
      key: '/root/userManage',
      title: '用户管理',
      icon: 'user',
      meta: {
        // requireAuth: true,
        path: ['用户管理']
      },
      component: 'UserManage'
    },
    {
      key: '/root/cssanimate',
      title: '动画',
      icon: 'radar-chart',
      meta: {
        path: ['动画']
        // requireAuth: true
      },
      component: 'CSSAnimate'
    },
    {
      key: '/root/auth',
      title: '权限管理',
      icon: 'rocket',
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
      key: '/root/auth1',
      title: '权限管理1',
      icon: 'rocket',
      children: [
        {
          key: '/root/role1',
          title: '角色管理',
          meta: {},
          component: 'Role'
        },
        {
          key: '/root/menumanage1',
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
      key: '/root/roleDetail',
      title: '详情页',
      meta: {},
      component: 'RoleDetail'
    }
  ]
}
