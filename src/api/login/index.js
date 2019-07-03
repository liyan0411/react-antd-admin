import { apiPost } from '@/utils/api'

// 登录接口
export function loginApi(data) {
  return apiPost('/login/login',data)
}

