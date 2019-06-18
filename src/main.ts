import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '../node_modules/bootstrap/scss/bootstrap.scss';
import './assets/sass/light-bootstrap-dashboard.scss';
import './assets/css/demo.css';

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
