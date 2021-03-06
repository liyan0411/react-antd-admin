import React, { Component } from 'react'
import { Layout } from 'antd'
import MenuCustom from '@/layout/menu'
import HeaderCustom from '@/layout/header'
import FooterCustom from '@/layout/footer'
import Routes from './router'
import {connect} from "react-redux"

const { Content } = Layout
class App extends Component {
  state = {
    collapsed: false,
    heights: 0
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  componentDidMount() {
    this.getViewPortHeight()
    let self = this
    // 防抖 性能优化，防止多次触发
    let timer = null
    window.onresize = () => {
      if (!timer) {
        timer = setTimeout(() => {
          self.getViewPortHeight()
          timer = null
        }, 500)
      }
    }
  }
  getViewPortHeight = () => {
    this.setState({
      heights:
        document.documentElement.clientHeight || document.body.clientHeight
    })
  }
  render() {
    let { heights, collapsed } = this.state
    return (
      <div className="App">
        <Layout style={{ height: '100%' }}>
          {/* 左侧菜单 */}
          <MenuCustom collapsed={collapsed} heights={heights} />
          <Layout className="Layout-view">
            {/* 右侧  头部 */}
            <HeaderCustom collapsed={collapsed} toggle={this.toggle} />
            {/* 路由视图 */}
            <div
              className="router-view"
              style={{
                height: heights - 64 + 'px'
              }}
            >
              <Content
                className="content"
                style={{
                  minHeight: heights - 148 + 'px'
                }}
              >
                <Routes />
              </Content>
              <FooterCustom />
            </div>
          </Layout>
        </Layout>
      </div>
    )
  }
}
const mapState=(state)=>({
  pathList:state.get('common').pathList
})
export default connect(mapState,null)(App);
