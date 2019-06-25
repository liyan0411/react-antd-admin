import React,{Component,Fragment} from "react";

import CSSAnimates from '_c/CSSAnimate'
import { Layout,Button } from 'antd';

const { Content } = Layout

class CSSAnimate extends Component {
  state = {
    animateName: ''
  }

  animateMe = e => {
    this.setState({
      animateName: 'fadeInRight'
    })
  }
  render() {
    const {animateName} = this.state;
    return (
      <Fragment>
        <div className="view-bg">
          <h1>我是首页home</h1>
          <Button type="primary" onClick={this.animateMe}>
            执行动画
          </Button>
          <Content>
            <CSSAnimates id="animateMe" type={animateName}>
              <strong>Animate</strong> Me<strong>!</strong>
            </CSSAnimates>
          </Content>
        </div>
      </Fragment>
    )
  }
}
export default CSSAnimate;
