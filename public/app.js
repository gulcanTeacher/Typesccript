import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { payment } from './classes/payment.js';
const form = document.querySelector('.new-item-form'); //typecasting
console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance 
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        //doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber)
        doc = new Invoice(...values);
    }
    else {
        doc = new payment(...values);
    }
    list.render(doc, type.value, 'end');
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
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'gülcan', age: 30 });
//let docTwo=addUID('hello');//hata verir. object bekliyor const addUID=<T extends {name:string}>(obj:T) => { satırına göre.
console.log(docOne.age);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'güney' } //hata çünkü interface de T tipi belirledim. Burada da string ver dedim. Sonra da gittik object verdik burada.
};
// const docFour:Resource<string[]> = {
//     uid:1,
//     resourceName: 'person',
//     data: ['güney']//hata çünkü interface de T tipi belirledim. Burada da string ver dedim. Sonra da gittik object verdik burada.
// }
const docFour = {
    uid: 1,
    resourceName: 'person',
    data: ['güney', 'milk', 'toilet', 'toilet roll']
};
console.log(docThree, docFour);
//Enums
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["AUTHOR"] = 1] = "AUTHOR";
    resourceType[resourceType["FILM"] = 2] = "FILM";
    resourceType[resourceType["DIRECTOR"] = 3] = "DIRECTOR";
    resourceType[resourceType["PERSON"] = 4] = "PERSON";
})(resourceType || (resourceType = {}));
const docOnee = {
    uid: 1,
    resourceType: resourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docTwoo = {
    uid: 10,
    resourceType: resourceType.PERSON,
    data: { name: 'unzile' }
};
console.log(docOnee, docTwoo);
//tuples
let arr = ['yaren', 23, true];
arr[0] = false;
arr[1] = 'gülcan';
arr = [30, false, 'meryem'];
//let tup:[string,number,boolean]=[40,'gulcan',true];//olmaz. Doğru sırada doğru türde olmalıdır.
let tup = ['gulcan', 30, true];
//tup[0]=false;//hover yap hatayı gör. 
tup[0] = 'kennedy';
tup[1] = 30;
let student;
//student=[234234,'Alpo'];//bir üst satırda türlerin sırasına dikkat.
student = ['Ali', 22356987];
