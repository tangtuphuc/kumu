<template>
    <div class="test">
        <ChatMessageBox :listMessage="testListMessage" />
    </div>
</template>

<script>
// @ is an alias to /src
import ChatMessageBox from '@/components/ChatMessageBox.vue';

export default {
    data() {
        return {
            testListMessage: [
                { id: 1, text: '3' },
                { id: 2, text: 'yo' }
            ]
        };
    },
    name: 'test',
    components: {
        ChatMessageBox
    }
};
</script>
