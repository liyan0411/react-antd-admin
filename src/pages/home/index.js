import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Steps, Button, message, Statistic, Card, Row, Col, Icon } from "antd";
import { actionCreator } from "./store/index";
import HomeChild1 from "./child1";
import HomeChild2 from "./child2";
import "./index.less"
const { Step } = Steps;

class Home extends Component {
  render() {
    const { homeData } = this.props;
    const a=true;
    // const newList=list.toJS();
    return (
      <Fragment>
        <div className="view-bg">
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<Icon type="arrow-up" />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: "#cf1322" }}
                  prefix={<Icon type="arrow-down" />}
                  suffix="%"
                />
              </Card>
            </Col>{" "}
            <Col span={12}>
              <Statistic title="Active Users" value={112893} />
            </Col>
            <Col span={12}>
              <Statistic
                title="Account Balance (CNY)"
                value={homeData}
                precision={2}
              />
              <Button
                data-id={"123"}
                style={{ marginTop: 16 }}
                type="primary"
                onClick={this.changes.bind(this)}
              >
                Recharge
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <HomeChild1 />
              <HomeChild2 />
              <h1 className={`style1 ${a ? "style2" : ""}`}>
                我是测试样式的
              </h1>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
  changes(e) {
    console.log(e.target.getAttribute("data-id"));
    this.props.changeHomeData();
  }
}
// 将需要的state的节点注入到与此视图数据相关的组件上
const mapState = state => ({
  // homeData: state.getIn(['home', 'homeData']),
  // list:state.getIn(['home','list']),
  homeData: state.get("home").homeData,
  list: state.get("home").list
});
// 将需要绑定的响应事件注入到组件上
const mapDispatch = dispatch => ({
  changeHomeData() {
    message.success("This is a success message");
    const action = actionCreator.changeHomeData();
    dispatch(action);
  }
});
export default connect(mapState, mapDispatch)(Home);
