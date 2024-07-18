import ElementPlus from 'element-plus'
import '../element-variables.scss'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import en from 'element-plus/es/locale/lang/en'
import store from '@/store'

const _ = window.ResizeObserver
window.ResizeObserver = class ResizeObserver extends _ {
  constructor(callback) {
    callback = debounce(callback, 20)
    super(callback)
  }
}

const debounce = (callback, delay) => {
  let tid
  return function () {
    const ctx = self
    tid && clearTimeout(tid)
    tid = setTimeout(() => {
      callback.apply(ctx, arguments)
    }, delay)
  }
}
export default (app) => {
  app.use(ElementPlus, {
    locale: store.getters.language === 'en' ? en : zhCn
  })
}
