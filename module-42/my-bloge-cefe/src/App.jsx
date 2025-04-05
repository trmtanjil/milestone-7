
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Navbar from './components/navbar/Navbar'

function App() {
  const [boolMark, setbokkMark]=useState([])
  const [readingCount, setreadingCount]= useState(0)

const handleBookMark=(blog)=>{
setbokkMark([...boolMark, blog])
}


const handleReadingCount = (read,id)=>{
  const newCount = readingCount+read;
  setreadingCount(newCount)

  handleRemoveReadingBook(id)

}

const handleRemoveReadingBook=(id)=>{
const remeanigBookMark = boolMark.filter((mark)=>mark.id!==id);
setbokkMark(remeanigBookMark)
}

  return (
    <>
      <Navbar></Navbar>
   

      <div className="main-blogs flex text-center">
        <div className="left-site w-[70%]">

      <Blogs  handleBookMark={handleBookMark} handleReadingCount={handleReadingCount}></Blogs>
        </div>
        <div className="right-site w-[30%]">
          <h2>Reading time  : {readingCount}</h2>
          <h2>Bookmarked count : {boolMark.length}</h2>
          {
            boolMark.map((mark)=><p>{mark.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
