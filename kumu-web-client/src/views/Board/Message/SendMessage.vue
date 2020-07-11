<template>
    <div class="sender-message">
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
            default: 'This is the sender text'
        }
    }
})
export default class SendMessage extends Vue {}
</script>

<style lang="less" scoped>
@import '../../../assets/less/chatbox.less';
.sender-message {
    .text {
        background-color: @focus-bg-color;
        color: @focus-text-color;
        text-align: left;
        padding: @message-padding;
        border-radius: @box-radius;
    }

    max-width: 20em;
    float: right;
    padding: @box-padding;
}
</style>
