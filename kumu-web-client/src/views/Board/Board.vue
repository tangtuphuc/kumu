<template>
    <div class="board">
        <div class="message" v-for="(message, index) in messages" :key="index">
            <SendMessage v-if="message.isSender()" :text="message.text" />
            <ReceiveMessage v-if="message.isReceiver()" :text="message.text" />
        </div>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

import { Component, Vue, Prop } from 'vue-property-decorator';

// Components
import SendMessage from './Message/SendMessage.vue';
import ReceiveMessage from './Message/ReceiveMessage.vue';

@Component({
    components: {
        SendMessage,
        ReceiveMessage,
    },
    props: {
        messageList: {
            type: Array,
            required: false,
            default() {
                return [];
            },
        },
    },
    computed: {
        ...mapGetters({ messages: 'messageBox/getMessages' }),
    },
})
export default class Board extends Vue {}
</script>

<style lang="less" scoped>
@import '../../assets/less/chatbox.less';
.board {
    .message {
        clear: both;
        width: 100%;
        display: inline-block;
    }
}
</style>
