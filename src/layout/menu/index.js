import React, { Component, Fragment } from 'react'
import { Layout } from 'antd'
import { withRouter } from 'react-router-dom'
import routes from '@/router/config.js'
import SiderMenu from './siderMenu'
import { sSetObject, sGetObject } from '@/utils'

const { Sider } = Layout
const logo = {
  height: '32px',
  background: 'rgba(255, 255, 255, 0.2)',
  margin: '16px',
  color: '#fff',
  textAlign: 'center',
  lineHeight: '32px'
}
class MenuCustom extends Component {
  // constructor(props) {
  //   super(props)
  // }
  // 初始化 state
  state = {
    theme: 'dark',
    openKeys: []
  }
  isMainMenu = key => {
    return routes.menus.some(
      item => key && (item.key === key)
    )
  }
  // 点击收缩菜单
  onOpenChange = openKeys => {
    // const { collapsed } = this.props
    // if (!collapsed) {
    //   // find() 方法返回通过测试（函数内判断）的数组的第一个元素的值
    //   const latestOpenKey = openKeys.find(
    //     key => this.state.openKeys.indexOf(key) === -1
    //   )
    //   sSetObject('menu', latestOpenKey)
    //   this.setState({
    //     openKeys: latestOpenKey ? [latestOpenKey] : []
    //   })
    // }
    const lastOpenKey = openKeys[openKeys.length - 1]
    const moreThanOne =
      openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1
    this.setState({
      openKeys: moreThanOne ? [lastOpenKey] : [...openKeys]
    })
  }
  componentDidMount() {
    this.setState({
      openKeys: sGetObject('menu')
    })
  }
  // 点击菜单调整
  handleClick = openKeys => {
    const paths = openKeys.keyPath;
    let latestOpenKey = [];
    if (paths.length > 2 && openKeys.key === paths[0]) {
      latestOpenKey=paths.splice(1);
    }else{
      latestOpenKey.push(paths[paths.length - 1])
    }
    this.setState({
      openKeys: latestOpenKey ? latestOpenKey : []
    })
    sSetObject('menu', this.state.openKeys)
  }
  render() {
    const { theme, openKeys } = this.state
    const { collapsed, heights, location } = this.props
    const defaultProps = this.props.collapsed ? {} : { openKeys }

    return (
      <Fragment>
        <Sider
          width="240px"
          className="sider-view"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo" style={logo}>
            LOGO
          </div>
          <div style={{ height: heights - 64 + 'px', overflowY: 'auto' }}>
            <SiderMenu
              menus={routes.menus}
              onClick={this.handleClick}
              theme={theme}
              mode="inline"
              onOpenChange={this.onOpenChange}
              selectedKeys={[location.pathname]}
              {...defaultProps}
            />
          </div>
        </Sider>
      </Fragment>
    )
  }
}

export default withRouter(MenuCustom)
