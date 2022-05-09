import { createStore } from 'vuex';

import  getters  from './getters';
import  actions  from './actions';
import  mutations  from './mutations';

export const state = {
  players: [],
  showModal:false,
  player:null
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
});
