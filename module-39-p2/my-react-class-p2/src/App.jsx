import { useState } from 'react';
import Counter from './Counter';
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  function handaling(){
    alert ("all ok")
  }

  const handaling3=()=>{
    alert('click 3')
  }

const handelAdd5=(num)=>{
  const newNum = num+5;
   alert(newNum)
}

  return (
    <>
      <h3>Vite + React</h3>
     <Counter></Counter>

   
   <button onClick={handaling}>click</button>
   <button style={{margin:'11px'}} onClick={function handaling2(){alert('clicked2')}}>click 2</button>
   <button onClick={handaling3}>click me 3</button>
   <button onClick={()=>alert('all ok')}>click me 4</button>

   <button onClick={()=>handelAdd5(1)}>add umber</button>
    </>
  )
}

export default App
