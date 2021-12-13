<template>
    <div class="type-box">
        <StackButton @buttonClicked="toggleMenu" :show="showMenu" />

        <div class="stack-menu" v-show="showMenu">
            <SelectList :itemList="menuList" @clickItem="itemClicked" />
        </div>

        <ColorTextInput
            class="text-input"
            v-model="typingMessage"
            @keydown.enter="sendClicked"
            @keydown="typeMessage($event)"
        />

        <IconButton>
            <img src="@/assets/img/microphone.png" alt="" srcset="" />
        </IconButton>

        <IconButton>
            <img src="@/assets/img/send.png" @click="sendClicked" alt="" srcset="" />
        </IconButton>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { State, Action, Getter } from 'vuex-class';

import { Component, Vue, Prop } from 'vue-property-decorator';

import {
    SEND_MESSAGE,
    TYPING,
    SAVE_MESSAGE_HISTORY,
    FETCH_MESSAGE_HISTORY,
} from '../../store/actions.type';

import StackButton from '@/components/Input/StackButton.vue';
import SelectList from '@/components/List/SelectList.vue';
import ColorTextInput from '@/components/Input/ColorTextInput.vue';
import IconButton from '@/components/Input/IconButton.vue';

const namespace: string = 'typingBox';

@Component({
    components: {
        StackButton,
        ColorTextInput,
        IconButton,
        SelectList,
    },
})
export default class TypeBox extends Vue {
    typingMessage: string = '';

    menuList: Array<object> = [
        { textShow: 'Save messages', action: 'SAVE_MESSAGE' },
        { textShow: 'Load messages', action: 'LOAD_MESSAGE' },
    ];

    showMenu: Boolean = false;

    @Action(SEND_MESSAGE, { namespace: 'typingBox' }) sendMessage: any;

    @Action(TYPING, { namespace: 'typingBox' }) typing: any;

    @Action(SAVE_MESSAGE_HISTORY, { namespace: 'messageBox' }) saveMessageHistory: any;

    @Action(FETCH_MESSAGE_HISTORY, { namespace: 'messageBox' }) fetchMessageHistory: any;

    sendClicked(): void {
        if (!this.typingMessage) return;
        this.sendMessage({ text: this.typingMessage });
        this.typingMessage = '';
    }

    typeMessage(event: any): void {
        this.typing();
    }

    toggleMenu(event: any): void {
        this.showMenu = !this.showMenu;
    }

    itemClicked(item: any): void {
        this.showMenu = false;
        if (item.action === 'SAVE_MESSAGE') {
            this.saveMessageHistory();
            console.log('Message saved');
        }

        if (item.action === 'LOAD_MESSAGE') {
            this.fetchMessageHistory();
            console.log('Message loaded from local storage');
        }
    }
}
</script>

<style lang="less" scoped>
.type-box {
    display: flex;

    .stack-menu {
        position: absolute;
        margin-left: 50px;
        max-height: 8em;
        margin-top: -100px;
    }

    .text-input {
        border: none;
        width: 100%;

        &:focus {
            border: none;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
    }
}
</style>
