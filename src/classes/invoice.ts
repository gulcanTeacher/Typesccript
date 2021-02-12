import {HasFormatter} from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter{
    
    constructor(
        readonly client : string,
        private details:string,
        public amount:number
    ){}

    format(){ //HasFormatter interface inden implemente olduğu için bu metot burda kullnılmasaydı hata verirdi.
        //this.client='this is client';readonly yapınca hata verir bu satır. 
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}