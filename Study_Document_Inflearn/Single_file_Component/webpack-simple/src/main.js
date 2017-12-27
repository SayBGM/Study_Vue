import Vue from 'vue'
import App from './App.vue'

import NavHeader from './components/NavHeader.vue'
import input from './components/input.vue'

Vue.component('nav-header', NavHeader);
Vue.component('sinput', input);

new Vue({
  el: '#app',
  render: h => h(App)
})
