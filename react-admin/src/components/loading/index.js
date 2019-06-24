/**
 * 封装loading 组件，加载中动画
 * 使用   引入 import Loading from "...path";
 * 根据条件  执行显示 隐藏即可
 * 显示  Loading.show();
 * 隐藏  Loading.hide();
 */
import React,{Component} from "react";
import ReactDOM from "react-dom";
import { Spin } from 'antd';
import "./loading.less";

let defaultState={show:false};
class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = { ...defaultState }
  }

  // 显示
  show() {
    this.setState({
      show: true
    })
  }
  //隐藏
  hide() {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div className="loading-view" style={this.state.show ? { display: 'block' } : { display: 'none' }}>
        <Spin className="spin" tip="Loading...">
          {/* <Alert
            className="alert"
            message=""
            description=""
            type="info"
          /> */}
        </Spin>
      </div>
    )
  }
}
// 创建元素 追加到body
let div=document.createElement("div");
// let props={

// };
document.body.appendChild(div);
let Box = ReactDOM.render(React.createElement(
    Loading,
    // props
  ), div)
export default Box;
