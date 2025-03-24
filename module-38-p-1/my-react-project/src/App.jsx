import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Sports></Sports>
      <Sports></Sports>
      <Cat></Cat>
    </>
  )
}

function Person(){
  const age = 23;
  const job = 'student'
  return(
    <p>hlw tanjil im {age} years old im a {job}</p>
  )
}

function Sports(){
  return(
   <div>
     <h3>Cricket</h3>
     <p>playing and lossing</p>
     <ul>
      <li>mango</li>
      <li>banana</li>
      <li>alo</li>
     </ul>
   </div>
  )
}

function Cat(){
  return(
    <div>
      <h4>Cat Name</h4>
      <p>miki</p>
    </div>
  )
}
export default App
