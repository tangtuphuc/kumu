import Message, { MessageType } from '../model/Message';

// Defined type
import { RECEIVE_NEW_MESSAGE, FETCH_MESSAGE_HISTORY, SAVE_MESSAGE_HISTORY } from '../actions.type';
import { ADD_MESSAGE, SET_MESSAGES } from '../mutations.type';
import { StoreContext } from '../type';

// Api
import {} from '../api/message';

// Service
import { loadMessageLocalStorage, saveMessageLocalStorage } from '../service/message';

const initialState: any = {
    messages: [
        new Message({ text: 'Xin chào mọi người', type: MessageType.RECEIVER }),
        new Message({
            text: `Đây là source code được build từ ${process.env.NODE_ENV || '?'}`,
            type: MessageType.SENDER,
        }),
        new Message({ text: 'Vâng, xin chào chủ nhân', type: MessageType.RECEIVER }),
        new Message({ text: 'Đặt báo thức 7h sáng mai', type: MessageType.SENDER }),
    ],
};

const actions = {
    [FETCH_MESSAGE_HISTORY]({ commit }: StoreContext) {
        const messageDataHistory: Array<object> = loadMessageLocalStorage();
        commit(
            SET_MESSAGES,
            messageDataHistory.map((message) => new Message(message))
        );
    },
    [SAVE_MESSAGE_HISTORY]({ getters }: StoreContext) {
        const messageHistory = initialState.messages; // getters.messages;
        saveMessageLocalStorage(messageHistory);
    },
    [RECEIVE_NEW_MESSAGE]({ commit }: StoreContext, payload: { text: string }) {
        commit(ADD_MESSAGE, payload.text);
    },
};

const mutations = {
    [ADD_MESSAGE](state: any, text: string) {
        state.messages.push(new Message({ text, type: MessageType.SENDER }));
    },
    [SET_MESSAGES](state: any, messages: Array<Message>) {
        state.messages = messages;
    },
};

const getters = {
    getMessages: (state: any) => state.messages,
};

const messageBox = {
    namespaced: true,
    state: {
        ...initialState,
    },
    mutations,
    actions,
    getters,
};

export default messageBox;
