import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Steps, Button, message, Statistic, Card, Row, Col, Icon } from "antd";
import { actionCreator } from "./store/index";
import HomeChild1 from "./child1";
import HomeChild2 from "./child2";
import HomeChild3 from "./child3";
import "./index.less"
const { Step } = Steps;

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    console.log(111, this.refs.child1);
    console.log(222, this.myRef);
    console.log(333, this.input);
  }
  render() {
    const { homeData } = this.props;
    const str="我再这啊"
    const a = true;
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
              <HomeChild1 ref="child1" str={str}>
                <span>123</span>
                <a center="center" href="https://www.baidu.com">
                  中间跳转腾讯
                </a>
                <a right="right" href="https://www.baidu.com">
                  右侧跳转阿里
                </a>
                <a left="left" href="https://www.baidu.com">
                  左侧跳转百度
                </a>
              </HomeChild1>
              <HomeChild2 ref={this.myRef} str="123" />
              <HomeChild1 ref={input => (this.input = input)} />
              <h1 className={`style1 ${a ? "style2" : ""}`}>我是测试样式的</h1>
              <HomeChild3 order="1" initCount={5} />
              <HomeChild3 order="2" initCount={10} />
              <HomeChild3 order="3" initCount={15} />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
  changes(e) {
    console.log(e.target.getAttribute("data-id"));
    this.props.changeHomeData("我是修改的数据 啊哈哈哈哈");
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
  changeHomeData(homeData) {
    message.success("This is a success message");
    const action = actionCreator.changeHomeData(homeData);
    dispatch(action);
  }
});
export default connect(mapState, mapDispatch)(Home);
