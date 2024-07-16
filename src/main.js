import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import '@/styles/index.scss'
import installIcons from '@/icons'
import './permission.js'

const app = createApp(App)
installElementPlus(app)
// 注册全局组件
installIcons(app)
app.use(store).use(router).mount('#app')
