<template>
    <div>
        <div v-for="message in listMessage" :key="message.id">{{ message.text }}</div>
        <div>{{ dummyVar }}</div>
        <div>{{ storeVar }}</div>
        <button @click="testFunc">Increase DummyVar!!</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
    computed: {
        ...mapState('title', ['storeVar'])
    }
})
export default class ChatMessageBox extends Vue {
    @Prop() listMessage: Array<{}>;

    dummyVar: number = 7;

    testFunc() {
        this.dummyVar = this.dummyVar + 1;
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
