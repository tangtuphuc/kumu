<template>
    <div class="stack-button" @click="open = !open">
        <transition name="fade" mode="out-in">
            <div v-if="!open">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <div v-if="open">
                <div class="bar skew-left"></div>
                <div class="bar skew-right"></div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    data() {
        return {
            open: false
        };
    }
})
export default class StackButton extends Vue {}
</script>

<style lang="less" scoped>
.stack-button {
    width: 2em;
    background-color: #2b7dcb88;
    margin: 0.25em;
    padding: 0.25em;
    border-radius: 0.5em;
    transition: 0.3s;

    &:hover {
        background-color: #2b7dcbee;
    }

    .bar {
        width: 1.5em;
        height: 0.25em;
        background-color: white;
        border-radius: 0.25em;
        margin: 0.25em;
    }

    .skew-left {
        margin-top: 0.75em;
        transform: skew(-45deg, 45deg);
    }

    .skew-right {
        transform: skew(45deg, -45deg);
        margin-top: -0.5em;
        margin-bottom: 0.75em;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
