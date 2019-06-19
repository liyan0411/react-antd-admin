import React,{Component,Fragment} from "react";
import BreadcrumbCustom from '@/components/breadcrumb';

class RoleDetail extends Component {
	render(){
		return (
      <Fragment>
        <BreadcrumbCustom first="权限管理" second="角色管理" />
        <div className="view-bg">
          <h1>我是角色管理 详情页</h1>
        </div>
      </Fragment>
    )
	}
}
export default RoleDetail;