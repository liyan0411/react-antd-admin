import React,{Component,Fragment} from "react";
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
  }
  componentWillUnmount(){
    sRemove('detailQuery')
  }
	render(){
		return (
      <Fragment>
        <div className="view-bg">
          <h1>我是角色管理 详情页</h1>
          <p />
        </div>
      </Fragment>
    )
	}
}
export default RoleDetail;
