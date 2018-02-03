import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Register a global bus. TODO: Check how ugly is this.
Vue.prototype.$eventHub = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')
