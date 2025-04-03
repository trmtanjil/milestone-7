 
import { Suspense } from 'react'
import './App.css'
import TastCount from './TastCount'
import Hideshow from './Hideshow'



function App() {
 


  return (
    <>
       
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>messege is loading.....</h3>}>
        <TastCount ></TastCount>

        <Hideshow></Hideshow>
      </Suspense>
      
    </>
  )
}

export default App
