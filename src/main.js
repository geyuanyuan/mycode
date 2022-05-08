import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import ckeditor from 'ckeditor4-vue'
import './styles.scss'

Vue.use(ElementUI)
Vue.use(ckeditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
