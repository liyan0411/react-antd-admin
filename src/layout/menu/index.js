import React,{Component,Fragment} from "react";
import { Layout } from 'antd';
import{ withRouter } from 'react-router-dom';
import routes from "@/router/config.js";
import SiderMenu from "./siderMenu";
import { sSetObject, sGetObject } from '@/utils'

const { Sider} = Layout;
const logo = {
  height: '32px',
  background: 'rgba(255, 255, 255, 0.2)',
  margin: '16px',
  color: '#fff',
  textAlign: 'center',
  lineHeight:'32px'
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

  onOpenChange = openKeys => {
    // find() 方法返回通过测试（函数内判断）的数组的第一个元素的值
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    sSetObject('menu', latestOpenKey)
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : []
    })
  }
  componentDidMount() {

    this.setState({
      openKeys: [sGetObject('menu')]
    })
    // console.log(routes.menus)
  }
  render() {
    const { theme, openKeys } = this.state
    const { collapsed, heights, location } = this.props
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
              openKeys={openKeys}
              theme={theme}
              mode="inline"
              onOpenChange={this.onOpenChange}
              selectedKeys={[location.pathname]}
            />
          </div>
        </Sider>
      </Fragment>
    )
  }
}

export default withRouter(MenuCustom)
