import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

// const World = Vue.component(
//   'World',
//   { template: '<span>World</span>' },
// );

// new Vue({
//   template: '<div>Hello <World/></div>',
//   el: '#helloVue',
// });
