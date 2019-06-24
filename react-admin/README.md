## 目录结构
```
antd-admin
├── build                # 打包后生成的文件
├── node_modules         # 依赖资源包
├── public               # 公共资源文件
├── src                  # 源代码
    ├── api           	 	# 接口
    ├── assets           	# 资源文件
				├── imgs  			 		# 图片
				└── styles       		# 样式
    ├── components       	# 全局公用组件
		├── layout           	# 布局组件
    ├── pages            	# view 页面
        ├── Home          	# 首页
        └── Login 	        # 登录
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
├── .project             # 项目文件
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
 
## 开发
    # 克隆项目
    git clone url...

    # 安装依赖
    yarn(或者npm)
    //or # 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
		npm install --registry=https://registry.npm.taobao.org
		
    yarn add package

    # 本地开发 开启服务
    yarn start

  浏览器访问 http://localhost:8088

## 发布
    # 打包发布
    yarn build



