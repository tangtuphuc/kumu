// Mutations relate to message
//
// ./module/message.js`
//
export const ADD_MESSAGE_HISTORY = 'ADD_MESSAGE_HISTORY';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_MESSAGE_HISTORY = 'SET_MESSAGE_HISTORY';
export const SET_MESSAGE_READ = 'SET_MESSAGE_READ';

// Mutations relate to Hotel Info
export const SET_HOTEL_INFO = 'SET_HOTEL_INFO';

// Mutations relate to Conversation
export const SET_CONVERSATION_LANGUAGE = 'SET_CONVERSATION_LANGUAGE';
export const SET_CONVERSATION_MODE = 'SET_CONVERSATION_MODE';
export const SET_CONVERSATION_INFO = 'SET_CONVERSATION_INFO';

export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

// Mutations global not relate to Server (general)
export const SET_LOADING = 'SET_LOADING';

export const SET_TYPING = 'SET_TYPING';
export const REMOVE_TYPING = 'REMOVE_TYPING';

export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const REMOVE_ERROR_MESSAGE = 'REMOVE_ERROR_MESSAGE';

export const SET_MENU_LIST = 'SET_MENU_LIST';
export const SET_LANGUAGE_LIST = 'SET_LANGUAGE_LIST';

export const SET_TIME_OUT_BOX = 'SET_TIME_OUT_BOX';

// Mutations relate to SocketIO
// NOTE: Mutations with `SOCKET_` prefix are virtual mutations,
// not actual mutations. Nothing will change in store, but for standard
// in actions only use commit(actionType). Socketio plugin will
// subscribe all mutations related and defined in "./plugin/socketio"

export const SOCKET_EMIT_INITIALIZE_CHAT = 'SOCKET_EMIT_INITIALIZE_CHAT';
export const SOCKET_EMIT_READ_MESSAGE = 'SOCKET_EMIT_READ_MESSAGE';
export const SOCKET_EMIT_TYPING = 'SOCKET_EMIT_TYPING';
