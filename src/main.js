import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'

// import iView from 'iview';
// Vue.use(iView);

// router.beforeEach((to, from, next) => {
//     iView.LoadingBar.start();
//     next();
// });

// router.afterEach(route => {
//     iView.LoadingBar.finish();
// });


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
