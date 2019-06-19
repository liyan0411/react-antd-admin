export default {
  menus: [
    // 菜单相关路由
    {
      key: '/app/home',
      title: '首页',
      icon: 'home',
      component: 'Home'
    },
    {
      key: '/app/userManage',
      title: '用户管理',
      icon: 'user',
      component: 'UserManage'
    },
    {
      key: '/app/auth',
      title: '权限管理',
      icon: 'rocket',
      subs: [
        {
          key: '/app/role',
          title: '角色管理',
          component: 'Role'
        },
        {
          key: '/app/menumanage',
          title: '菜单管理',
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
      component: 'RoleDetail'
    }
  ]
}