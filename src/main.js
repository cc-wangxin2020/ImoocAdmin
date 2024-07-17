import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import installElementPlus from './plugins/element'
import installIcons from '@/icons'
import './permission.js'
import i18n from './i18n'

const app = createApp(App)
installElementPlus(app)
// 注册全局组件
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')
