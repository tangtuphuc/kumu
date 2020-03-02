<template>
    <div class="type-box">
        <StackButton />

        <div class="type-input"></div>

        <div class="void-button"></div>

        <div class="send-button"></div>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

import { Component, Vue, Prop } from 'vue-property-decorator';

import StackButton from '@/components/Input/StackButton.vue';

@Component({
    components: {
        StackButton
    }
})
export default class TypeBox extends Vue {}
</script>

<style lang="less" scoped>
.type-box {
}
</style>
