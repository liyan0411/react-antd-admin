// 引入拦截处理后的 axios
import request from './request'
import {message} from "antd";

// post 请求
export function apiPost(url, data = {}) {
  return request({
    url,
    method: 'post',
    data
  })
}

// get 请求
export function apiGet(url, params = {}) {
  return request({
    url,
    method: 'get',
    params
  })
}

//importFile 导入文件
export function apiUl(url, data = {},file) {
  // 参数为formData 格式
  var fd = new FormData()
  if (data != null && data !== undefined) {
    for (var i = 0; i < data.length; i++) {
      fd.append(data[i].name, data[i].value)
    }
  }
  if (file != null) {
    fd.append('uploadFile', file)
  } else {
    message.warning('请选择文件！')
    return
  }
  return request({
    url,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: fd
  })
}

// uploadFile 文件下载
export function apiDl(url, data = {}) {
  return request({
    url,
    method: 'post',
    responseType: 'blob',
    data
  })
}
