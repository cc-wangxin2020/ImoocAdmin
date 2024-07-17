import { createI18n } from 'vue-i18n'
import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'
import store from '@/store'
const messages = {
  en: {
    msg: {
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      ...mZhLocale
    }
  }
}
function getLanguage() {
  return store && store.getters && store.getters.language
}
const locale = getLanguage()
const i18n = createI18n({
  // 使用组合式API需要将legacy设置成false
  legacy: false,
  // 将t函数设置成全局属性
  globalInjection: true,
  locale,
  messages
})
export default i18n
