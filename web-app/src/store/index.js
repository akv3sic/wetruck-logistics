import Vue from 'vue';
import Vuex from 'vuex';

import advertisers from './modules/advertisers'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
      advertisers
  }
});
