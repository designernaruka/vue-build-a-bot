/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuex from 'vuex';

import robotosModules from './modules/robots';
import usersModules from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robots: robotosModules,
    users: usersModules,
  },
});
