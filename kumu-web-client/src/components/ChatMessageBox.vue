<template>
    <div>
        <div v-for="message in listMessage" :key="message.id">{{ message.text }}</div>
        <div>{{ dummyVar }}</div>
        <div>{{ storeVar }}</div>
        <div>{{ isBig(5) }}</div>
        <button @click="testFunc">Increase DummyVar!!</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';

@Component({
    computed: {
        ...mapState('messageBox', {
            storeVar: (state: { storeVar: string }) => state.storeVar
        }),
        ...mapGetters('messageBox', ['isBig'])
    }
})
export default class ChatMessageBox extends Vue {
    @Prop() listMessage: Array<{}>;

    dummyVar: number = 7;

    testFunc() {
        this.dummyVar = this.dummyVar + 1;
        this.$store.dispatch('messageBox/increase');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
