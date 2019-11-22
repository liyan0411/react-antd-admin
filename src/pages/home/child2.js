import React, { Component } from "react";
import emitter from "@/utils/events.js"

class HomeChild2 extends Component {
  handleClick(){
    emitter.emit("changeMsg","我是child2修改的数据")
  }
  render() {
    return <div onClick={this.handleClick.bind(this)}>homeChild2</div>;
  }
}
export default HomeChild2;
