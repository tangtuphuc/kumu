<template>
    <div class="header">
        <div class="header-left">
            <img v-if="photo" :src="photo" />
            <!-- Using inline default cause Cannot use '@' in relative -->
            <img src="@/assets/img/logo.png" />
        </div>
        <div class="header-right">
            <div class="title">
                {{ title }}
            </div>
            <div class="description">
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {
    @Prop({
        required: false,
        default: () => {
            console.error('Header: Missing `title`. Generated default');
            return '{title}';
        }
    })
    title: string | undefined;

    @Prop({
        required: false,
        default: () => {
            console.error('Header: Missing `description`. Generated default');
            return '{description}';
        }
    })
    description: string | undefined;

    @Prop({
        required: false,
        default: () => {
            console.error('Header: Missing `photo`. Generated default');
            return '';
        }
    })
    photo: string | undefined;
}
</script>

<style lang="less">
@import '../assets/less/chatbox.less';
@import '../assets/less/common.less';

.header {
    padding: 0.5em;
    background-color: @focus-bg-color;
    color: @focus-text-color;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    text-align: center;
    // transform: translate3d(0, 0, 0);
    // -webkit-transform: translate3d(0, 0, 0);
    z-index: 2;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
    display: flex;

    .header-left {
        img {
            width: 48px;
            height: 48px;
        }
    }

    .header-right {
        text-align: left;
        margin-left: 2em;
        text-transform: uppercase;

        .title {
            font-size: 18px;
            font-weight: bold;
        }
        .description {
            font-size: 12px;
            word-break: keep-all;
            font-weight: bold;
            margin: 0.5em 0;
        }
    }
}
</style>
