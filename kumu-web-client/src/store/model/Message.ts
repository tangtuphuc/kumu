export default class Message {
    id: string | number = Date.now();
    text: string;

    createdAt: number = Date.now();

    constructor(text: string = '') {
        this.text = text;
    }
}
