/**
 * Created by Administrator on 2018/12/21.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NavHeader from './components/NavHeader/NavHeader.vue'
import {Button} from 'mint-ui'
import store from './store'

Vue.component('NavHeader', NavHeader);
Vue.component(Button.name, Button);

new Vue ({
  el: '#app',
  render: h => h(App),
  router,
  store
});
