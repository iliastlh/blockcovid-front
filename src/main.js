import Vue from 'vue'
import VueHtmlToPaper from 'vue-html-to-paper';
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import api from './utils/api';


Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.use(VueHtmlToPaper);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
