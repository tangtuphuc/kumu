export const MessageType = {
    SENDER: 'sender',
    RECEIVER: 'receiver',
    BOT: 'bot'
};

export default class Message {
    id: string | number = Date.now();

    text: string;

    type: string = MessageType.SENDER;

    createdAt: number = Date.now();

    constructor(text: string = '', type: string = MessageType.SENDER) {
        this.text = text;
        this.type = type;
    }
}
