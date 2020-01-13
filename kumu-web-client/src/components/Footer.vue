<template>
    <div class="footer">
        <div class="footer-logo">
            {{ 'created by Kum' }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style lang="less">
@import '../assets/less/chatbox.less';
@import '../assets/less/common.less';

.footer {
    background-color: @main-color;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.3em;

    .footer-logo {
        display: inline-block;
        margin: auto;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
    }
}

@media screen and (min-width: 414px) {
    .powered-by {
        font-size: 16px;
    }
}
</style>
