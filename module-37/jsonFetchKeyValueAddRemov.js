const person = {
    namee : 'tan;jil',
    age: 23,
    friends:['sorif','abir']
}

const newstringfy=JSON.stringify(person);
// console.log(newstringfy);
const stringifyToPers= JSON.parse(newstringfy);
// console.log(stringifyToPers);

// !fetch
// fetch(URL)
// .then(res=>res.json())
// .then(data=>console.log(data))