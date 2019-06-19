import React,{Component,Fragment} from "react";
import {connect} from "react-redux";
import { Steps, Button } from 'antd';
import {actionCreator} from "./store/index";
import beauty from "@/assets/imgs/beauty.jpg"
const { Step } = Steps;

class Home extends Component {
	render(){
    const { homeData,list, changeHomeData } = this.props;
    const newList=list.toJS();
		return (
      <Fragment>
        <div className="view-bg">
          <img src={beauty} alt="" />
          <h1>我是首页</h1>
          <Button type="primary" onClick={changeHomeData}>
            修改数据
          </Button>
          {homeData}
          <ul>
            {newList.map(r => {
              return <li key={r}>{r}</li>
            })}
          </ul>
          <br />
          ----------------------------------
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step
              title="In Progress"
              description="This is a description."
            />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </div>
      </Fragment>
    )
	}
}
// 将需要的state的节点注入到与此视图数据相关的组件上
const mapState = (state) => ({
  homeData: state.getIn(['home', 'homeData']),
  list:state.getIn(['home','list'])
});
// 将需要绑定的响应事件注入到组件上
const mapDispatch=(dispatch)=>({
  changeHomeData(){
    const action = actionCreator.changeHomeData();
    dispatch(action)
  }
})
export default connect(
  mapState,
  mapDispatch
)(Home)