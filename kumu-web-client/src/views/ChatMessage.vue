<template>
    <div class="chat-message">
        <div class="header-wrapper">
            <Header :title="'Kumu'" :description="'Yo'" />
        </div>

        <div class="board-wrapper">
            <Board :messageList="listMessage" />
        </div>

        <div class="footer-wrapper">
            <Footer />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Board from '@/views/Board/Board.vue';

@Component({
    components: {
        Board,
        Header,
        Footer
    }
})
export default class ChatMessage extends Vue {
    listMessage: Array<{}> = [];
}
</script>

<style lang="less" scoped>
.chat-message {
    bottom: 0;
    width: 100%;
    position: fixed;

    .header-wrapper {
    }

    .board-wrapper {
    }

    .footer-wrapper {
    }
}
</style>
