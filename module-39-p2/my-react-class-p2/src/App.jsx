import { Suspense, useState } from 'react';
import Counter from './Counter';
import PlayerRun from './PlayerRun';
import Users from './users';
import Friends from './friends';
import './App.css'

const fechuser=fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

const fechFiend =async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return  res.json()
}

function App() {
  const [count, setCount] = useState(0)

  const friendPromis=fechFiend();
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

    <Suspense fallback={<h3>loading....</h3>}>
    <Users fechuser={fechuser}></Users>
    </Suspense>

    <Suspense fallback={<h3>Friends ar comming for treat...</h3>}>
      <Friends friendPromis={friendPromis}>
    
      </Friends>
    </Suspense>
    

    <PlayerRun></PlayerRun>

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
