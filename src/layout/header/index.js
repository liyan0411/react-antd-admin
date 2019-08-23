import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import { Icon, Layout, Menu, Modal } from 'antd';

const { Header } = Layout;
const { SubMenu } = Menu;
class HeaderCustom extends Component {
  state = {
    fullscreen: false
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
  // 退出
  quitFunc=()=>{
    Modal.confirm({
      title: '确认要退出？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        sessionStorage.clear();
        this.props.history.push('/login')
      },
      onCancel:()=>{

      }
    })
  }
  render() {
    const { toggle, collapsed } = this.props
    return (
      <Header className="footer-header header-view">
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />

        <Menu
          className="pull-right header-menu"
          mode="horizontal"
          style={{ background: 'none' }}
        >
          <Menu.Item key="full" onClick={this.screenFull}>
            <Icon
              type={
                this.state.fullscreen ? 'fullscreen-exit' : 'fullscreen'
              }
            />
          </Menu.Item>
          <Menu.Item key="mail">
            <Icon type="user" />
            username
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="setting" />
              </span>
            }
          >
            <Menu.ItemGroup title="设置">
              <Menu.Item key="setting:1">个人中心</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="操作">
              <Menu.Item key="setting:3" onClick={this.quitFunc}>
                退出
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Header>
    )
  }
}

export default withRouter(HeaderCustom);
