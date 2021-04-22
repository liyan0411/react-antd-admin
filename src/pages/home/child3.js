import React,{ Component } from "react"

import { Button } from "antd";
class homeChild3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initCount || 0
    };
  }
  handleClick=()=>{
    let self=this;
    console.log(this.props.initCount);
    self.setState({
      count: self.state.count + 1
    });
  }
  render() {
    let { order } = this.props;
    let { count } = this.state;
    return (
      <div>
        <p>
          <span>这是第{order}个按钮：</span>
          <Button type="primary" onClick={this.handleClick}>
            Click me
          </Button>
          <span>当前数值为：{count}</span>
        </p>
      </div>
    );
  }
}
export default homeChild3
