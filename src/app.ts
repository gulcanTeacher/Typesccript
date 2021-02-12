import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { payment } from './classes/payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';


const form=document.querySelector('.new-item-form') as HTMLFormElement;//typecasting
console.log(form.children);

//inputs
const type=document.querySelector('#type') as HTMLSelectElement;
const tofrom=document.querySelector('#tofrom') as HTMLInputElement;
const details=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;

//list template instance 
const ul=document.querySelector('ul')!;
const list=new ListTemplate(ul);


form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    let values:[string,string,number];
    values=[tofrom.value,details.value,amount.valueAsNumber]

    let doc:HasFormatter;
    if(type.value==='invoice'){
        //doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber)
        doc=new Invoice(...values)
    }else{
        doc=new payment(...values)

    }

    list.render(doc,type.value,'end');
});

//Generics

// const addUID=(obj:object) => {
//     let uid=Math.floor(Math.random()*100);
//     return {...obj,uid};
// }

// let docOne=addUID({name:'gülcan',age: 30});

// console.log(docOne.name);//çalışmadığını gör.

/////////////////////////////////////////////////////////////////////////////////////////
// const addUID=<T  extends object>(obj:T) => { //const addUID=<T>(obj:T) => {  //T tipi tanımladım. 
//     let uid=Math.floor(Math.random()*100);
//     return {...obj,uid};
// }

// let docOne=addUID({name:'gülcan',age: 30});

// console.log(docOne.name);


/////////////////////////////////////////////////////////////////////////////////////////
// const addUID = <T extends {name:string}>(obj:T) => { 
//     let uid=Math.floor(Math.random()*100);
//     return {...obj,uid};
// }

// let docOne=addUID({age: 30});//hatayı gör

// console.log(docOne.age);//hover yap hatayı gör.


/////////////////////////////////////////////////////////////////////////////////////
const addUID=<T extends {name:string}>(obj:T) => {
    let uid=Math.floor(Math.random()*100);
    return {...obj,uid};
}

let docOne=addUID({name:'gülcan',age: 30});
//let docTwo=addUID('hello');//hata verir. object bekliyor const addUID=<T extends {name:string}>(obj:T) => { satırına göre.


console.log(docOne.age);

//with interfaces
// interface Resources<T> {
//     uid:number;
//     resourceName:string;
//     data:T;
// }

///////////////////////
// interface Resource<T> {
//     uid:number;
//     resourceName:string;
//     data:T;
// }

// const docThree:Resource<string> = {
//     uid:1,
//     resourceName: 'person',
//     data: 'güney'
// }

//////////////////////////
// interface Resource<T> {
//     uid:number;
//     resourceName:string;
//     data:T;
// }

// const docThree:Resource<string> = {
//     uid:1,
//     resourceName: 'person',
//     data: {name:'güney'}//hata çünkü interface de T tipi belirledim. Burada da string ver dedim. Sonra da gittik object verdik burada.
// }
////////////////////////

interface Resource<T> {
    uid:number;
    resourceName:string;
    data:T;
}

const docThree:Resource<object> = {
    uid:1,
    resourceName: 'person',
    data: {name:'güney'}//hata çünkü interface de T tipi belirledim. Burada da string ver dedim. Sonra da gittik object verdik burada.
}

// const docFour:Resource<string[]> = {
//     uid:1,
//     resourceName: 'person',
//     data: ['güney']//hata çünkü interface de T tipi belirledim. Burada da string ver dedim. Sonra da gittik object verdik burada.
// }

const docFour:Resource<string[]> = {
    uid:1,
    resourceName: 'person',
    data: ['güney','milk','toilet','toilet roll']
}

console.log(docThree,docFour);

//Enums

enum resourceType{BOOK,AUTHOR,FILM,DIRECTOR,PERSON}

interface Resourcee<T> {
    uid:number;
    resourceType:resourceType;//önce number yap bu türü. Sonra diğerlerine ver.
    data:T;
}

const docOnee:Resourcee<object> = {
    uid:1,
    resourceType: resourceType.BOOK,
    data: {title:'name of the wind'}
}

const docTwoo:Resourcee<object> = {
    uid:10,
    resourceType:resourceType.PERSON,
    data: {name:'unzile'}
}

console.log(docOnee,docTwoo);

//tuples

let arr=['yaren',23,true];
arr[0]=false;
arr[1]='gülcan';
arr=[30,false,'meryem'];

//let tup:[string,number,boolean]=[40,'gulcan',true];//olmaz. Doğru sırada doğru türde olmalıdır.

let tup:[string,number,boolean]=['gulcan',30,true];
//tup[0]=false;//hover yap hatayı gör. 
tup[0]='kennedy';
tup[1]=30;

let student:[string,number];
//student=[234234,'Alpo'];//bir üst satırda türlerin sırasına dikkat.
student=['Ali',22356987];









