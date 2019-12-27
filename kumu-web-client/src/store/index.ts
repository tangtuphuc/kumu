import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        messageBox: {
            namespaced: true,
            state: {
                storeVar: 4
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
            getters: {
                isBig: store => (item: number) => {
                    return store.storeVar > item;
                }
            }
        }
    }
});
