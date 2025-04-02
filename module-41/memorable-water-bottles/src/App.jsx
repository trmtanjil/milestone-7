 
 
import { Suspense } from 'react'
import './App.css'
import Bottles from './componets/bottles/bottles';

// const bottlesPromise = fetch('./bottle.json')
// .then(res=>res.json())
 
// const bottlesPromise2 = fetch('https://raw.githubusercontent.com/trmtanjil/botols-data/refs/heads/main/botols.json')
// .then(res=>res.json())

const bottlesPromise = fetch('./bottle.json').then(res=>res.json())

function App() {

  return (
    <>
      
      <h1 className='textCenter'>My awesome Water Bottle</h1>
   
  <Suspense>
    <Bottles bottlesPromise={bottlesPromise}>

    </Bottles>
    </Suspense>    


    </>
  )
}

export default App
