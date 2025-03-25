import { useState } from "react"

 

 

export default function Counter(){
    const [count, setCount]=useState(0)

const addedCount=()=>{
const newCount = count+1
setCount(newCount)
}
 

    const countStyle={
        border:'2px solid red',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px'
    }
    return(
      <div style={countStyle}>
          <h3> count :{count} </h3>
          <button onClick={addedCount} >add</button>
      </div>

    )
}