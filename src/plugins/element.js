import ElementPlus from 'element-plus'
import '../element-variables.scss'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import en from 'element-plus/es/locale/lang/en'
import store from '@/store'

export default (app) => {
  app.use(ElementPlus, {
    locale: store.getters.language === 'en' ? en : zhCn
  })
}
