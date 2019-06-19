//   在http.js中引入axios
import axios from 'axios'
import { Message } from 'antd'
import { baseApi } from './config'
// create an axios instance   创建axios实例
const service = axios.create({
  baseURL: baseApi, // api 的 base_url
  timeout: 5000, // request timeout  设置请求超时时间
  responseType: 'json',
  // withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})
// post请求参数格式化
function requestFormat(reqData) {
  let _user = null;
  let userId
  if (_user) {
    userId = _user.id
  }
  let req = {
    form: '2',
    operateCode: '',
    operateName: '',
    reqData: reqData,
    sign: '',
    time: '',
    token: '',
    userId: userId
  }
  return req
}
// get请求参数格式化
function requestGetFormat(reqData) {
  let _user = null;
  let userId
  if (_user) {
    userId = _user.id
  }
  reqData.userId = userId
  let req = reqData
  return req
}
// 初始化loading实例

service.interceptors.request.use(
  config => {
    // loadinginstace = Loading.service({
    //   lock: true,
    //   text: 'Loading',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(0, 0, 0, 0.3)',
    //   customClass: 'osloading',
    //   fullscreen: true
    // })
    if (config.method === 'post') {
      config.data = requestFormat(config.data)
    } else {
      config.params = requestGetFormat(config.data)
    }
    return config
  },
  error => {
    // 对请求错误处理
    Message.warning(error, 2);
    return Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use(
  response => {
    let res = response.data
    if (response.status === 200) {
      // 根据后端响应状态码 处理请求
      if (res.repCode === '0000') {
        return Promise.resolve(res)
      } else {
        if (response.config.responseType === 'json') {
          Message.error(res.repMsg, 2)
        }
        return Promise.resolve(res)
      }
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    //  1.判断请求超时
    if (
      error.code === 'ECONNABORTED' &&
      error.message.indexOf('timeout') !== -1
    ) {
      Message.error('请求超时，请稍后再试！',2)
      return Promise.reject(error)
      // return service.request(originalRequest);//例如再重复请求一次
    }
    if (error.response) {
      switch (error.response.status) {
        // 按照需求 处理异常
        case 401:
          break
        case 403:
          Message.error('登录过期，请重新登录',2)
          break
        case 404:
          Message.error( '服务器处理异常，请稍后再试！',2)
          break
        default:
          Message.error('服务器处理异常，请稍后再试！',2)
      }
      return Promise.reject(error.response)
    } else {
      Message.error('服务器处理异常，请稍后再试！',2)
      return Promise.reject(error.response)
    }
  }
)
export default service
