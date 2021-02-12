import {HasFormatter} from '../interfaces/HasFormatter.js';

export class payment implements HasFormatter{
    
    constructor(
        readonly recipient : string,
        private details:string,
        public amount:number
    ){}

    format(){ //HasFormatter interface inden implemente olduğu için bu metot burda kullnılmasaydı hata verirdi.
        //this.client='this is client';readonly yapınca hata verir bu satır. 
        return `${this.recipient} owed £${this.amount} for ${this.details}`;
    }
}