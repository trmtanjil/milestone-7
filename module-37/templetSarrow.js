// ! 1 templetString 

let fName = 'tanjil';
let lName = 'tanvir';

const fullNmae = `my name is ${fName} my brother name is ${lName}`;
console.log(fullNmae);


// ! 2 arrow fungtion
// console.log(myName(1,2));
// function myName(d,w){
//     console.log(arguments);
//     return(2+2)
// }

// const names=(...rest)=>{
// console.log(rest);
// }
// names(1,3,4)

const arroww=(a,b,c)=>a+b+c;

console.log(arroww(3,2,2));

// !3spread operator

const num1= [1,2,3,4,5];
const num2 = [6,7,8,9,0]

const mainNum = [...num1,...num2];
const mainNum1 = [num1,6,7,8];
console.log(mainNum);
console.log(mainNum1);