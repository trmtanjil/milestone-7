 
import { Suspense } from 'react'
import './App.css'
import Countrys from './components/countrys/countrys'

const countrysApi = fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
function App() {


  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>loading travaling.......</h3>}>
        <Countrys countrysApi={countrysApi}>

        </Countrys>
      </Suspense>
    
      
    </>
  )
}

export default App
