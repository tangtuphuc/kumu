import Message, { MessageType } from '../model/Message';

import { RECEIVE_NEW_MESSAGE } from '../actions.type';
import { ADD_MESSAGE } from '../mutations.type';
import { StoreContext } from '../type';

const initialState: any = {
    messages: [
        new Message('Xin chào chủ nhân', MessageType.RECEIVER),
        new Message('Ta là Kum', MessageType.SENDER),
        new Message('Vâng, xin chào chủ nhân Kum', MessageType.RECEIVER),
        new Message('Đặt báo thức 7h sáng mai cho ta', MessageType.SENDER)
    ]
};

const actions = {
    [RECEIVE_NEW_MESSAGE]({ commit }: StoreContext, payload: { text: string }) {
        commit(ADD_MESSAGE, payload.text);
    }
};

const mutations = {
    [ADD_MESSAGE](state: any, text: string) {
        state.messages.push(new Message(text, MessageType.SENDER));
    }
};

const getters = {
    getMessages: (state: any) => state.messages
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
