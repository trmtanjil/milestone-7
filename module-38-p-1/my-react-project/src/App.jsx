import './App.css'
import ToDo from './todo'
import Info from './info';
import Actor from './Actor';
import Singer from './singer';

function App() {
  const acto=['hena', 'manna','bappa','saban']
  // const acto=['hena', '{name: 'namma'}','bappa','saban']

  const singer=[
    {id: 1, name:'mahfuz',age:68},
    {id: 2, name:'tahsan',age:48},
    {id: 3, name:'jayd',age:18},
    {id: 4, name:'hero alom',age:12}
  ]

  const time = 50;
  return (
    <>
      <h1>Vite + React</h1>

    {
      singer.map(singer=><Singer singer={singer} key={singer.id}></Singer>)
    }
    {/* {
      acto.map(antor=><Actor actor={antor}></Actor>)
       // acto.map(actor=><Actor actor={actor.name}></Actor>)
    } */}


    <Info isok={true} name='tanjil' time={time}></Info>
    {/* <Info isok={false} name='tanjil'></Info>
    <Info isok={false} name='tanjil' time={time}></Info> */}

      {/* <ToDo task='read js' isDone={true} time={time}></ToDo>
      <ToDo task='read veu' isDone={false}></ToDo>
      <ToDo task='read css' isDone={true} time='100 '></ToDo> */}
      

      {/* <Student></Student>
      <Cricket name='tamim' runs= '5000' age= '39'></Cricket>
      <Cricket name='afridi' runs= '8000' age= '49'></Cricket>
      <Cricket name='moshi' runs= '9000' age= '19'></Cricket>
      <Person></Person>
      <Developor name='tanjil'age='22' tec=' cst'></Developor>
    <Developor name='tanvir'age='26' tec=' science'></Developor>
        <Mobilphone model='s20Ultra' brand='samsung' camara='true'></Mobilphone>
        <Mobilphone model='iPhon13' brand='apple' camara='true'></Mobilphone>
        <Mobilphone model='samphone11' brand='sampony' camara='true'></Mobilphone>
        <Myinfo name='tanji'age={23}home="Narsindi"work="student"gf={true}gfname="programming😁"></Myinfo> */}
    </>
  )
}

function Myinfo({name,age,home,work,gf,gfname}){

  return(
    
    <div style={{
      border: '3px solid red',
      margin: '5px',
      borderRadius: '10px',
    }}>
   




      <h3>Name:{name}</h3>
      <p>age:{age}</p>
      <p>Home:{home}</p>
      <p>work:{work}</p>
      <p>gf:{gf}</p>
      <p>gfName:{gfname}</p>
    </div>
  )
}

function Cricket({name, age, runs}){
  return(
    <div style={{
      border: '3px solid red',
      margin: '5px',
      borderRadius: '10px',

    }}>
      <h2>Cricket</h2>
      <h3>player Name : {name}</h3>
      <p>runs :{runs} </p>
      <p>age : {age}</p>
    </div>
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
 