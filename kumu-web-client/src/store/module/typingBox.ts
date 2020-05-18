import { exposeState } from '../helpers/store.helper';

import { SEND_MESSAGE, TYPING, RECEIVE_NEW_MESSAGE } from '../actions.type';

import { SET_TYPING } from '../mutations.type';

import { StoreContext } from '../type';

const initialState = {
    typing: false
};

const mutations = {
    [SET_TYPING](state: any, value: boolean) {
        state.typing = value;
    }
};

const actions = {
    [TYPING]({ commit }: StoreContext) {
        commit(SET_TYPING, true);
    },
    [SEND_MESSAGE]({ commit, dispatch }: StoreContext, payload?: { text: string }) {
        commit(SET_TYPING, false);
        dispatch(`messageBox/${RECEIVE_NEW_MESSAGE}`, payload, { root: true });
    }
};

const getters = {
    ...exposeState(initialState)
};

const typingBox = {
    namespaced: true,
    state: {
        ...initialState
    },
    mutations,
    actions,
    getters
};

export default typingBox;
