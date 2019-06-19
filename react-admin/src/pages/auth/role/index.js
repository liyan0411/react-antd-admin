import React,{Component,Fragment} from "react";
import BreadcrumbCustom from '_c/breadcrumb'
import {Button} from "antd";

class Role extends Component {
  jumpDetail=()=>{
    // this.props.history.push('/app/roleDetail');
    // query 公开  state  加密
    this.props.history.push({
      pathname: '/app/roleDetail',
      query: { id:12,name: ' sunny' }
    })
  }
  render() {
    return (
      <Fragment>
        <BreadcrumbCustom first="权限管理" second="角色管理" />
        <div className="view-bg">
          <h1>角色管理</h1>
          <Button type="primary" onClick={this.jumpDetail}>
            跳转
          </Button>
        </div>
      </Fragment>
    )
  }
}
export default Role;
