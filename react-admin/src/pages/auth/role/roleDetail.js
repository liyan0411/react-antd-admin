import React,{Component,Fragment} from "react";
import BreadcrumbCustom from '@/components/breadcrumb';
import { sSetObject, sGetObject, sRemove } from '@/utils/index.js'

class RoleDetail extends Component {
  componentDidMount(){
    // console.log(this.props)
    this.setQuery();
  }
  setQuery=()=>{
    let querys = this.props.location.query;
    if (!querys) {
      querys = sGetObject('detailQuery')
    }else{
      sSetObject('detailQuery', querys)
    }
    console.log(querys);
  }
  componentWillUnmount(){
    sRemove('detailQuery')
  }
	render(){
		return (
      <Fragment>
        <BreadcrumbCustom lists={["权限管理","角色管理","角色详情"]}/>
        <div className="view-bg">
          <h1>我是角色管理 详情页</h1>
          <p />
        </div>
      </Fragment>
    )
	}
}
export default RoleDetail;
