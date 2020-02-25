import Vue from 'vue';
import App from './App.vue';

import router from './router';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');

// const World = Vue.component(
//   'World',
//   { template: '<span>World</span>' },
// );

// new Vue({
//   template: '<div>Hello <World/></div>',
//   el: '#helloVue',
// });
