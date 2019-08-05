import React, { Component, Fragment } from 'react';
import via from "@/assets/imgs/b1.jpg";

class UserManage extends Component {
  render() {
    return (
      <Fragment>
        <div className="view-bg">
          <h1>用户管理</h1>
          <img src={via} alt="" />
        </div>
      </Fragment>
    )
  }
}
export default UserManage;
