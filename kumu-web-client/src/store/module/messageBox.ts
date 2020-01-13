import Message from '../model/Message';

import { SEND_MESSAGE } from '../actions.type';

const initialState = {
    messages: [
        new Message('Xin chào chủ nhân'),
        new Message('Ta là Kum'),
        new Message('Vâng, xin chào chủ nhân Kum'),
        new Message('Đặt báo thức 7h sáng mai cho ta')
    ]
};

const actions = {
    sendMessage({ commit }: { commit: (t: string) => void }) {
        commit(SEND_MESSAGE);
    }
};

const mutations = {
    increaseStoreVar(state: any) {
        state.storeVar += 1;
    }
};

const getters = {
    getMessages: (store: any) => store.messages
};

const messageBox = {
    namespaced: true,
    state: {
        ...initialState
    },
    mutations,
    actions,
    getters
};

export default messageBox;
