// 引入 axios 配置
import request from './request'

// post 请求
export function apiPost(url,data = {}) {
  return request({
    url: url,
    method: 'post',
    data: data
  })
}

// get 请求
export function apiGet(url,params = {}) {
  return request({
    url: url,
    method: 'get',
    params: params
  })
}


// uploadfile 文件下载
export function apiDl(url,params = {}) {
  return request({
    url: url,
    method: 'post',
		responseType: 'blob',
    params: params
  })
}
