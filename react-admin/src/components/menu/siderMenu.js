import React from "react";
import { Menu, Icon } from 'antd'
import {Link} from "react-router-dom";

	// 一级菜单渲染方法 直接跳转
const renderMenuItem = item => (
  <Menu.Item key={item.key}>
    <Link to={(item.route || item.key) + (item.query || '')} replace>
      {/* replace  去除连续点击同一个 警告 */}
      {item.icon && <Icon type={item.icon} />}
      <span className="nav-text">{item.title}</span>
    </Link>
  </Menu.Item>
)

// 二级菜单渲染方法
const renderSubMenu = item => (
  <Menu.SubMenu
    key={item.key}
    title={
      <span>
        {item.icon && <Icon type={item.icon} />}
        <span className="nav-text">{item.title}</span>
      </span>
    }
  >
    {item.subs.map(item => renderMenuItem(item))}
  </Menu.SubMenu>
)

export default ({menus,...props})=>(
	// 根据是否有子菜单 调用不同方法渲染
	<Menu {...props}>
		{menus && menus.map(item=>
			item.subs?renderSubMenu(item):renderMenuItem(item)
		)}
	</Menu>
)
