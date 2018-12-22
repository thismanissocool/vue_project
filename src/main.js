/**
 * Created by Administrator on 2018/12/21.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NavHeader from './components/NavHeader/NavHeader.vue'
import store from './store'

Vue.component('NavHeader', NavHeader);

new Vue ({
  el: '#app',
  render: h => h(App),
  router,
  store
});
