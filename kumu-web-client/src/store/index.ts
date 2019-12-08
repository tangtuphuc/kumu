import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        storeVar: 1
    },
    mutations: {
        increaseStoreVar(state) {
            state.storeVar += 1;
        }
    },
    actions: {
        increase({ commit }) {
            commit('increaseStoreVar');
        }
    },
    modules: {}
});
