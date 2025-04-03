import { useState } from "react";

 

const TastCount = ( ) => {
  
 const [count, setcount]= useState(0)
    function handleEvent(){
         const newCount = count + 1;
         setcount(newCount)
      }
    function handleEventMinas(){
         const newCount = count - 1;
         setcount(newCount)
      }
      
      function emptyCounter(){
      
        setcount(0)
      }
    return (
        <div>
            <h4>count number</h4>
            <h2>count : {count}</h2>
            <button onClick={handleEvent}>add 1 </button>
            <button onClick={handleEventMinas}>minas 1 </button>
            <button onClick={emptyCounter}>count 0 </button>
        </div>
    );
};

export default TastCount;