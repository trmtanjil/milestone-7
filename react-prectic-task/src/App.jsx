 
import { Suspense } from 'react'
import './App.css'
import TastCount from './TastCount'
import Hideshow from './Hideshow'

import ApiTask3 from './ApiTask3'

const faceUser = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

function App() {
 
  


  return (
    <>
       
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>messege is loading.....</h3>}>
        <TastCount ></TastCount>

        <Hideshow></Hideshow>

        <ApiTask3 faceUser={faceUser}></ApiTask3>
      </Suspense>
      
    </>
  )
}

export default App
