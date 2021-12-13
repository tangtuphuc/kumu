<template>
    <div class="icon-button">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.icon-button {
    img {
        height: 20px;
        padding: 0.25em;
        margin: 0.25em;
        border: 1.5px #88888888 solid;
        border-radius: 50%;

        &:hover {
            transition: 0.5s;
            box-shadow: 0 0 4px #888888;
        }

        &:active {
            border: 1.5px #2b7dcb solid;
            box-shadow: 0 0 4px #2b7dcb;
        }
        transition: 0.5s;
    }
}
</style>
