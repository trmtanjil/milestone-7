// export default function Info({name, isok,time=0}){
//     if(isok){
//         return <li>Name : {name} duration : {time} </li>
//     }
//     return <li>somthing wrong duration {time}</li>
// }


// export default function info({name,isok,time=0}){
//     return isok ?
//     <li>done : {name} time : {time}</li>
//     :<li>not Done : {name}</li>
// }
// conditional rendering : 4 &&
// export default function Info({name, isok, time=0}){
//     return isok && <li>name is : {name}, time: {time}</li>
// }

// cosditional randaring || 5

export default function Info({name, isok, time=0}){
    // return isok || <li>not name is : {name}, time: {time}</li>
    return(
     <div style={{
        borderRadius:'10px',
        border:'3px solid red'
     }}>
           <li>
           my name {name}{isok && "🥲🙂"}
        </li>
        <div style={{
            padding: '3px',
            
        }}>
            <button style={{margin:'2px', background:'green',color:'black',
            }}>click -1</button>
            <button style={{margin:'2px', background:'green',color:'black',
            }}>click -1</button>
            <button style={{margin:'2px', background:'green',color:'black',
            }}>click -1</button>
            
        </div>
     </div>
        
    )
}

// conditonal randaring 6

// export default function Info({isok,name,time= 0 }){
//     const displayTIme = time?time:100;
//     let lisItem ;
//     if(isok){
//         lisItem = <li>done : {name} duration : {displayTIme}</li>
//         }
//     else{
//         lisItem= <li>panding :{name} {displayTIme}</li>
//     }
//     return lisItem;
// }