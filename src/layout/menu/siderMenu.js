/* eslint-disable react/no-multi-comp */
import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

// /**
//  * 递归循环 实现多级菜单
//  */
// const submenusChild = item => {
//   let cHtml ;
//   let childArr = item.children
//   // 递归条件
//   if (typeof childArr != 'undefined' && childArr.length > 0) {
//     cHtml = childArr.map((item) => {
//       return submenusChild(item)
//     })
//     return (
//       <Menu.SubMenu
//         key={item.key}
//         title={
//           <span>
//             {item.icon && <Icon type={item.icon} />}
//             <span className="nav-text">{item.title}</span>
//           </span>
//         }
//       >
//         {cHtml}
//       </Menu.SubMenu>
//     )
//   } else {
//     return (
//       <Menu.Item key={item.key}>
//         <Link to={(item.key) + (item.query || '')} replace>
//           {/* replace  去除连续点击同一个 警告 */}
//           {item.icon && <Icon type={item.icon} />}
//           <span className="nav-text">{item.title}</span>
//         </Link>
//       </Menu.Item>
//     )
//   }
// }
// export default ({ menus, ...props }) => (
//   // 根据是否有子菜单 调用不同方法渲染
//   <Menu {...props}>{menus && menus.map(item => submenusChild(item))}</Menu>
// )

// item.route 菜单单独跳转的路由
const renderMenuItem = item => (
  <Menu.Item key={item.key}>
    <Link to={( item.key) + (item.query || '')}>
      {item.icon && <Icon type={item.icon} />}
      <span className="nav-text">{item.title}</span>
    </Link>
  </Menu.Item>
)

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
    {item.children.map(item => renderMenuItem(item))}
  </Menu.SubMenu>
)

export default ({ menus, ...props }) => (
  <Menu {...props}>
    {menus &&
      menus.map(item =>
        item.children ? renderSubMenu(item) : renderMenuItem(item)
      )}
  </Menu>
)
