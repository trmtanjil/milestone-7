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


//! find keys values
const mainarryLo=
    {id:1,brand:'samsung',name:'s21ultra',color:'black',camara:false}

// console.log(Object.values(mainarryLo));
// console.log(Object.keys(mainarryLo));


const mainarryLoo=[
    {id:1,brand:'samsung',name:'s21ultra',color:'black',camara:false},
    {id:6,brand:'samsung',name:'s25ultra',color:'gray',camara:true},
    {id:2,brand:'iphone',name:'iphone12',color:'gray',camara:false},
    {id:3,brand:'walton',name:'walton10',color:'green',camara:true},
    {id:4,brand:'spark',name:'spart11',color:'pick',camara:true},
    {id:5,brand:'nokia',name:'model1800',color:'light',camara:false}
]

const newData = {
    name: 'tanjil',
    age: 23
}

const allData= [...mainarryLoo,newData]
console.log(allData);

const filterr = mainarryLoo.filter(eliment=>eliment.brand!=='samsung');
console.log(filterr);
const removedData = [...filterr,newData];
console.log(removedData);