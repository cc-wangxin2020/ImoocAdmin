import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from './auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      if (isCheckTimeout()) {
        store.dispatch('user/logout')
        return Promise.reject(new Error('Token超时了'))
      }
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    config.headers.icode = 'helloqianduanxunlianying'
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (err) => {
    if (err.response && err.response.data && err.response.data.code === 401) {
      store.dispatch('user/logout')
    }
    ElMessage.error(err.message)
    return Promise.reject(err)
  }
)

export default service
