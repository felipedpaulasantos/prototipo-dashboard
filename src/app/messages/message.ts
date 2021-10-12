export class Message {

    constructor(
        public account: number,
        public deliverTimestamp: Date,
        public creator?: string,
        public errorData?: string,
        public errorTimestamp?: Date,
        public fromId?: number,
        public idChat?: number,
        public lastMessageDate?: Date,
        public managerName?: string,
        public messageTimestamp?: Date,
        public openMessageDate?: Date,
        public origin?: string,
        public readTimestamp?: Date,
        public status?: string,
        public text?: string,
        public toId?: number,
    ) {
        this.deliverTimestamp = new Date(deliverTimestamp);
        this.errorTimestamp = new Date(errorTimestamp);
        this.lastMessageDate = new Date(lastMessageDate);
        this.messageTimestamp = new Date(messageTimestamp);
        this.openMessageDate = new Date(openMessageDate);
        this.readTimestamp = new Date(readTimestamp);
        this.text = text.trim();
    }

    public deliverTimestampString = this.deliverTimestamp ? new Date(this.deliverTimestamp).toLocaleString() : null;
    public errorTimestampString = this.errorTimestamp ? new Date(this.errorTimestamp).toLocaleString() : null;
    public lastMessageDateString = this.lastMessageDate ? new Date(this.lastMessageDate).toLocaleString() : null;
    public messageTimestampString = this.messageTimestamp ? new Date(this.messageTimestamp).toLocaleString() : null;
    public openMessageDateString = this.openMessageDate ? new Date(this.openMessageDate).toLocaleString() : null;
    public readTimestampString = this.readTimestamp ? new Date(this.readTimestamp).toLocaleString() : null;
}
