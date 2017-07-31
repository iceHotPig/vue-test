// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false

/* eslint-disable no-new */

import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

const routes = [
	  { path: '/', redirect: '/goods' },
	  { path: '/goods', component: goods },
	  { path: '/seller', component: seller },
	  { path: '/ratings', component: ratings }
	];

const router = new VueRouter({
	  routes,
	  linkActiveClass: 'active'
	});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
