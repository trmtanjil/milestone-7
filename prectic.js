const sectecns  = 'im a web developoer bd ';
let revers = ''
for(let word of sectecns){
    revers=word+revers
}
// console.log(revers);
let words = '';
for(let i = 0 ; i<sectecns.length; i++){
    const letter = sectecns[i];
    words = letter+ words
}
// console.log(words);

let sectecn = sectecns.split('').reverse().join('');
console.log(sectecn);