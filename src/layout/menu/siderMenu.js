import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

/**
 * 递归循环 实现多级菜单
 */
const submenusChild = item => {
  let cHtml = <div />
  let childArr = item.subs
  // 递归条件
  if (!childArr && childArr.length > 0) {
    cHtml = childArr.map((item, i) => {
      return submenusChild(item)
    })
    return (
      <Menu.SubMenu
        key={item.key}
        title={
          <span>
            {item.icon && <Icon type={item.icon} />}
            <span className="nav-text">{item.title}</span>
          </span>
        }
      >
        {cHtml}
      </Menu.SubMenu>
    )
  } else {
    return (
      <Menu.Item key={item.key}>
        <Link to={(item.route || item.key) + (item.query || '')} replace>
          {/* replace  去除连续点击同一个 警告 */}
          {item.icon && <Icon type={item.icon} />}
          <span className="nav-text">{item.title}</span>
        </Link>
      </Menu.Item>
    )
  }
}
// eslint-disable-next-line react/no-multi-comp
export default ({ menus, ...props }) => (
  // 根据是否有子菜单 调用不同方法渲染
  <Menu {...props}>{menus && menus.map(item => submenusChild(item))}</Menu>
)
