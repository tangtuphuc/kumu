import Vue from 'vue';
import Vuex from 'vuex';

import messageBox from './module/messageBox';
import typingBox from './module/typingBox';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        messageBox,
        typingBox
    }
});
