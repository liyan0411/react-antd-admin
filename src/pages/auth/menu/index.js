import React,{Component,Fragment} from "react";
import BreadcrumbCustom from '_c/breadcrumb'

class MenuManage extends Component {
  render() {
    return (
      <Fragment>
        <BreadcrumbCustom
          lists={['权限管理', '菜单管理']}
        />
        <div className="view-bg">
          <h1>菜单管理</h1>
        </div>
      </Fragment>
    )
  }
}
export default MenuManage;