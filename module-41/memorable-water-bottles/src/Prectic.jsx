import React from 'react';

 
 
const Prectic = ({name,sub,isdone , time= 0}) => {
     
    if(isdone === true){
        return <p>name: {name} time :{time}</p>
      }
      else{
        return <p>pandin : {sub} </p>
      }
};

export default Prectic;