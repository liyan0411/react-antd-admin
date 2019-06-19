import React,{Component} from "react";
import { Icon, Layout, Menu } from 'antd'
const { Header } = Layout;
const { SubMenu } = Menu;
class HeaderCustom extends Component {
  state = {
    current: '',
    fullscreen: false
  }

  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }
  // 全屏 切换
  screenFull = () => {
    let fullscreen = this.state.fullscreen
    // 全屏事件
    let element = document.documentElement
    if (fullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen()
      }
    }
    this.setState({
      fullscreen: !this.state.fullscreen
    })
  }
  render() {
    const { toggle, collapsed } = this.props
    return (
      <Header
        style={{
          background: '#fff',
          padding: 0,
          boxShadow: '2px 2px 10px #ccc'
        }}
      >
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />

        <Menu
          className="pull-right header-menu"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="full" onClick={this.screenFull}>
            {this.state.fullscreen ? (
              <Icon type="shrink" />
            ) : (
              <Icon type="arrows-alt" />
            )}
          </Menu.Item>
          <Menu.Item key="mail">
            <Icon type="mail" />
            one
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="setting" />
              </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Header>
    )
  }
}
export default HeaderCustom;