import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasLogin: false,
    userInfo:{},
    TeamMembers:{},//团队成员
  },
  mutations: {
    login(state, provider){
      state.hasLogin = true;
      state.userInfo = provider;
    },
    logOut(state, provider){
      state.hasLogin = false;
      state.userInfo = {};
    },
    changeTeamMembers(state, provider){
      state.TeamMembers = provider;
    },
  },
  actions: {
  },
  modules: {
  }
})
