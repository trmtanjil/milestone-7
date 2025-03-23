const mainarryLo=[
    {id:1,brand:'samsung',name:'s21ultra',color:'black',camara:false},
    {id:6,brand:'samsung',name:'s25ultra',color:'gray',camara:true},
    {id:2,brand:'iphone',name:'iphone12',color:'gray',camara:false},
    {id:3,brand:'walton',name:'walton10',color:'green',camara:true},
    {id:4,brand:'spark',name:'spart11',color:'pick',camara:true},
    {id:5,brand:'nokia',name:'model1800',color:'light',camara:false}
]
//   !1 map
// const result = mainarryLo.map(product=>`id number of Phone ${product.id } brand is ${product.brand} color is ${product.color} `)
// console.log(result);

// !2 forEach
// mainarryLo.forEach(product=>console.log(product))

// !2 filter
const result1 = mainarryLo.filter(product=>product.brand==='samsung');
const result2 = mainarryLo.filter(product=>product.camara===true);
console.log(result1,result2);

// !3 find 

const result3 = mainarryLo.find(produnt=>produnt.brand==="samsung");
const result4 = mainarryLo.find(produnt=>produnt.camara===true);
console.log(result4, result3);


