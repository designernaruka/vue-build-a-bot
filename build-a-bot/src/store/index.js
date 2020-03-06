/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuex from 'vuex';

import robotosModule from './modules/robots';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: robotosModule,
    users: usersModule,
  },
  getters: {
  },
});
