import React, { Component, Fragment } from 'react';
import BreadcrumbCustom from '_c/breadcrumb'
import via from "@/assets/imgs/b1.jpg";

class UserManage extends Component {
  render() {
    return (
      <Fragment>
        <BreadcrumbCustom first="用户管理" />
        <div className="view-bg">
          <h1>用户管理</h1>
          <img src={via} alt="" />
        </div>
      </Fragment>
    )
  }
}
export default UserManage;
