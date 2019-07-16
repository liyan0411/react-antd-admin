import React, { Component } from 'react';
import { Layout } from 'antd';
import MenuCustom from '_c/menu';
import HeaderCustom from '_c/header';
import Routes from "./router";
const { Content } = Layout;
class App extends Component {
  state = {
    collapsed: false,
    heights:0,
    lists:['首页','表格']
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  componentDidMount() {
    this.getViewPortHeight();
    let self=this;
    // 防抖 性能优化，防止多次触发
    let timer=null;
    window.onresize = () => {
      if (!timer) {
        timer=setTimeout(()=>{
          self.getViewPortHeight()
          timer=null;
        },1000)
      }
    }
  }
  getViewPortHeight = () => {
    this.setState({
      heights:
        (document.documentElement.clientHeight || document.body.clientHeight)
    })
  }
  render() {
    return (
      <div className="App">
        <Layout style={{ height: '100%' }}>
          {/* 左侧菜单 */}
          <MenuCustom
            collapsed={this.state.collapsed}
            heights={this.state.heights}
          />
          <Layout className="Layout-view">
            {/* 右侧  头部 */}
            <div className="header-view">
              <HeaderCustom
                collapsed={this.state.collapsed}
                toggle={this.toggle}
              />
            </div>
            {/* 路由视图 */}
            <div
              className="router-view"
              style={{
                height: this.state.heights - 64 + 'px'
              }}
            >
              <Content className="content">
                <Routes />
              </Content>
            </div>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default App;
