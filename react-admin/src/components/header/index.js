import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import { Icon, Layout, Menu, Modal } from 'antd';
import { connect } from "react-redux";
import { actionCreator } from '@/store/common';

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
  // 退出
  quitFunc=()=>{
    Modal.confirm({
      title: '确认要退出？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        sessionStorage.clear();
        // 重置菜单选中项
        this.props.handleClick();
        this.props.history.push('/login')
      },
      onCancel:()=>{

      }
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
          style={{background:"none"}}
        >
          <Menu.Item key="full" onClick={this.screenFull}>
            {this.state.fullscreen ? (
              <Icon type="shrink" />
            ) : (
              <Icon type="arrows-alt" />
            )}
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
const mapDispatch = dispatch => ({
  // 退出重置store
  handleClick(e) {
    const action = actionCreator.changeMenuCurrent("");
    dispatch(action)
  }
})
export default connect(null,mapDispatch)(withRouter(HeaderCustom))
