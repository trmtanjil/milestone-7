// export default function ToDo(props){
//     return(
//         <div>
//             <li>all ok : {props.tast}</li>
//         </div>
//     )
// }

export default function ToDo({isDone,task,time= 0 }){
    if(isDone){
        return  <li>done : {task} duration : {time}</li>
        }
    else{
        return <li>panding {task} </li>
    }
}