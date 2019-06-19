/**
 * 面包屑 导航
 * 可根据导航 层级设置
 */
import React, { Component } from 'react';
import {connect} from "react-redux";
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { actionCreator } from '@/store/common';

class BreadcrumbCustom extends Component {
  render() {
		const { first, second, jumpHome } = this.props
    const firsts = <Breadcrumb.Item>{first}</Breadcrumb.Item> || ''
    const seconds = <Breadcrumb.Item>{second}</Breadcrumb.Item> || ''
    return (
      <span>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>
            <Link onClick={jumpHome} to={'/app/home'}>首页</Link>
          </Breadcrumb.Item>

          {firsts}
          {seconds}
        </Breadcrumb>
      </span>
    )
  }
}
const mapState=(state)=>({

});
const mapDispatch = (dispatch) => ({
  // 面包屑 跳转首页
  jumpHome(){
    const action = actionCreator.changeMenuCurrent("/app/home");
    dispatch(action);
  }
})
export default connect(
  mapState,
  mapDispatch
)(BreadcrumbCustom)
