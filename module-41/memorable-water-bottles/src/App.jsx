 
 
import { Suspense } from 'react'
import './App.css'
import Bottles from './componets/bottles/bottles';

const bottlesPromise = fetch('./bottle.json')
.then(res=>res.json())
 


function App() {

  return (
    <>
      
      <h1>My awesome Water Bottle</h1>
   
   <Suspense fallback={<h3>Bottles are Loading...</h3>}>
  <Bottles bottlesPromise={bottlesPromise}>

    </Bottles>
   
   </Suspense>
    </>
  )
}

export default App
