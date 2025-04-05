 
 import Prectic from './Prectic';
import { Suspense } from 'react'
import './App.css'
// import Bottles from './componets/bottles/bottles';

// const bottlesPromise = fetch('./bottle.json')
// .then(res=>res.json())
 
// const bottlesPromise2 = fetch('https://raw.githubusercontent.com/trmtanjil/botols-data/refs/heads/main/botols.json')
// .then(res=>res.json())

const bottlesPromise = fetch('./bottle.json').then(res=>res.json())

function App() {

  const time = 50;
  return (
    <>
      
      <h1 className='textCenter'>My awesome Water Bottle</h1>
   
  <Suspense>
    <Bottles bottlesPromise={bottlesPromise}>

    </Bottles>


    <Prectic name='tanjil' sub= 'js' time={time} isdone={true}>
      
    </Prectic>
    <Prectic name='tanjil' sub= 'js' time={time} isdone={false}>
      
    </Prectic>

    <Prectic  name='sharif' sub= 'react'  isdone={true}>

    </Prectic>
    </Suspense>    


    </>
  )
}

export default App
