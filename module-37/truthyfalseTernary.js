let strng = '';

// if(strng){
//     console.log('truthy value');
// }
// else{
//     console.log('falsy value');
// }

// strng?console.log(true):console.log(false);

let num = 229;

// const result = (num>=20 && num<=30)?'true':'falst';
// console.log(result);


const isActiv = false;

const showUser =()=>console.log('show user');

const hideUser =()=>console.log('hide user');
!isActiv?showUser():hideUser()

isActiv && showUser();
isActiv || hideUser();

let number = '10'

// number++
// console.log(typeof number);

console.log(number);