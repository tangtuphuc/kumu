// Actions for message

// message
export const SEND_MESSAGE = 'sendMessage';
export const RECEIVE_NEW_MESSAGE = 'receiveNewMessage';

export const FETCH_MESSAGE_HISTORY = 'fetchMessageHistory';

// Actions global not relate to Server
export const LOADING = 'loading';
export const LOADED = 'loaded';
export const STOP_TYPING = 'stopTyping';
export const TYPING = 'typing';
export const TYPED = 'typed';
export const SHOW_ERROR_MESSAGE = 'showErrorMessage';
export const HIDE_ERROR_MESSAGE = 'hideErrorMessage';

// Actions helpers
export const CALL_API = 'callApi';

// SOCKET ACTION

// Custom socket event
export const SOCKET_INITIALIZE_CHAT = 'SOCKET_INITIALIZE_CHAT';
export const SOCKET_READ_MESSAGE = 'SOCKET_READ_MESSAGE';
export const SOCKET_TYPING = 'SOCKET_TYPING';
export const SOCKET_ON_NEW_MESSAGE = 'SOCKET_ON_NEW_MESSAGE';
export const SOCKET_ON_READ_MESSAGE = 'SOCKET_ON_READ_MESSAGE';
export const SOCKET_ON_TYPING = 'SOCKET_ON_TYPING';

// Default event
export const SOCKET_ON_CONNECT_ERROR = 'SOCKET_ON_CONNECT_ERROR';
export const SOCKET_ON_RECONNECT = 'SOCKET_ON_RECONNECT';
export const SOCKET_ON_RECONNECT_FAILED = 'SOCKET_ON_RECONNECT_FAILED';

export default {
    SEND_MESSAGE,
    RECEIVE_NEW_MESSAGE,
    FETCH_MESSAGE_HISTORY,

    LOADING,
    LOADED,
    STOP_TYPING,
    TYPING,
    TYPED,
    SHOW_ERROR_MESSAGE,
    HIDE_ERROR_MESSAGE,
    CALL_API,

    SOCKET_INITIALIZE_CHAT,
    SOCKET_READ_MESSAGE,
    SOCKET_TYPING,
    SOCKET_ON_NEW_MESSAGE,
    SOCKET_ON_READ_MESSAGE,
    SOCKET_ON_TYPING,
    SOCKET_ON_CONNECT_ERROR,
    SOCKET_ON_RECONNECT,
    SOCKET_ON_RECONNECT_FAILED
};
