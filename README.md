## 目录结构
```
antd-admin
├── build                # 打包后生成的文件
├── node_modules         # 依赖资源包
├── public               # 公共资源文件
├── src                  # 源代码
    ├── api           	 	# 接口（和page文件对应）
    ├── assets           	# 资源文件
        ├── fonts  		      # 字体图标库
	      ├── imgs  		      # 图片
        ├── lib  		        # 静态依赖包
        ├── styles  		    # 样式
	      └── theme       	  # less变量配置
    ├── components       	# 全局公用组件
		├── layout           	# 布局组件
        ├── footer  		    # 底部
        ├── header  		    # 头部
	      └── menu           	# 左侧菜单
    ├── pages            	# view 页面
        ├── animate  		    # 动画页
        ├── login 	        # 登录
        ├── home          	# 首页
        ├── Loading.js      # 异步加载组件loading
        └── index.js  		  # allpage
    ├── router           	# 路由配置
    ├── store          	 	# 状态管理
    ├── utils         	 	# 公用方法封装
		├── App.js           	# 内部视图结构
    ├── App.test.js      	# 自动化测试
		├── index.js         	# 入口文件，挂载
    ├── Page.js          	# 主视图路由
    └── serviceWorker.js 	# 注册了一个service worker
<!-- ervice worker是在后台运行的一个线程，可以用来处理离线缓存、消息推送、后台自动更新等任务 -->
├── .env                 # 文件位于项目根目录下，作为全局环境配置文件。
├── config-overrudes.js  # 自定义配置
├── CHANGELOG.md         # 版本改变日志
├── .eslintignore        # eslint忽略文件
├── .eslintirc           # eslint配置
├── .editorconfig        # 编码规范
├── .gitignore           # git 忽略项
├── yarn.json    				 # 在 `yarn`时候生成一份文件,用以记录当前状态下实际安装的各个package的具体来源和版本号
└── package.json         # package.json 项目相关以及插件版本

### store 模块化规范
	├── store         	# 模块-store文件
    ├── index.js      	  # 统一暴露
		├── reducer.js        # 负责生成 State
    ├── actionTypes.js    # 定义函数类型
    └── actionCreator.js 	# 函数创建器
```
## 开发
    # 克隆项目
    git clone url...

    # 安装依赖
    yarn(或者npm install)
    //or # 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
		npm install --registry=https://registry.npm.taobao.org
		
    yarn add package (or npm install package -D)  || npm install --save package

    # 本地开发 开启服务
    yarn start || npm start

  浏览器访问 http://localhost:3000

## 发布
    # 打包发布
    yarn build 

## 兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- | 
| >= IE10 | last 2 versions | last 2 versions | last 2 versions | last 2 versions

