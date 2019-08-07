/**
 * 菜单栏 路由配置文件
 */
import React, { Component } from 'react'
import { Route, Redirect, Switch,withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { Message } from 'antd';
import queryString from 'query-string'
import AllPages from '../pages'
import routesConfig from './config'
import { sGetObject } from '@/utils/index.js'
import getPageTitle from '@/utils/get-title.js'
import { actionCreator } from '@/store/common'

// 根据状态 写路由拦截逻辑
class CRouter extends Component {
  // 校验访问权限
  requireAuth = (r, com) => {
    // isLogin 是否登录标识 根据项目做修改
    let isLogin = sGetObject('isLogin')
    if (r.requireAuth && !isLogin) {
      // Message.warning('暂无访问权限，请登录后再访问！', 1)
      // .then(() =>{
      //   console.log(1)
      return <Redirect to="/login" />
      // });
    }
    return com
  }
  // 设置网页title
  setTitle(val) {
    document.title = getPageTitle(val || '')
  }
  render() {
    const { changePath } = this.props
    return (
      <Switch>
        {Object.keys(routesConfig).map(key =>
          routesConfig[key].map(r => {
            const route = r => {
              const Component = AllPages[r.component]
              return (
                <Route
                  key={r.route || r.key}
                  // exact  是否全路径匹配
                  path={r.route || r.key}
                  className="animated fadeIn"
                  // component={Component}
                  // 路由拦截校验
                  render={props => {
                    const reg = /\?\S*/g
                    // 控制是否显示 面包屑
                    if (r.meta.path) {
                      changePath(r.meta.path)
                    }else{
                      changePath([])
                    }
                    // 匹配?及其以后字符串
                    const queryParams = window.location.hash.match(reg)
                    // 去除?的参数
                    const { params } = props.match
                    Object.keys(params).forEach(key => {
                      params[key] = params[key] && params[key].replace(reg, '')
                    })
                    props.match.params = { ...params }
                    const merge = {
                      ...props,
                      query: queryParams
                        ? queryString.parse(queryParams[0])
                        : {}
                    }
                    // 重新包装组件 相关路由字段 通过props 传递进去 否则使用route 相关会报错
                    const wrappedComponent = <Component {...merge} />
                    this.setTitle(r.title)
                    return this.requireAuth(r.meta, wrappedComponent)
                  }}
                />
              )
            }
            return r.component ? route(r) : r.subs.map(r => route(r))
          })
        )}
        <Route
          render={() => {
            this.setTitle('404')
            return <Redirect to="/404" />
          }}
        />
      </Switch>
    )
  }
}
const mapDispatch = dispatch => ({
  changePath(r) {
    const action = actionCreator.changePath(r)
    dispatch(action)
  }
})
export default connect(
  null,
  mapDispatch
)(withRouter(CRouter))
