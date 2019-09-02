/**
 * 面包屑 导航
 * 可根据导航 层级设置
 * 传递参数  Array  当前页面 以及 上级页面 名称
 */
import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

class BreadcrumbCustom extends Component {
  render() {
    const { lists } = this.props
    return (
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={'/root/home'}>首页</Link>
        </Breadcrumb.Item>
        {lists.map(r => {
          return (
            (
              <Breadcrumb.Item key={r}>
                {r.key ? (
                  <Link to={r.key}>{r.title}</Link>
                ) : (
                  <span>{r.title}</span>
                )}
              </Breadcrumb.Item>
            ) || ''
          )
        })}
      </Breadcrumb>
    )
  }
}
export default BreadcrumbCustom
