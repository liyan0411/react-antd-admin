import React, { Component } from "react";
import emitter from "@/utils/events.js";
class HomeChild1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "我是child1的msg"
    };
  }
  componentDidMount() {
    this.eventEmitter = emitter.addListener("changeMsg", message => {
      this.setState({
        message
      });
    });
  }
  componentWillUnmount() {
    // emitter.removeListener(this.eventEmitter);

    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
      return;
    };
  }
  //在render函数调用前判断：如果前后state中Number不变，通过return false阻止render调用
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.message === this.state.message) {
      return false;
    }
    return true;
  }
  renderChild(child) {
    // 控制内容的分发
    if (child.props.left) {
      return (
        <div className="left" key="left">
          {child}
        </div>
      );
    } else if (child.props.right) {
      return (
        <div className="right" key="right">
          {child}
        </div>
      );
    } else if (child.props.center) {
      return (
        <div className="center" key="center">
          {child}
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        homeChild1--------{this.state.message}
        <h1 children={this.props.children}></h1>
        {Array.isArray(this.props.children)
          ? this.props.children.map(child => {
              return this.renderChild(child);
            })
          : this.props.children && this.renderChild(this.props.children)}
      </div>
    );
  }
}
export default HomeChild1;
