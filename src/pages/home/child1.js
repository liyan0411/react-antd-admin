import React, { Component } from "react";
import emitter from "@/utils/events.js";
class HomeChild1 extends Component{
  constructor(props){
    super(props);
    this.state={
      message:"我是child1的msg"
    }
  }
  componentDidMount(){
    this.eventEmitter = emitter.addListener("changeMsg",(message)=>{
      this.setState({
        message
      });
    })
  }
  componentWillUnmount(){
    // emitter.removeListener(this.eventEmitter);
  }
  render(){
    return <div>homeChild1--------{this.state.message}</div>;
  }
}
export default HomeChild1;
