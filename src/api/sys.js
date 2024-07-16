import request from '@/utils/request'
/**
 * 登录接口
 *
 */
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
/**
 * 获取用户信息（需要携带token）
 */

export const getUserInfo = () => {
  return request({
    url: '/sys/profile'
  })
}