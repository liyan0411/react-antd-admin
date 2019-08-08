/**
 * 面包屑 导航
 * 可根据导航 层级设置
 * 传递参数  Array  当前页面 以及 上级页面 名称
 */
import React, { Component } from 'react';
import {connect} from "react-redux";
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { actionCreator } from '@/store/common';

class BreadcrumbCustom extends Component {
  render() {
		const {jumpHome,lists } = this.props
    return (
      <span>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link onClick={jumpHome} to={'/app/home'}>
              首页
            </Link>
          </Breadcrumb.Item>
          {
            lists.map((r)=>{
              return (
                <Breadcrumb.Item key={r}>{r}</Breadcrumb.Item> || ''
              )
            })
          }
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
