<template>
    <div class="type-box">
        <StackButton />

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

import { SEND_MESSAGE, TYPING } from '../../store/actions.type';

import StackButton from '@/components/Input/StackButton.vue';
import ColorTextInput from '@/components/Input/ColorTextInput.vue';
import IconButton from '@/components/Input/IconButton.vue';

const namespace: string = 'typingBox';

@Component({
    components: {
        StackButton,
        ColorTextInput,
        IconButton
    }
})
export default class TypeBox extends Vue {
    typingMessage: string = '';

    @Action(SEND_MESSAGE, { namespace }) sendMessage: any;

    @Action(TYPING, { namespace }) typing: any;

    sendClicked(): void {
        this.sendMessage({ text: this.typingMessage });
        this.typingMessage = '';
    }

    typeMessage(event: any): void {
        this.typing();
    }
}
</script>

<style lang="less" scoped>
.type-box {
    display: flex;

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
