<template>
    <div class="board">
        <div class="message" v-for="(message, index) in messages" :key="index">
            {{ message.text }}
        </div>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    props: {
        messageList: {
            type: Array,
            required: false,
            default() {
                return [];
            }
        }
    },
    computed: {
        ...mapGetters({ messages: 'messageBox/getMessages' })
    }
})
export default class Board extends Vue {}
</script>

<style lang="less" scoped>
.board {
    background-color: #b1ebe8;
}
</style>
