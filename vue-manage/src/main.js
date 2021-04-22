import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import VuecompositionApi from '@vue/composition-api'

Vue.config.productionTip = false
Vue.use(VuecompositionApi)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
