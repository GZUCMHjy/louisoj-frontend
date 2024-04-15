// initial state
import { StoreOptions } from "vuex";

// getters
const getters = {};
export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "noLogin",
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      // 这里是可以调用远程的后端API方法
      commit("updateUser", { userName: "louis" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
