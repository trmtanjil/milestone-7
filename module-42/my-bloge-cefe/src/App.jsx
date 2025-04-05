
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Navbar from './components/navbar/Navbar'

function App() {
  const [boolMark, setbokkMark]=useState([])
const handleBookMark=(blog)=>{
setbokkMark([...boolMark, blog])
}
  return (
    <>
      <Navbar></Navbar>
   

      <div className="main-blogs flex text-center">
        <div className="left-site w-[70%]">

      <Blogs  handleBookMark={handleBookMark}></Blogs>
        </div>
        <div className="right-site w-[30%]">
          <h2>Reading time  : 0</h2>
          <h2>Bookmarked count : 0</h2>
          {
            boolMark.map((mark)=><p>{mark.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
