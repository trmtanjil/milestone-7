import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Student></Student>
      {/* <Person></Person>
      <Developor name='tanjil'age='22' tec=' cst'></Developor>
    <Developor name='tanvir'age='26' tec=' science'></Developor> */}

        <Mobilphone model='s20Ultra' brand='samsung' camara='true'></Mobilphone>
        <Mobilphone model='iPhon13' brand='apple' camara='true'></Mobilphone>
        <Mobilphone model='samphone11' brand='sampony' camara='true'></Mobilphone>

    </>
  )
}

function Person(){
  const age = 23;
  const job = 'student';
  const stylePerson={
    color:'red',
    fontSize:'20px'
  }
  return(
    <p style={stylePerson}>hlw tanjil im {age} years old im a {job}</p>
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

function Student(){
  return(
    <div className='style'>
      <h3>Name: </h3>
      <p>age: </p>
    </div>
  )
}

function Developor(proms){
  console.log(proms);
  return(
    <div style={{
      border:"2px solid green",
      color:'red',
      borderRadius:'10px'
    }}>
      <h3>Developer: {proms.name}</h3>
      <p>technology:{proms.tec} </p>
      <p>age: {proms.age}</p>
    </div>
  )
}

function Mobilphone(mobileInfo){
  return(
    <div style={{
      border:'3px solid green',
      borderRadius:'22px',
      paddig: '10px',
      margin:'5px'

    }}>
      <h3 style={{color:'green'}}>Mobile : {mobileInfo.model}</h3>
      <h2>brend :{mobileInfo.brand} </h2>
      <h2>camara: {mobileInfo.camara}</h2>
    </div>
  )
}
export default App
