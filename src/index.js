import React from 'react';
import ReactDOM from 'react-dom';
import "_a/styles/index.less";
import '_a/lib/animate.css';
// import '_a/styles/antd/index.less';
import Page from './Page';
// 解决create-react-app IE 兼容性问题
import 'react-app-polyfill/ie9';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Page />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();