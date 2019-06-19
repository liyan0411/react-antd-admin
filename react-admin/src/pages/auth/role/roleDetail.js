import React,{Component,Fragment} from "react";
import BreadcrumbCustom from '@/components/breadcrumb';

class RoleDetail extends Component {
  componentDidMount(){
    this.setQuery();
  }
  setQuery=()=>{
    let querys = this.props.location.query;
    if (!querys) {
      querys = sessionStorage.getItem('detailQuery');
    }else{
      sessionStorage.setItem('detailQuery', JSON.stringify(querys))
    }
    console.log(querys);
  }
  componentWillUnmount(){
    sessionStorage.removeItem("detailQuery");
  }
	render(){
		return (
      <Fragment>
        <BreadcrumbCustom first="权限管理" second="角色管理" />
        <div className="view-bg">
          <h1>我是角色管理 详情页</h1>
          <p></p>
        </div>
      </Fragment>
    )
	}
}
export default RoleDetail;
