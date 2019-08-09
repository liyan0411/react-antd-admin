import React from 'react'
import ReactDOM from 'react-dom'
import '_a/styles/index.less'
import '_a/lib/animate.css'
import Page from './Page'
// 解决create-react-app IE 兼容性问题
import 'react-app-polyfill/ie9'
import * as serviceWorker from './serviceWorker'

// antd 国际化
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/es/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

ReactDOM.render(
  <ConfigProvider locale={zh_CN}>
    <Page />
  </ConfigProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
