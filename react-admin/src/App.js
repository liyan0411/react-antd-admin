import React, { Component } from 'react'
import { Layout } from 'antd'
import MenuCustom from '@/components/menu'
import HeaderCustom from '@/components/header'
import Routes from "./router"
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
    this.getViewPortHeight()
    window.onresize = () => {
      this.getViewPortHeight()
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
                <Routes></Routes>
                {/* </Layout> */}
              </Content>
            </div>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default App;
