export class payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        //this.client='this is client';readonly yapınca hata verir bu satır. 
        return `${this.recipient} owed £${this.amount} for ${this.details}`;
    }
}
