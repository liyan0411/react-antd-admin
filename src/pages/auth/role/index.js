import React,{Component,Fragment} from "react";
import {Button} from "antd";
import Panel from '_c/Panel';
import Print from '_c/Print'

class Role extends Component {
  jumpDetail=()=>{
    // let id="adasd"
    // this.props.history.push('/app/roleDetail/'+id);
    // query 公开  state  加密
    this.props.history.push({
      pathname: '/root/roleDetail',
      query: { id: 12, name: ' sunny' }
    })
  }
  render() {
    return (
      <Fragment>
        <div className="view-bg">
          <h1>角色管理</h1>
          <Button type="primary" onClick={this.jumpDetail}>
            跳转
          </Button>
          <Panel title="基本用法">
            <h1>"你好啊"</h1>
          </Panel>
          <Panel title="字符串 & HTML文本">
            <div>{`<span style="color: red">今晚打老虎</span>`}</div>
            <br />
            <Print
              content={`<span style="color: red">今晚打老虎</span>`}
              trigger={
                <Button type="primary" icon="printer">
                  打印
                </Button>
              }
            />
          </Panel>
        </div>
      </Fragment>
    )
  }
}
export default Role;
