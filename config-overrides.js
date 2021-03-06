const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPlugins, // babel插件配置函数
  addWebpackAlias
} = require('customize-cra')
const path = require('path')
const defaultSettings = require('./src/config')

const name = defaultSettings.title || 'Antd admin' // page title
// 自定义配置
const addCustom = () => config => {
  config.name = name
  // module.rules
  // 去除soureMap
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false
  }
  return config
}
process.env.GENERATE_SOURCEMAP = false //去除生产环境的 sourceMap
module.exports = override(
  addBabelPlugins(
    // 支持装饰器
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ]
  ),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    // antd 配置
    modifyVars: {
      '@primary-color': '#1890ff', // 全局主色
      '@link-color': '#1890ff', // 链接色
      '@success-color': '#52c41a', // 成功色
      '@warning-color': '#faad14', // 警告色
      '@error-color': '#f5222d', // 错误色
      '@font-size-base': '14px', // 主字号
      '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
      '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
      '@text-color-secondary': 'rgba(0, 0, 0, .45)', // 次文本色
      '@disabled-color': 'rgba(0, 0, 0, .25)', // 失效色
      '@border-radius-base': '4px', // 组件/浮层圆角
      '@border-color-base': '#d9d9d9', // 边框色
      '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)' // 浮层阴影
    }
  }),
  //  配置别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    _c: path.resolve(__dirname, 'src/components'),
    _a: path.resolve(__dirname, 'src/assets')
  }),
  // 修改配置
  addCustom()
)
