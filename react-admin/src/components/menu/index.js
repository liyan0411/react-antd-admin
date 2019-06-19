import React,{Component,Fragment} from "react";
import {connect} from "react-redux"
import { Layout } from 'antd';
import routes from "@/router/config.js";
import SiderMenu from "./siderMenu";
import {actionCreator} from "@/store/common"
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
    theme: 'dark'
  }
  componentDidMount() {
    // console.log(routes.menus)
  }
  render() {
    const {theme} = this.state;
    const { collapsed, heights, current, handleClick } = this.props
    return (
      <Fragment>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" style={logo}>
            LOGO
          </div>
          <div style={{ height: heights - 64 + 'px', overflowY: 'auto' }}>
            <SiderMenu
              menus={routes.menus}
              onClick={handleClick}
              defaultOpenKeys={['/app/home']}
              theme={theme}
              mode="inline"
              selectedKeys={[current]}
            />
          </div>
        </Sider>
      </Fragment>
    )
  }
}

const mapState = (state) => ({
  current: state.getIn(['common', 'current'])
})
const mapDispatch = dispatch => ({
  // 点击菜单事件
  handleClick(e) {
    const action = actionCreator.changeMenuCurrent(e.key)
    dispatch(action);
  }
})
export default connect(
  mapState,
  mapDispatch
)(MenuCustom)