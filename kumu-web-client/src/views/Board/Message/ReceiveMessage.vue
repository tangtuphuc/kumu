<template>
    <div class="receive-message">
        <div class="avatar"></div>
        <div class="text">{{ text }}</div>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    props: {
        text: {
            type: String,
            required: false,
            default: 'This is the receiver text',
        },
    },
})
export default class ReceiveMessage extends Vue {}
</script>

<style lang="less" scoped>
@import '../../../assets/less/chatbox.less';

.receive-message {
    .text {
        background-color: @unfocus-bg-color;
        text-align: left;
        padding: @message-padding;
        border-radius: @box-radius;
    }
    display: flex;
    max-width: 20em;
    align-content: left;
    padding: @box-padding;
}
</style>
