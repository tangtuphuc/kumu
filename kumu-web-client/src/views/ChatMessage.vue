<template>
    <div class="chat-message">
        <div class="header-wrapper">
            <Header :title="'Kumu'" :description="'Yo'" />
        </div>

        <div class="background"></div>

        <div class="board-wrapper">
            <Board :messageList="listMessage" />
        </div>

        <div class="type-box-wrapper">
            <TypeBox />
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
import TypeBox from '@/views/TypeBox/TypeBox.vue';

@Component({
    components: {
        TypeBox,
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

    .background {
        background-color: #82e9de77;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        z-index: -1;
    }

    .header-wrapper {
    }

    .board-wrapper {
    }

    .type-box-wrapper {
        width: 100%;
        z-index: 1;
        background-color: #ffffff;
    }

    .footer-wrapper {
    }
}
</style>
